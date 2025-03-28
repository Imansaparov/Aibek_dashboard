import { FunctionComponent, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { paths } from '@/shared/paths';

import Home from '@/assets/images/home.svg';
import Statistic from '@/assets/images/Graph.svg';
import Portfolio from '@/assets/images/Bag.svg';
import Settings from '@/assets/images/Setting.svg';
import Logout from '@/assets/images/Logout.svg';
import Back from '@/assets/images/Search bar.svg';

type LeftSidebarType = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

type NavItemProps = {
  icon: string;
  alt: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
};

const NavItem: FunctionComponent<NavItemProps> = ({
  icon,
  alt,
  isActive,
  onClick,
}) => {
  return (
    <Box
      className={`rounded-smi ${
        isActive ? 'bg-gray-100' : ''
      } overflow-hidden flex flex-row items-center justify-center p-4 cursor-pointer`}
      onClick={onClick}
    >
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0"
        loading="lazy"
        alt={alt}
        src={icon}
      />
    </Box>
  );
};

const LeftSidebar: FunctionComponent<LeftSidebarType> = ({
  isOpen,
  onClose,
}) => {
  // State to track window width
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Check window width on mount and when resized
  useEffect(() => {
    const checkWidth = () => {
      setIsSmallScreen(window.innerWidth < 1400);
    };

    // Initial check
    checkWidth();

    // Add resize listener
    window.addEventListener('resize', checkWidth);

    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Handle navigation and highlighting active route
  const isActive = (path: string) => {
    return currentPath === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isSmallScreen) {
      onClose();
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Add your logout logic here
    // For example: authService.logout();
    onClose();
  };

  // Only render the sidebar if it's open
  if (!isOpen) return null;

  return (
    <Box
      className={`shadow-[-1.5px_0px_0px_rgba(255,_255,_255,_0.15)_inset] w-[100px] z-10 fixed inset-y-0 left-0 bg-gray-200 overflow-y-auto flex flex-col items-center justify-between py-[30px] px-[18px] box-border gap-8 max-w-[90%] mq750:pt-16 mq750:box-border mq1100:pt-[99px] mq1100:pb-5 mq1100:box-border`}
    >
      {/* Back button - only show on screens <1400px */}
      {isSmallScreen && (
        <div className="absolute top-9 right-8">
          <img
            className="h-10 w-10 relative rounded-81xl overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt="Back"
            src={Back}
            onClick={onClose}
          />
        </div>
      )}

      <div className="flex flex-col items-center gap-8 pt-[123px] w-full">
        {/* Navigation Items */}
        <NavItem
          icon={Home}
          alt="Home"
          path={paths.home}
          isActive={isActive(paths.home)}
          onClick={() => handleNavigation(paths.home)}
        />

        <NavItem
          icon={Statistic}
          alt="Analytics"
          path={paths.analytics}
          isActive={isActive(paths.analytics)}
          onClick={() => handleNavigation(paths.analytics)}
        />

        <NavItem
          icon={Portfolio}
          alt="Portfolio"
          path={paths.portfolio}
          isActive={isActive(paths.portfolio)}
          onClick={() => handleNavigation(paths.portfolio)}
        />

        <NavItem
          icon={Settings}
          alt="Settings"
          path={paths.settings}
          isActive={isActive(paths.settings)}
          onClick={() => handleNavigation(paths.settings)}
        />
      </div>

      {/* Logout */}
      <Box
        className="rounded-smi overflow-hidden flex flex-row items-center justify-center p-4 cursor-pointer"
        onClick={handleLogout}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt="Logout"
          src={Logout}
        />
      </Box>
    </Box>
  );
};

export default LeftSidebar;
