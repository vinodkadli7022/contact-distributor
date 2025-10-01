import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText } from "lucide-react";

interface CsvRow {
  firstName: string;
  phone: string;
  notes: string;
}

interface Distribution {
  agentId: number;
  items: CsvRow[];
}

const CsvUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [distribution, setDistribution] = useState<Distribution[]>([]);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (!['csv', 'xlsx', 'xls'].includes(fileExtension || '')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a CSV, XLSX, or XLS file",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    // Mock CSV parsing and distribution
    // In production, this would parse the actual CSV file
    const mockData: CsvRow[] = Array.from({ length: 27 }, (_, i) => ({
      firstName: `Person ${i + 1}`,
      phone: `555-${String(i).padStart(4, '0')}`,
      notes: `Notes for person ${i + 1}`,
    }));

    // Distribute among 5 agents
    const agentCount = 5;
    const itemsPerAgent = Math.floor(mockData.length / agentCount);
    const remainder = mockData.length % agentCount;

    const newDistribution: Distribution[] = [];
    let currentIndex = 0;

    for (let i = 0; i < agentCount; i++) {
      const itemCount = itemsPerAgent + (i < remainder ? 1 : 0);
      newDistribution.push({
        agentId: i + 1,
        items: mockData.slice(currentIndex, currentIndex + itemCount),
      });
      currentIndex += itemCount;
    }

    setDistribution(newDistribution);
    toast({
      title: "Success",
      description: `File processed and distributed among ${agentCount} agents`,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Upload CSV File</CardTitle>
          <CardDescription>
            Upload a CSV file with FirstName, Phone, and Notes columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center transition-smooth hover:border-primary">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <div className="space-y-2">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-primary hover:underline">Click to upload</span>
                  <span className="text-muted-foreground"> or drag and drop</span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  CSV, XLSX, or XLS (MAX. 20MB)
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {file && (
              <div className="flex items-center gap-2 p-4 bg-secondary rounded-lg">
                <FileText className="h-5 w-5 text-primary" />
                <span className="flex-1 text-sm">{file.name}</span>
                <Button onClick={handleUpload}>
                  Process & Distribute
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {distribution.length > 0 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Distribution Results</CardTitle>
            <CardDescription>
              Items distributed among {distribution.length} agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {distribution.map((dist) => (
                <div key={dist.agentId} className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    Agent {dist.agentId} ({dist.items.length} items)
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>First Name</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dist.items.map((item, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell className="text-muted-foreground">
                              {item.notes}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CsvUpload;
