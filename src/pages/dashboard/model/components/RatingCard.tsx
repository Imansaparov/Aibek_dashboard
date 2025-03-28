import React from 'react';
import { Box, Typography } from '@mui/material';
import RatingStars from '@/pages/dashboard/model/components/StarRating';
import Card from '@/assets/images/AI grade.png';

const RatingCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Card})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`h-[289px] max-w-[630px] flex-1 relative rounded-xl  text-3xs text-white font-inter mq750:min-w-full 'h-[240px] min-w-[320px]' }`}
    >
      <Box className="absolute top-[30px] left-[32px] flex flex-col items-start justify-start ">
        <Typography
          className="relative"
          variant="inherit"
          component="b"
          sx={{ letterSpacing: '0.1em', fontWeight: '700' }}
        >
          AIBEK 1.0
        </Typography>
        <Box className="flex-1 flex flex-col items-start justify-start gap-[12px] mt-[10px] text-11xl">
          <Typography
            className="m-0 relative mq450:text-lg mq750:text-5xl"
            variant="inherit"
            component="h1"
            sx={{ fontWeight: '700' }}
          >
            Средняя оценка AIbek
          </Typography>
          <Box className="relative text-sm mt-[15px] font-medium text-gray-500">
            <Typography className="m-0" variant="inherit">
              Оценка удовлетворенности пользователя
            </Typography>
            <Typography className="m-0" variant="inherit">
              после диалога с ботом.
            </Typography>
          </Box>
        </Box>
      </Box>
      <RatingStars />
      <Box className="absolute top-[154px] left-[32px] leading-[150%] text-16xl font-fira-sans mq450:text-lg mq450:leading-[42px]">
        <Typography
          variant="inherit"
          component="span"
          sx={{ fontWeight: '600' }}
        >{`4.66 `}</Typography>
        <Typography
          className="text-dimgray"
          variant="inherit"
          component="span"
          sx={{ fontSize: '22px' }}
        >
          (3000 голосов)
        </Typography>
      </Box>
    </Box>
  );
};

export default RatingCard;
