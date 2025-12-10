import React from 'react';
import { motion } from 'framer-motion';

// Mock path for the logo as per requirements
const timeLogo = "components/imagens/time.png";

interface SlideLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  tagline?: string;
  showSidebar?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  tagline,
  showSidebar = true 
}) => {
  return (
    <div className="w-full h-full flex bg-white relative overflow-hidden">
      {/* Sidebar */}
      {showSidebar && (
        <div className="h-full w-[4%] min-w-[60px] bg-gradient-to-b from-nu-primary to-nu-secondary flex flex-col justify-end items-center pb-8 shadow-lg z-20 absolute left-0 top-0">
          <img
            src={timeLogo}
            alt="Nubank – Time de Governança Locker"
            className="w-10 h-auto object-contain mb-6"
            // Fallback for demo purposes if image is missing
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML += '<span class="text-white text-xs rotate-[-90deg] whitespace-nowrap mb-8 font-rubik">NUBANK</span>';
            }}
          />
        </div>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 h-full flex flex-col px-12 py-10 ${showSidebar ? 'ml-[4%]' : ''}`}>
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full mb-8 z-10 relative"
        >
          <h1 className="font-rubik text-4xl lg:text-5xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent mb-1">
            {title}
          </h1>
          <h2 className="font-poppins text-xl lg:text-2xl text-gray-600 font-medium">
            {subtitle}
          </h2>
          {tagline && (
             <p className="font-poppins text-sm text-nu-accent-1 mt-1 font-medium tracking-wide">
               {tagline}
             </p>
          )}
          
          {/* Divider Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-nu-primary to-nu-secondary mt-4 rounded-full opacity-80" />
        </motion.header>

        {/* Content */}
        <div className="flex-1 relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SlideLayout;