import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import { TimeProps } from '../model/timeTypes';

const Time: FunctionComponent<TimeProps> = ({ time, count }) => {
  return (
    <Box className="w-[362px] h-[54px] bg-darkslategray flex flex-row items-center justify-between px-8 border-b border-gray-500">
      <Typography variant="body1" fontWeight="500">
        {time}
      </Typography>
      <Typography variant="body1" color="white">
        {count}
      </Typography>
    </Box>
  );
};

export default Time;
