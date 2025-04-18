
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Set the one minute countdown (60 seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 5
  });
  
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Convert current time left to total seconds
      let totalSeconds = 
        timeLeft.days * 24 * 60 * 60 + 
        timeLeft.hours * 60 * 60 + 
        timeLeft.minutes * 60 + 
        timeLeft.seconds;
      
      if (totalSeconds > 0) {
        // Decrease by 1 second
        totalSeconds -= 1;
        
        // Convert back to days, hours, minutes, seconds
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        // If countdown is over
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
        handleEventStart();
      }
    };

    // Set up interval to update the countdown
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  const handleEventStart = () => {
    // Function to handle any additional actions when the event starts
    console.log("Event has started!");
    // Additional actions can be added here like updating other UI elements
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-aavishkar-white/30"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-aavishkar-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-aavishkar-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block animate-fade-in">
              <span className="bg-aavishkar-green/10 text-aavishkar-green text-sm font-medium px-3 py-1 rounded-full">
                April 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue">
                AAVISHKAR 25
              </span>
            </h1>
            
            <div 
              className="h-1 w-24 bg-aavishkar-yellow rounded-full origin-left animate-reveal"
              style={{ animationDelay: '0.3s' }}
            />
            
            <h2 
              className="text-2xl md:text-3xl font-display font-semibold text-aavishkar-yellow animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              ANNUAL FLAGSHIP EVENT
            </h2>
            
            {/* Conditional Rendering - Countdown Timer or Event Started Message */}
            {!eventStarted ? (
              <div className="grid grid-cols-4 gap-2 md:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col items-center">
                  <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-2 md:p-4 w-full">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-darkblue text-center">
                      {timeLeft.days}
                    </div>
                  </div>
                  <div className="text-sm mt-1 text-gray-600">Days</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-2 md:p-4 w-full">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-blue text-center">
                      {timeLeft.hours}
                    </div>
                  </div>
                  <div className="text-sm mt-1 text-gray-600">Hours</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-2 md:p-4 w-full">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-green text-center">
                      {timeLeft.minutes}
                    </div>
                  </div>
                  <div className="text-sm mt-1 text-gray-600">Minutes</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-2 md:p-4 w-full">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-yellow text-center">
                      {timeLeft.seconds}
                    </div>
                  </div>
                  <div className="text-sm mt-1 text-gray-600">Seconds</div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in py-6 px-8 bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue rounded-lg shadow-lg">
                <div className="text-2xl md:text-4xl font-bold text-white text-center animate-pulse">
                  Event Happening Now!
                </div>
                <div className="text-sm md:text-base text-white/80 mt-2 text-center">
                  Join us at Kathmandu University
                </div>
              </div>
            )}
            
            <p 
              className="text-lg md:text-xl text-foreground/80 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Showcasing the best of innovation and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#events" 
                className="bg-aavishkar-blue hover:bg-aavishkar-blue/90 text-white px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
              >
                Explore Events
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#about" 
                className="bg-transparent hover:bg-gray-100 text-foreground border border-gray-300 px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-green/20 shadow-lg aspect-square">
                  <img 
                    src="/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png" 
                    alt="Student with trophy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105 mt-8">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-yellow/20 shadow-lg aspect-square">
                  <img 
                    src="/lovable-uploads/e330865f-5aec-48fb-ab63-62950900dfa0.png" 
                    alt="Aquabot in water" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105 -mt-8">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-blue/20 shadow-lg aspect-square">
                  <img 
                    src="/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png" 
                    alt="KURC team" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-darkblue/20 shadow-lg aspect-square">
                  <img 
                    src="/lovable-uploads/d553e50d-8757-408f-853c-7bd93298485f.png" 
                    alt="Innovation showcase" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Logos */}
            <div className="absolute bottom-0 md:bottom-6 left-0 right-0 flex justify-center space-x-3">
              <img src="/lovable-uploads/945659c3-f9c5-47d3-8e8d-359afac7f254.png" alt="Kathmandu University Logo" className="h-10 w-auto" />
              <img src="/lovable-uploads/ea507bbe-f7e9-4d1e-8c70-7a7c24bc833b.png" alt="KURC Logo" className="h-10 w-auto" />
              <img src="/lovable-uploads/98e57274-8514-4b25-9115-25551aa2a0db.png" alt="TTC Logo" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
