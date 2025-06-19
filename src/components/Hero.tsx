
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Video from './Video';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Modern Web</span>
              <br />
              <span className="text-foreground">Design Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              We create stunning, responsive websites that captivate your audience and drive results. 
              Experience the perfect blend of creativity and functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group text-lg px-8 py-6 rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5Y</div>
                <div className="text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="animate-fade-in lg:animate-slide-in">
            <Video
              src="https://drive.google.com/file/d/1yNcZSA3wK0COf_5jhjx_KuftHI5tzOdC/preview"
              title="Modern Web Design Showcase"
              description="See our latest web design projects in action"
              autoPlay={true}
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
