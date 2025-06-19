
import React from 'react';
import { Code, Palette, Search, Smartphone, Globe, BarChart, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Video from './Video';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
      price: 'From $2,999',
      color: 'bg-blue-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      price: 'From $1,999',
      color: 'bg-green-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      price: 'From $4,999',
      color: 'bg-orange-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4'
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and online visibility.',
      price: 'From $799/mo',
      color: 'bg-purple-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'E-commerce',
      description: 'Complete online store solutions with payment integration.',
      price: 'From $3,999',
      color: 'bg-red-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analytics & Insights',
      description: 'Track performance and gain valuable business insights.',
      price: 'From $299/mo',
      color: 'bg-indigo-500',
      selected: true,
      videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Service Kits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional digital solutions designed to elevate your business presence. 
            Choose from our curated service packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`relative group border-0 shadow-lg transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur-sm ${
              service.selected ? 'ring-2 ring-primary' : ''
            }`}>
              <CardContent className="p-0">
                {/* Video Section */}
                <div className="relative">
                  <Video
                    src={service.videoSrc}
                    autoPlay={true}
                    muted={true}
                    controls={false}
                    className="border-0 shadow-none"
                  />
                </div>
                
                {/* Service Info Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {service.selected && (
                        <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                      <div className={`p-2 rounded-full ${service.color} text-white`}>
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <Settings className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">💡 Need a custom solution? Let's talk!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
