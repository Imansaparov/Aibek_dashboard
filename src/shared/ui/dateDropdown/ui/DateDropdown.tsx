import { FunctionComponent } from 'react';
import { Typography, Box } from '@mui/material';

export type DateDropdownProps = {
  iconArrowFullDown?: string;
};

const DateDropdown: FunctionComponent<DateDropdownProps> = ({
  iconArrowFullDown,
}) => {
  return (
    <Box
      className={`h-[32px] w-[173px] rounded-xl flex flex-row items-center justify-start`}
    >
      <Box className="relative tracking-[-0.3px] leading-[20px]">
        <Typography variant="inherit" component="span">
          Период:{' '}
        </Typography>
        <Typography className="text-white" variant="inherit" component="span">
          за неделю
        </Typography>
      </Box>
      <img className="w-6 relative h-6" alt="" src={iconArrowFullDown} />
    </Box>
  );
};

export default DateDropdown;
