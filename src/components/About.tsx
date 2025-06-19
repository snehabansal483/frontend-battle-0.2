
import React from 'react';
import { CheckCircle, Users, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience with cutting-edge technologies.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'User Focused',
      description: 'Every design decision is made with your users in mind, ensuring maximum engagement.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable infrastructure for peace of mind.'
    }
  ];

  const achievements = [
    'Award-winning design team',
    'Responsive across all devices',
    'SEO optimized by default',
    'Ongoing support & maintenance'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Our Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences 
            that help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-lg text-muted-foreground">
              Our passion lies in creating beautiful, functional websites that not only look amazing 
              but also deliver real business results. We've helped hundreds of companies transform 
              their digital presence and achieve their goals.
            </p>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
            <div className="relative bg-card p-8 rounded-3xl border shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-lg font-medium mb-2">Uptime Guarantee</div>
              <div className="text-muted-foreground">
                Your website will be online when your customers need it most.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
