import { FunctionComponent } from 'react';
import { Box } from '@mui/material';

const RatingComponent: FunctionComponent = () => {
  return (
    <Box className="flex flex-row items-center justify-start gap-2">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="h-10 w-10"
          alt=""
          src={`/star-${index + 12}.svg`}
        />
      ))}
    </Box>
  );
};

export default RatingComponent;
