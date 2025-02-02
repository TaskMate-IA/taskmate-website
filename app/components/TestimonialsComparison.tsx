import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TestimonialsComparison() {
  const comparisonData = [
    { category: "Coût", freelancers: "Moyen", inHouse: "Élevé", agencies: "Élevé", taskMate: "Faible" },
    { category: "Niveau de compétence", freelancers: "Variable", inHouse: "Moyen", agencies: "Élevé", taskMate: "Élevé" },
    { category: "Vitesse", freelancers: "Moyen", inHouse: "Lent", agencies: "Moyen", taskMate: "Rapide" },
    { category: "Flexibilité", freelancers: "Élevé", inHouse: "Faible", agencies: "Moyen", taskMate: "Élevé" },
  ];

  const getCellColor = (value: string, column: string, rowCategory: string) => {
    if (column === "taskMate") return "text-green-500 font-semibold";
    if (column === "agencies" && rowCategory === "Coût" && value === "Élevé") 
      return "text-red-500 font-semibold";
    if (column === "agencies" && rowCategory === "Niveau de compétence" && value === "Élevé") 
      return "text-green-500 font-semibold";
    if (column === "inHouse" && (value === "Élevé" || value === "Lent" || value === "Faible")) 
      return "text-red-500 font-semibold";
    if (column === "freelancers" && value === "Variable") 
      return "text-red-500 font-semibold";
    if (column === "freelancers" && value === "Élevé") 
      return "text-green-500 font-semibold";
    return "";
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">💬 Comment on se positionne?</h2>
        <blockquote className="text-lg md:text-xl lg:text-2xl italic text-center mb-16 text-muted-foreground">
         "TaskMate a transformé nos opérations grâce à l'automatisation et à l'IA – un véritable atout pour notre succès!"
        </blockquote>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground text-lg md:text-xl p-4 min-w-[150px]">Catégorie</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">Freelancers</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">Équipes internes</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">Agences</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">TaskMate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-lg md:text-xl p-4 min-w-[150px]">{row.category}</TableCell>
                  <TableCell
                    className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.freelancers, "freelancers", row.category)}`}
                  >
                    {row.freelancers}
                  </TableCell>
                  <TableCell
                    className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.inHouse, "inHouse", row.category)}`}
                  >
                    {row.inHouse}
                  </TableCell>
                  <TableCell
                    className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.agencies, "agencies", row.category)}`}
                  >
                    {row.agencies}
                  </TableCell>
                  <TableCell
                    className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.taskMate, "taskMate", row.category)}`}
                  >
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


