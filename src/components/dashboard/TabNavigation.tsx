import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-6 py-3 rounded-xl enterprise-transition font-medium flex items-center gap-2",
            "border border-border/50 hover:border-primary/50",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground shadow-[--shadow-enterprise]"
              : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
          )}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;