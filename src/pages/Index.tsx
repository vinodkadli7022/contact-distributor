import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Upload, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Agent Management System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Efficiently manage agents and distribute CSV lists with automated workflows
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => navigate("/auth")} className="gap-2">
              <Shield className="h-5 w-5" />
              Get Started
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-card rounded-lg shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Secure Authentication</h3>
              <p className="text-muted-foreground">
                JWT-based admin authentication for secure access
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Agent Management</h3>
              <p className="text-muted-foreground">
                Easily add and manage your team of agents
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">CSV Distribution</h3>
              <p className="text-muted-foreground">
                Upload CSV files and automatically distribute among agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
