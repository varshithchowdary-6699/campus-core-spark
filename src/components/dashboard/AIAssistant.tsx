import DashboardWidget from "./DashboardWidget";
import StatusIndicator from "./StatusIndicator";

const AIAssistant = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Malla Reddy AI Assistant</h2>
      
      <DashboardWidget variant="glass" title="System Status">
        <div className="flex items-center justify-between mb-4">
          <StatusIndicator status="operational" label="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">23%</div>
            <div className="text-muted-foreground">CPU Usage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">67%</div>
            <div className="text-muted-foreground">Memory</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">99.97%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </DashboardWidget>

      <DashboardWidget title="AI Performance Metrics">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Neural Processing</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-[97%]"></div>
              </div>
              <span className="text-primary font-semibold">97.3%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground">Response Accuracy</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full w-[99%]"></div>
              </div>
              <span className="text-success font-semibold">99.1%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground">Learning Rate</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-primary-glow h-2 rounded-full w-[94%]"></div>
              </div>
              <span className="text-primary-glow font-semibold">94.2%</span>
            </div>
          </div>
        </div>
      </DashboardWidget>

      <DashboardWidget title="Recent AI Interactions">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
            <span className="text-foreground">Student Query: Course Registration</span>
            <span className="text-success text-sm">Resolved • 2min ago</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
            <span className="text-foreground">Faculty Request: Room Booking</span>
            <span className="text-success text-sm">Resolved • 5min ago</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
            <span className="text-foreground">System Alert: Network Optimization</span>
            <span className="text-primary text-sm">Processing • 1min ago</span>
          </div>
        </div>
      </DashboardWidget>
    </div>
  );
};

export default AIAssistant;