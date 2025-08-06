import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OrderHistory = () => {
  const orders = [
    { id: "#KP-001", date: "Dec 15, 2024", status: "Delivered", total: "KSH 2,400", items: 2 },
    { id: "#KP-002", date: "Dec 10, 2024", status: "In Production", total: "KSH 1,200", items: 1 },
    { id: "#KP-003", date: "Dec 5, 2024", status: "Shipped", total: "KSH 3,600", items: 3 }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Order History</h3>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">{order.id}</p>
              <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
            </div>
            <div className="text-right">
              <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                {order.status}
              </Badge>
              <p className="font-bold mt-1">{order.total}</p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4">View All Orders</Button>
    </Card>
  );
};