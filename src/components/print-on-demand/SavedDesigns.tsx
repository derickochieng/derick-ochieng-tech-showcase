import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const SavedDesigns = () => {
  const designs = [
    { id: 1, name: "Kenya Flag Tee", product: "T-Shirt", saved: "2 days ago" },
    { id: 2, name: "Safari Animals", product: "Hoodie", saved: "1 week ago" },
    { id: 3, name: "Maasai Pattern", product: "Tote Bag", saved: "2 weeks ago" }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Saved Designs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {designs.map((design) => (
          <div key={design.id} className="border rounded-lg p-4">
            <div className="aspect-square bg-muted rounded mb-3"></div>
            <h4 className="font-medium">{design.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{design.product} • {design.saved}</p>
            <Button size="sm" className="w-full">Continue Design</Button>
          </div>
        ))}
      </div>
    </Card>
  );
};