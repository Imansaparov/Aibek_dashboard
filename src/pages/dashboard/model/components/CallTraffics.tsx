import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Load from '@/assets/images/export.svg';
import { CallCentreTable } from '@/pages/dashboard/model/components/CallCentreTable';

// Types for the traffic data
interface TrafficData {
  time: string;
  count: number;
  dialog?: number;
  response?: number;
}

interface TrafficDashboardProps {
  title: string;
  morningData: TrafficData[];
  afternoonData: TrafficData[];
  eveningData: TrafficData[];
}

// Styled components for traffic data tables
const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#2B2640',
  borderRadius: '8px',
  margin: '10px 0',
  boxShadow: 'none',
});

const StyledTableCell = styled(TableCell)({
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '12px 24px',
  color: 'white',
});

const StyledHeaderCell = styled(TableCell)({
  backgroundColor: '#3C354A',
  color: 'white',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
});

const TimeCell = styled(TableCell)({
  color: '#F99C30',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '18px 32px',
  textAlign: 'left',
});

// Call Centre Table Component
interface IcallCentre {
  time: string;
  dialog: number | string;
  count: number | string;
  response: number | string;
}

// Base cell styling with responsive considerations
const BaseCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '12px 24px',
  [theme.breakpoints.down('md')]: {
    padding: '8px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 12px',
  },
}));

// Header cell styling
const CallHeaderCell = styled(BaseCell)({
  backgroundColor: '#3C354A',
  color: 'white',
});

// First header cell (empty cell above time)
const FirstHeaderCell = styled(BaseCell)({
  backgroundColor: '#3C354A',
  color: '#F99C30',
});

// Time cell styling
const CallTimeCell = styled(BaseCell)({
  color: '#F99C30',
  padding: '18px 32px',
  textAlign: 'left',
});

// Data cell styling
const CallTableCell = styled(BaseCell)({
  color: 'white',
});

