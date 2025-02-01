import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TestimonialsComparison() {
  const comparisonData = [
    { category: "Cost", freelancers: "Medium", inHouse: "High", agencies: "High", taskMate: "Low" },
    { category: "Skill Level", freelancers: "Varies", inHouse: "Medium", agencies: "High", taskMate: "High" },
    { category: "Speed", freelancers: "Medium", inHouse: "Slow", agencies: "Medium", taskMate: "Fast" },
    { category: "Flexibility", freelancers: "High", inHouse: "Low", agencies: "Medium", taskMate: "High" },
  ]

  const getCellColor = (value: string, column: string, rowCategory: string) => {
    if (column === "taskMate") return "text-green-500 font-semibold";
    if (column === "agencies" && rowCategory === "Cost" && value === "High") 
      return "text-red-500 font-semibold";
    if (column === "agencies" && rowCategory === "Skill Level" && value === "High") 
      return "text-green-500 font-semibold";
    if (column === "inHouse" && (value === "High" || value === "Slow" || value === "Low")) 
      return "text-red-500 font-semibold";
    if (column === "freelancers" && value === "Varies") 
      return "text-red-500 font-semibold";
    if (column === "freelancers" && value === "High") 
      return "text-green-500 font-semibold";
    return "";
  };


  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">💬 What Our Clients Say</h2>
        <blockquote className="text-lg md:text-2xl lg:text-2xl italic text-center mb-16 text-muted-foreground">
          "TaskMate transformed our operations – AI systems are a game-changer!"
        </blockquote>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground text-lg md:text-xl p-4 min-w-[150px]">Category</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">Freelancers</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">In-house teams</TableHead>
                <TableHead className="text-lg md:text-xl p-4 min-w-[150px]">Agencies</TableHead>
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
                  <TableCell className={`text-lg md:text-xl p-4 min-w-[150px] ${getCellColor(row.inHouse, "inHouse", row.category)}`}>
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
  )
}

