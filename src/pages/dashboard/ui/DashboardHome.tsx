import { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import Community from '@/assets/images/community.png';
import Bags from '@/assets/images/bags.png';
import Processor from '@/assets/images/processor.png';
import ArrowUp from '@/assets/images/up.svg';
import MetricsCard from '@/entities/metrics/ui/MetricsCard';

import { CallCentreTable } from '@/pages/dashboard/model/components/CallCentreTable';
import { CallTraffic } from '@/pages/dashboard/model/components/CallTraffics';
import Sidebar from '@/widgets/leftSidebar/ui/Sidebar';
import DashboardHeader from '@/widgets/dashboardHeader/ui/DashboardHeader';
import { ChannelsChart } from '@/pages/dashboard/model/components/ChanelsChart';
import Chart from '@/pages/dashboard/model/containers/ChartsContainer';
import ChartsContainer from '@/pages/dashboard/model/containers/ChartsContainer';
import MeticsCardContainers from '@/pages/dashboard/model/containers/MeticsCardContainers';

const DashboardHome = () => {
  // Theme for media queries
  const theme = useTheme();
  const isSmallLaptop = useMediaQuery('(max-width:1024px)');

  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Handle clicks outside the sidebar
  useEffect(() => {
    // Only add listener when sidebar is open
    if (!isSidebarOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if click was on toggle button - ignore if it was
      if (target.closest('.sidebar-toggle-button')) {
        return;
      }

      // Check if click was outside sidebar
      if (!target.closest('[data-sidebar="true"]')) {
        closeSidebar();
      }
    };

    // Add listener with a slight delay to avoid immediate trigger on toggle
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 10);

    // Clean up
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <Box className="h-full relative bg-gray-200 flex flex-row items-start justify-center py-0 !px-[10px] pb-[32px] box-border gap-[30px] leading-[normal] tracking-[normal] mq750:gap-[15px] mq750:pl-[5px] mq750:box-border">
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="w-full max-w-[1280px] flex justify-center">
        <main
          className={`w-full max-w-[1280px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border ${isSidebarOpen ? 'ml-[0px]' : 'ml-0'} transition-all duration-300 ${isSmallLaptop ? 'max-w-[900px]' : ''}`}
        >
          <section className="w-full flex flex-col items-center justify-center gap-[30px]">
            <div className="sidebar-toggle-button w-full">
              <DashboardHeader
                onToggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
            <MeticsCardContainers />
            <ChartsContainer />
            <CallTraffic />
          </section>
        </main>
      </div>
    </Box>
  );
};

export default DashboardHome;
