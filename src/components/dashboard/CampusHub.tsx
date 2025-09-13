import DashboardWidget from "./DashboardWidget";

const CampusHub = () => {
  const facilityData = [
    {
      name: "Library",
      occupancy: { current: 734, total: 1200 },
      status: "operational",
      details: "VR Stations: 8/12 Active",
      utilization: 61
    },
    {
      name: "Dining Services", 
      occupancy: { current: 89, total: 120 },
      status: "operational",
      details: "Avg Wait: 2.3min • Nutrition: A+",
      utilization: 74
    },
    {
      name: "Fitness Center",
      occupancy: { current: 156, total: 180 },
      status: "operational", 
      details: "Equipment Available: 156/180",
      utilization: 87
    },
    {
      name: "Study Halls",
      occupancy: { current: 234, total: 300 },
      status: "operational",
      details: "Quiet Zones: 12/15 Available", 
      utilization: 78
    }
  ];

  const getUtilizationColor = (utilization: number) => {
    if (utilization < 50) return "text-success";
    if (utilization < 80) return "text-primary";
    return "text-orange-400";
  };

  const getProgressColor = (utilization: number) => {
    if (utilization < 50) return "bg-success";
    if (utilization < 80) return "bg-primary";
    return "bg-orange-400";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Campus Hub</h2>
      
      <DashboardWidget title="Facility Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilityData.map((facility) => (
            <div key={facility.name} className="space-y-3 p-4 bg-muted/5 border border-border/30 rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-foreground text-lg">{facility.name}</h4>
                <span className={`font-bold text-lg ${getUtilizationColor(facility.utilization)}`}>
                  {facility.utilization}%
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Occupancy</span>
                  <span className="text-foreground">
                    {facility.occupancy.current}/{facility.occupancy.total}
                  </span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(facility.utilization)}`}
                    style={{ width: `${facility.utilization}%` }}
                  />
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{facility.details}</p>
            </div>
          ))}
        </div>
      </DashboardWidget>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardWidget title="Campus Events">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Tech Symposium</p>
                <p className="text-sm text-muted-foreground">Main Auditorium • 2:00 PM</p>
              </div>
              <span className="text-primary text-sm font-medium">Today</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-success/10 border border-success/20 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Research Fair</p>
                <p className="text-sm text-muted-foreground">Exhibition Hall • 10:00 AM</p>
              </div>
              <span className="text-success text-sm font-medium">Tomorrow</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/10 border border-border/20 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Alumni Meet</p>
                <p className="text-sm text-muted-foreground">Conference Room • 4:00 PM</p>
              </div>
              <span className="text-muted-foreground text-sm font-medium">Dec 15</span>
            </div>
          </div>
        </DashboardWidget>

        <DashboardWidget title="Quick Stats">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary">4,276</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center p-3 bg-success/5 border border-success/20 rounded-lg">
              <div className="text-2xl font-bold text-success">98.7%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">342</div>
              <div className="text-sm text-muted-foreground">Faculty Online</div>
            </div>
            <div className="text-center p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">1,847</div>
              <div className="text-sm text-muted-foreground">Daily Interactions</div>
            </div>
          </div>
        </DashboardWidget>
      </div>
    </div>
  );
};

export default CampusHub;