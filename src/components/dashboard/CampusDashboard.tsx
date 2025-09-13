import { useState } from "react";
import { Brain, Calendar, Building2 } from "lucide-react";
import CampusHeader from "./CampusHeader";
import TabNavigation from "./TabNavigation";
import AIAssistant from "./AIAssistant";
import ScheduleMatrix from "./ScheduleMatrix";
import CampusHub from "./CampusHub";

const CampusDashboard = () => {
  const [activeTab, setActiveTab] = useState("ai-assistant");

  const tabs = [
    {
      id: "ai-assistant",
      label: "AI Assistant",
      icon: <Brain className="w-4 h-4" />
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      id: "campus-hub",
      label: "Campus Hub", 
      icon: <Building2 className="w-4 h-4" />
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "ai-assistant":
        return <AIAssistant />;
      case "schedule":
        return <ScheduleMatrix />;
      case "campus-hub":
        return <CampusHub />;
      default:
        return <AIAssistant />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <CampusHeader />
        
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <div className="enterprise-transition">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CampusDashboard;