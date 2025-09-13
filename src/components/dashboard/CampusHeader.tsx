import { Badge } from "@/components/ui/badge";

const CampusHeader = () => {
  return (
    <div className="hero-gradient rounded-2xl p-8 mb-6 text-white shadow-[--shadow-enterprise] border border-white/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-2">
            CampusCore
            <br />
            <span className="text-xl font-medium text-primary-glow">
              Enterprise Ecosystem
            </span>
          </h1>
          <p className="text-blue-200 text-lg mb-4">
            Campus Management & Intelligence
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-success text-success-foreground px-4 py-2 text-sm font-medium">
            AI-Powered
          </Badge>
          <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
            24/7 Operations
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CampusHeader;