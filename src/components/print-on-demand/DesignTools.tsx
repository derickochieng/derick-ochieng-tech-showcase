import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Type, Image, Shapes, Star, Heart, Circle } from "lucide-react";

export const DesignTools = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [textSize, setTextSize] = useState(24);
  const [textColor, setTextColor] = useState("#000000");

  const fonts = ["Arial", "Helvetica", "Times New Roman", "Georgia", "Verdana"];
  const predefinedShapes = [
    { icon: Circle, name: "Circle" },
    { icon: Star, name: "Star" },
    { icon: Heart, name: "Heart" }
  ];

  const templates = [
    { id: 1, name: "Kenyan Flag", category: "National" },
    { id: 2, name: "Safari Animals", category: "Nature" },
    { id: 3, name: "Nairobi Skyline", category: "City" },
    { id: 4, name: "Maasai Pattern", category: "Cultural" },
    { id: 5, name: "Mount Kenya", category: "Nature" },
    { id: 6, name: "Swahili Quotes", category: "Text" }
  ];

  return (
    <div className="w-80 border-r bg-card p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Design Tools</h2>

      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upload" className="text-xs">
            <Upload className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="text" className="text-xs">
            <Type className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="graphics" className="text-xs">
            <Shapes className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="templates" className="text-xs">
            <Image className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>

        {/* Upload Tab */}
        <TabsContent value="upload" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Upload Image</h3>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag & drop or click to upload
              </p>
              <Button variant="outline" size="sm">
                Choose File
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Supported: JPG, PNG, SVG (Max 10MB)
            </p>
          </Card>
        </TabsContent>

        {/* Text Tab */}
        <TabsContent value="text" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Add Text</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="text-input">Text</Label>
                <Textarea 
                  id="text-input"
                  placeholder="Enter your text..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="font-select">Font</Label>
                <select 
                  id="font-select"
                  className="w-full mt-1 p-2 border rounded-md"
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                >
                  {fonts.map(font => (
                    <option key={font} value={font}>{font}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="text-size">Size</Label>
                  <Input
                    id="text-size"
                    type="number"
                    value={textSize}
                    onChange={(e) => setTextSize(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="text-color">Color</Label>
                  <Input
                    id="text-color"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="mt-1 h-10"
                  />
                </div>
              </div>

              <Button className="w-full">Add Text</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Graphics Tab */}
        <TabsContent value="graphics" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Shapes & Icons</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {predefinedShapes.map((shape, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="aspect-square p-2"
                  title={shape.name}
                >
                  <shape.icon className="h-6 w-6" />
                </Button>
              ))}
            </div>
            
            <div className="space-y-2">
              <Label>Color</Label>
              <Input type="color" defaultValue="#000000" />
            </div>
            
            <Button className="w-full mt-3">Add Shape</Button>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Kenyan Templates</h3>
            <div className="space-y-2">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium">{template.name}</p>
                    <p className="text-xs text-muted-foreground">{template.category}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Use
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Uploads */}
      <Card className="p-4 mt-6">
        <h3 className="font-semibold mb-3">Recent Uploads</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-muted rounded border"></div>
          <div className="aspect-square bg-muted rounded border"></div>
        </div>
      </Card>
    </div>
  );
};