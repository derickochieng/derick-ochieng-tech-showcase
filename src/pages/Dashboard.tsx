import { Navigation } from "@/components/print-on-demand/Navigation";
import { UserProfile } from "@/components/print-on-demand/UserProfile";
import { OrderHistory } from "@/components/print-on-demand/OrderHistory";
import { SavedDesigns } from "@/components/print-on-demand/SavedDesigns";
import { Footer } from "@/components/print-on-demand/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <UserProfile />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <OrderHistory />
            <SavedDesigns />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;