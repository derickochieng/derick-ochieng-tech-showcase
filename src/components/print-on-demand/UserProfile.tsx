import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";

export const UserProfile = () => {
  return (
    <Card className="p-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-bold">John Mwangi</h2>
        <Badge variant="secondary">Premium Member</Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">john.mwangi@email.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">+254 700 123 456</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Nairobi, Kenya</span>
        </div>
      </div>
      
      <Button className="w-full mt-6" variant="outline">
        <Edit className="h-4 w-4 mr-2" />
        Edit Profile
      </Button>
    </Card>
  );
};