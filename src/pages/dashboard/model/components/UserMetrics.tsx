import React from 'react';
import { Box, Typography } from '@mui/material';

const UserMetrics = () => {
  return (
    <Box className="flex flex-row items-start justify-end py-0 px-3">
      <Box className="flex flex-col w-[174px] h-[179px] items-start justify-start pt-[50px] px-[20px] pb-[40px] relative">
        <svg
          className="w-full h-full absolute !m-[0] top-[10px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="183"
          viewBox="0 0 176 183"
          fill="none"
        >
          <circle
            opacity="0.9"
            cx="84.3643"
            cy="91.6371"
            r="84.3643"
            fill="#F99C30"
          />
          <path
            d="M84.3632 2C133.868 2 174 42.1319 174 91.6371C174 141.142 133.868 181.274 84.3632 181.274C50.536 181.274 21.0853 162.536 5.82422 134.874"
            stroke="#F99C30"
            stroke-width="2.10911"
          />
        </svg>
        <Box className="h-[49px] flex flex-row items-start justify-start py-0 px-[17px] box-border">
          <Box className="relative leading-[150%] font-semibold z-[1] mq450:text-2xl mq450:leading-[31px] mq750:text-9xl mq750:leading-[42px]">
            15850
          </Box>
        </Box>
        <Box className="relative text-lg leading-[110%] text-center z-[1]">
          <Typography
            className="m-0"
            variant="inherit"
          >{`Активных `}</Typography>
          <Typography className="m-0" variant="inherit">
            пользователей
          </Typography>
        </Box>
        <Box className="!m-[0] w-[142px] h-[146px] absolute top-[-20px] left-[-116px] flex flex-col items-start justify-start pt-[35px] px-3.5 pb-[36.3px] z-[2] text-9xl">
          <svg
            className="w-full h-full absolute !m-[0] top-[10px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="143"
            height="148"
            viewBox="0 0 143 148"
            fill="none"
          >
            <circle
              opacity="0.8"
              cx="68.849"
              cy="73.8303"
              r="68.849"
              fill="#6463D6"
            />
            <path
              d="M68.8481 1C109.249 1 142 33.7513 142 74.152C142 114.553 109.249 147.304 68.8481 147.304C41.242 147.304 17.2076 132.012 4.75317 109.437"
              stroke="#6463D6"
              stroke-width="1.29698"
            />
          </svg>
          <Box className="h-[39px] flex flex-row items-start justify-start py-0 pl-[25px] pr-[26px] box-border">
            <Box className="relative leading-[150%] font-semibold z-[1] mq450:text-3xl mq450:leading-[34px]">
              8300
            </Box>
          </Box>
          <Box className="relative text-base leading-[110%] text-center z-[1]">
            <Typography
              className="m-0"
              variant="inherit"
            >{`Уникальных `}</Typography>
            <Typography className="m-0" variant="inherit">
              пользователей
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserMetrics;
