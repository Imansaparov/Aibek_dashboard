import { FunctionComponent } from 'react';
import {
  Typography,
  Box,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Back from '@/assets/images/Search bar.svg';
import Search from '@/assets/images/Union.svg';
import Notification from '@/assets/images/notification.png';
import Avatar from '@/assets/images/avatar.png';
import Burger from '@/assets/images/burger.svg';
import StatisticsDropdown from '@/widgets/dashboardHeader/ui/StatisticsDropdown';

export type DashboardHeaderProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  className?: string;
};

const DashboardHeader: FunctionComponent<DashboardHeaderProps> = ({
  onToggleSidebar,
  isSidebarOpen,
  className,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery('(min-width:1250px)');
  const isMediumScreen = useMediaQuery('(min-width:750px)');
  const isSmallScreen = useMediaQuery('(min-width:450px)');

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-left text-lg text-white font-inter ${className}`}
    >
      <Box
        className="self-stretch flex flex-row items-center justify-between w-full max-w-full"
        sx={{
          padding: '0 16px',
          minHeight: '60px',
        }}
      >
        <Box
          className="flex flex-row items-center"
          sx={{
            gap: { xs: '16px', sm: '24px', md: '32px' },
          }}
        >
          {isSidebarOpen ? (
            <img
              className="h-10 w-10 relative rounded-81xl overflow-hidden shrink-0 cursor-pointer"
              loading="lazy"
              alt="Back"
              src={Back}
              onClick={onToggleSidebar}
            />
          ) : (
            <img
              className="h-10 w-10 relative rounded-81xl overflow-hidden shrink-0 cursor-pointer"
              loading="lazy"
              alt="Menu"
              src={Burger}
              onClick={onToggleSidebar}
            />
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: '700',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Главная
          </Typography>
        </Box>

        <Box
          className="flex flex-row items-center"
          sx={{
            gap: { xs: '16px', sm: '24px', md: '50px' },
          }}
        >
          <TextField
            className="font-inter text-base text-lavender-200"
            placeholder="Поиск"
            variant="outlined"
            InputProps={{
              endAdornment: <img width="20px" height="17px" src={Search} />,
            }}
            sx={{
              width: { xs: '150px', sm: '180px', md: '220px' },
              '& fieldset': { border: 'none' },
              '& .MuiInputBase-root': {
                height: '49px',
                backgroundColor: '#2f293e',
                paddingRight: '20px',
                borderRadius: '15px',
              },
              '& .MuiInputBase-input': {
                color: '#e2d8fd',
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 10px', sm: '10px 14px' },
              },
              display: { xs: isSmallScreen ? 'block' : 'none', sm: 'block' },
            }}
          />
          <Box
            className="flex flex-row items-center"
            sx={{
              gap: { xs: '8px', sm: '12px', md: '16px' },
            }}
          >
            <img
              className="cursor-pointer"
              loading="lazy"
              alt="Notification"
              src={Notification}
              style={{
                height: isSmallScreen ? '47px' : '40px',
                width: isSmallScreen ? '47px' : '40px',
                borderRadius: '50%',
              }}
            />
            <img
              className="cursor-pointer object-cover"
              loading="lazy"
              alt="Avatar"
              src={Avatar}
              style={{
                height: isSmallScreen ? '47px' : '40px',
                width: isSmallScreen ? '47px' : '40px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            />
          </Box>
        </Box>
      </Box>
      <StatisticsDropdown />
    </header>
  );
};

export default DashboardHeader;
