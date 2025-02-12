"use client";

import { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useLanguage } from "../context/LanguageContext"; // Adjust the path as needed

interface ComparisonRow {
  category: string;
  freelancers: string;
  inHouse: string;
  agencies: string;
  taskMate: string;
}

interface TestimonialsComparisonContent {
  heading: string;
  blockquote: string;
  comparisonData: ComparisonRow[];
}

export default function TestimonialsComparison() {
  // Get the current language from your context
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<TestimonialsComparisonContent | null>(null);

  useEffect(() => {
    // Fetch the locale-specific JSON file from /public/locales/{language}/testimonialsComparison.json
    fetch(`/locales/${language}/testimonialsComparison.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: TestimonialsComparisonContent) => setContent(data))
      .catch((err) =>
        console.error("Error loading testimonials comparison content:", err)
      );
  }, [language]);

  // Define value mappings for both French and English
  const highValues = ["Élevé", "High"];
  const slowValues = ["Lent", "Slow"];
  const lowValues = ["Faible", "Low"];
  const variableValues = ["Variable"];
  const averageValues = ["Moyen", "Average"];

  const getCellColor = (value: string, column: string, rowCategory: string) => {
    // For the TaskMate column, always use green styling.
    if (column === "taskMate") return "text-green-500 font-semibold";

    // Agencies column: for Cost/Coût, a high value is unfavorable;
    // for Skill level/Niveau de compétence, a high value is favorable.
    if (column === "agencies") {
      if ((rowCategory === "Coût" || rowCategory === "Cost") && highValues.includes(value))
        return "text-red-500 font-semibold";
      if (
        (rowCategory === "Niveau de compétence" || rowCategory === "Skill level") &&
        highValues.includes(value)
      )
        return "text-green-500 font-semibold";
    }

    // InHouse column: if the value is high, slow, or low, mark it as unfavorable.
    if (column === "inHouse" && (highValues.includes(value) || slowValues.includes(value) || lowValues.includes(value)))
      return "text-red-500 font-semibold";

    // Freelancers column: if the value is variable, mark it as unfavorable;
    // if high, mark it as favorable.
    if (column === "freelancers") {
      if (variableValues.includes(value)) return "text-red-500 font-semibold";
      if (highValues.includes(value)) return "text-green-500 font-semibold";
    }

    return "";
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  // For header translations, we can conditionally display either English or French text:
  const headers = {
    category: language === "en" ? "Category" : "Catégorie",
    freelancers: "Freelancers", // same in both languages
    inHouse: language === "en" ? "In-House Teams" : "Équipes internes",
    agencies: language === "en" ? "Agencies" : "Agences",
    taskMate: "TaskMate", // same in both languages
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <blockquote className="text-lg md:text-xl lg:text-2xl italic text-center mb-16 text-muted-foreground">
          {content.blockquote}
        </blockquote>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground text-lg md:text-xl p-4 min-w-[150px]">
                  {headers.category}
                </TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">
                  {headers.freelancers}
                </TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">
                  {headers.inHouse}
                </TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">
                  {headers.agencies}
                </TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">
                  {headers.taskMate}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {content.comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-lg md:text-xl p-4 min-w-[150px]">
                    {row.category}
                  </TableCell>
                  <TableCell className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.freelancers, "freelancers", row.category)}`}>
                    {row.freelancers}
                  </TableCell>
                  <TableCell className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.inHouse, "inHouse", row.category)}`}>
                    {row.inHouse}
                  </TableCell>
                  <TableCell className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.agencies, "agencies", row.category)}`}>
                    {row.agencies}
                  </TableCell>
                  <TableCell className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.taskMate, "taskMate", row.category)}`}>
                    {row.taskMate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
