import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import Time from './Time';

const Root: FunctionComponent = () => {
  const timeData = [
    { time: '12:00', count: '120' },
    { time: '01:00', count: '80' },
    { time: '02:00', count: '60' },
    { time: '03:00', count: '40' },
    { time: '04:00', count: '30' },
    { time: '05:00', count: '24' },
  ];

  return (
    <Box className="flex flex-row items-start justify-between gap-5 w-full">
      {timeData.map((data, index) => (
        <Time key={index} time={data.time} count={data.count} />
      ))}
    </Box>
  );
};

export default Root;
