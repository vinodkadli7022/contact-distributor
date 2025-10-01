import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgentManagement from "@/components/AgentManagement";
import CsvUpload from "@/components/CsvUpload";
import { Users, Upload, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("agents");

  const handleLogout = () => {
    // TODO: Implement actual logout with Lovable Cloud
    navigate("/auth");
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Agent Management System
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="agents" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload CSV
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-4">
            <AgentManagement />
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <CsvUpload />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
