import { FunctionComponent } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Dropdown from '@/widgets/dashboardHeader/ui/Dropdown';
import DateRangePicker from '@/widgets/dashboardHeader/ui/CalendarDropdown';

export const StatisticsDropdown: FunctionComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:1280px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  const isMobile = useMediaQuery('(min-width:480px)');

  const handleDateRangeChange = (startDate, endDate) => {
    console.log('Selected date range:', startDate, 'to', endDate);
    // You can use these values to filter data or for other purposes
  };

  return (
    <Box
      className="self-stretch font-fira-sans"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 2, sm: 3, md: 5 },
        padding: { xs: '0 16px', md: 0 },
        marginTop: { xs: 1, md: 0 },
      }}
    >
      <Box
        className="relative leading-[150%] font-medium"
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          marginBottom: { xs: '8px', sm: 0 },
        }}
      >
        Статистика
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: { xs: 'flex-start', md: 'flex-start' },
          gap: { xs: 2, sm: 2.5, md: 3.5 },
          width: { xs: '100%', md: 'auto' },
        }}
        className="text-base text-dimgray"
      >
        <DateRangePicker title="Период: " onChange={handleDateRangeChange} />
        <Dropdown
          title="Тематика обращения:"
          options={['все', 'продажи', 'техподдержка', 'возвраты', 'другое']}
          defaultValue="все"
          onChange={value => console.log('Topic changed to:', value)}
          className="dropdown-responsive"
        />
        <Dropdown
          title="Канал:"
          options={['все', 'чат', 'телефон', 'email', 'соцсети']}
          defaultValue="все"
          onChange={value => console.log('Channel changed to:', value)}
          className="dropdown-responsive"
        />
      </Box>
    </Box>
  );
};

export default StatisticsDropdown;
