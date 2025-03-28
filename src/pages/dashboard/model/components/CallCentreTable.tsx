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

interface IcallCentre {
  time: string;
  dialog: number | string;
  count: number | string;
  response: number | string;
  data?: any[]; // Add this property to your interface
}

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

export const CallCentreTable = (data: any) => {
  const theme = useTheme();
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isTablet = useMediaQuery('(max-width:768px)');
  const isMobile = useMediaQuery('(max-width:480px)');

  interface IcallCentreWithData extends IcallCentre {
    data: Array<{
      // Define the structure of your data items here
      [key: string]: any;
    }>;
  }

  const dataArray: (IcallCentre | IcallCentreWithData)[] = Array.isArray(
    data[0]
  )
    ? data
    : [data];

  // Calculate column widths based on screen size
  const getColumnWidth = () => {
    if (isMobile) return '100px';
    if (isTablet) return '150px';
    if (isLessThan1280) return '200px';
    return '250px';
  };

  // Calculate container width based on screen size
  const getContainerWidth = () => {
    if (isMobile || isTablet || isLessThan1280) return '100%';
    return '1280px';
  };

  // Calculate table width based on screen size (4 columns * column width)
  const getTableWidth = () => {
    const colWidth = getColumnWidth();
    // Check if the string includes "%" instead of strict equality
    if (colWidth.includes('%')) return '100%';

    // Extract the numeric value from the string with "px"
    const numericWidth = parseInt(colWidth);
    return `${numericWidth * 4}px`;
  };

  const columnWidth = getColumnWidth();

  console.log(dataArray);

  return (
    <Box
      sx={{
        backgroundColor: '#3C354A',
        borderRadius: '8px',
        width: getContainerWidth(),
        overflow: 'auto',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Table sx={{ width: getTableWidth(), tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: columnWidth }} />
            <col style={{ width: columnWidth }} />
            <col style={{ width: columnWidth }} />
            <col style={{ width: columnWidth }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <FirstHeaderCell
                className={`text-xs ${isMobile ? 'pl-3' : 'pl-[24px]'}`}
              >
                {/* Time column header */}
              </FirstHeaderCell>
              <CallHeaderCell
                className={`text-xs ${isMobile ? 'px-2' : isTablet ? 'px-3' : 'px-[18px]'} pr-[24px]`}
              >
                {isMobile ? 'Время диалога' : 'Среднее время диалога'}
              </CallHeaderCell>
              <CallHeaderCell
                className={`text-xs ${isMobile ? 'px-2' : isTablet ? 'px-3' : 'px-[18px]'} pr-[24px]`}
              >
                {isMobile ? 'Кол-во вопросов' : 'Среднее количество вопросов'}
              </CallHeaderCell>
              <CallHeaderCell
                className={`text-xs ${isMobile ? 'px-2' : isTablet ? 'px-3' : 'px-[18px]'} pr-[24px]`}
              >
                {isMobile ? 'Время ответа' : 'Среднее время ответа'}
              </CallHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray[0]?.data.map((item, index) => (
              <TableRow key={index}>
                <CallTimeCell
                  className={`text-xs ${isMobile ? 'py-3 px-3' : ''}`}
                >
                  {item.time}
                </CallTimeCell>
                <CallTableCell className="text-xs">
                  {item.dialog} {isMobile ? 'мин' : 'минут'}
                </CallTableCell>
                <CallTableCell className="text-xs">
                  {item.count} {isMobile ? 'мин' : 'минут'}
                </CallTableCell>
                <CallTableCell className="text-xs">
                  {item.response} {isMobile ? 'сек' : 'секунд'}
                </CallTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
