import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Analytics = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('Complete');

  const data = [
    { name: 'Jan', value: 549, target: 500 },
    { name: 'Feb', value: 278, target: 500 },
    { name: 'Mar', value: 875, target: 500 },
    { name: 'Apr', value: 617, target: 600 },
    { name: 'May', value: 506, target: 600 },
    { name: 'Jun', value: 36, target: 600 },
    { name: 'Jul', value: 185, target: 600 },
    { name: 'Aug', value: 191, target: 600 },
    { name: 'Sep', value: 122, target: 600 },
    { name: 'Oct', value: 550, target: 600 },
    { name: 'Nov', value: 881, target: 600 },
    { name: 'Dec', value: 539, target: 600 }
  ];

  const typeFilters = ['Refurbishment', 'New build', 'All'];
  const statusFilters = ['Complete', 'Estimate'];

  return (
    <section id="analytics" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filter Section */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Filter by</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {typeFilters.map((filter) => (
                      <Button
                        key={filter}
                        variant={selectedType === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(filter)}
                        className="rounded-full text-xs"
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statusFilters.map((filter) => (
                      <Button
                        key={filter}
                        variant={selectedStatus === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(filter)}
                        className="rounded-full text-xs"
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-medium mb-3">Key</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-0.5 bg-primary"></div>
                      <span>500 Target - Performance Goal 2030</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-0.5 bg-muted-foreground"></div>
                      <span>600 Target - Performance Goal 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-right">
                    PERFORMANCE
                    <br />
                    <span className="text-primary">METRICS</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Intensity measured by performance/month
                  </p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download data
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(var(--primary))" 
                        radius={[2, 2, 0, 0]}
                        opacity={0.8}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