// Main TrafficDashboard Component
const TrafficDashboard: React.FC<TrafficDashboardProps> = ({
  title,
  morningData,
  afternoonData,
  eveningData,
}) => {
  const theme = useTheme();
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isTablet = useMediaQuery('(max-width:768px)');
  const isMobile = useMediaQuery('(max-width:480px)');

  // Calculate column width based on screen size
  const getColumnWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return 'calc(100% - 32px)';
    if (isLessThan1280) return '300px';
    return '362px';
  };

  // Calculate gap size based on screen size
  const getGapSize = () => {
    if (isMobile) return '16px';
    if (isTablet) return '24px';
    if (isLessThan1280) return '40px';
    return '97px';
  };

  // Function to render a single data column
  const renderDataColumn = (data: TrafficData[], title?: string) => (
    <Box
      className="bg-[#3C354A] rounded-lg"
      sx={{
        width: getColumnWidth(),
        marginTop: isTablet ? '30px' : '0px',
        minWidth: isMobile ? '280px' : isTablet ? '300px' : '362px',
      }}
    >
      {title && (
        <Typography
          variant="subtitle1"
          className="pt-3 px-4 text-white font-medium"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {title}
        </Typography>
      )}
      <TableContainer component={Paper} className="bg-transparent shadow-none">
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeaderCell
                className={`text-xs text-amber-400 ${isMobile ? 'px-3' : 'px-[18px] pl-[24px]'}`}
              >
                Время (BISH GMT+6)
              </StyledHeaderCell>
              <StyledHeaderCell
                className={`text-xs ${isMobile ? 'px-3' : 'px-[18px] pr-[24px]'}`}
              >
                Количество обращений
              </StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TimeCell className={`text-xs ${isMobile ? 'py-3 px-3' : ''}`}>
                  {item.time}
                </TimeCell>
                <StyledTableCell className="text-xs">
                  {item.count}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <Box className="text-white">
      <Typography
        variant="h6"
        className="mb-4 font-medium"
        sx={{
          marginTop: isTablet ? '30px' : '0px',
          fontSize: { xs: '16px', sm: '18px', md: '20px' },
          marginBottom: { xs: '16px', md: '24px' },
        }}
      >
        {title}
      </Typography>

      {/* For mobile: Display tables in tabs or accordion */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          overflow: 'auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            pb: 2,
          }}
        >
          {renderDataColumn(morningData, 'Утро (00:00 - 07:00)')}
          {renderDataColumn(afternoonData, 'День (08:00 - 15:00)')}
          {renderDataColumn(eveningData, 'Вечер (16:00 - 23:00)')}
        </Box>
      </Box>

      {/* For tablet and desktop: Display horizontally */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          flexWrap: isLessThan1280 ? 'wrap' : 'nowrap',
          gap: getGapSize(),
          maxWidth: '1280px',
          width: '100%',
          mx: 'auto',
          justifyContent: isTablet ? 'flex-start' : 'center',
          overflow: 'auto',
        }}
      >
        {renderDataColumn(morningData)}
        {renderDataColumn(afternoonData)}
        {renderDataColumn(eveningData)}
      </Box>

      <Typography
        variant="h6"
        className="mb-[18px] mt-[30px] font-medium"
        sx={{
          fontSize: { xs: '16px', sm: '18px', md: '20px' },
          marginTop: { xs: '24px', md: '30px' },
          marginBottom: { xs: '16px', md: '18px' },
        }}
      >
        Анализ данных AIbek и колл-центра
      </Typography>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '1280px',
          width: '100%',
          mx: 'auto',
          overflowX: 'auto',
        }}
      >
        <CallCentreTable data={callData} />
      </Box>

      <Box
        className="mt-[50px] flex"
        sx={{
          marginTop: { xs: '32px', md: '50px' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Button
          className={`self-stretch py-2.5 ${isMobile ? 'px-5 w-full' : 'px-10 w-[302px]'}`}
          startIcon={<img width="24px" height="24px" src={Load} alt="Export" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: 'none',
            color: '#343434',
            fontSize: '14px',
            background: '#ffd406',
            borderRadius: '10px',
            '&:hover': { background: '#ffd406' },
            maxWidth: { xs: '100%', sm: '302px' },
          }}
        >
          Выгрузить статистику
        </Button>
      </Box>
    </Box>
  );
};

// Sample data
const morningData = [
  { time: '00:00', count: 120 },
  { time: '01:00', count: 80 },
  { time: '02:00', count: 60 },
  { time: '03:00', count: 40 },
  { time: '04:00', count: 30 },
  { time: '05:00', count: 24 },
  { time: '06:00', count: 30 },
  { time: '07:00', count: 46 },
];

const afternoonData = [
  { time: '08:00', count: 120 },
  { time: '09:00', count: 167 },
  { time: '10:00', count: 309 },
  { time: '11:00', count: 420 },
  { time: '12:00', count: 801 },
  { time: '13:00', count: 1080 },
  { time: '14:00', count: 2345 },
  { time: '15:00', count: 3456 },
];

const eveningData = [
  { time: '16:00', count: 4879 },
  { time: '17:00', count: 3460 },
  { time: '18:00', count: 3010 },
  { time: '19:00', count: 3000 },
  { time: '20:00', count: 4900 },
  { time: '21:00', count: 5020 },
  { time: '22:00', count: 3521 },
  { time: '23:00', count: 2578 },
];

const callData = [
  { time: 'Aibek', dialog: 3, count: 4, response: 30 },
  { time: 'Сотрудник', dialog: 1, count: 2, response: 50 },
];

// Example usage
export const CallTraffic = () => {
  return (
    <TrafficDashboard
      title="Количество обращений AIbek по 24 часовой разбивке:"
      morningData={morningData}
      afternoonData={afternoonData}
      eveningData={eveningData}
    />
  );
};
