import { FunctionComponent } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Topics from '../components/Topics';
import Message from '@/assets/images/message-outline.svg';
import Card from '@/assets/images/AI grade.png';
import { TopicsLinearProgress } from '@/pages/dashboard/model/components/TopicsLinearProgress';
import { ChannelsChart } from '@/pages/dashboard/model/components/ChanelsChart';
import RatingStars from '@/pages/dashboard/model/components/StarRating';
import RatingCard from '@/pages/dashboard/model/components/RatingCard';
import UserMetrics from '@/pages/dashboard/model/components/UserMetrics';
import QuestionsMetrics from '@/pages/dashboard/model/components/QuestionsMetrics';
import TopicsContainer from '@/pages/dashboard/model/containers/TopicsContainer';

const ChartsContainer = () => {
  const theme = useTheme();
  const isSmallLaptop = useMediaQuery('(max-width:1024px)');
  const isBelow1275 = useMediaQuery('(max-width:1275px)');

  // Original component above 1275px
  if (!isBelow1275) {
    return (
      <Box
        className={`self-stretch flex flex-row items-start justify-between gap-6 max-w-full text-left text-16xl text-white font-fira-sans mq750:gap-4 mq1100:pl-2 mq1100:pr-2 mq1100:box-border `}
      >
        <Box className="w-[302px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border mq450:pt-[15px] mq450:box-border mq750:pt-6 mq750:box-border">
          <Box className="self-stretch flex flex-col items-end justify-start gap-[65px] mq450:gap-[35px]">
            <UserMetrics />
            <ChannelsChart />
          </Box>
        </Box>
        <Box
          className={`flex-1 flex flex-col items-start justify-start gap-[90px] max-w-[calc(100%_-_350px)] text-gold mq450:gap-6 mq1100:gap-10 mq1100:max-w-full ${isSmallLaptop ? 'gap-[60px]' : ''}`}
        >
          <Box className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq750:flex-wrap mq1100:gap-[25px]">
            <QuestionsMetrics />
            <RatingCard />
          </Box>
          <Box className="self-stretch flex flex-row items-start justify-start gap-[45px] max-w-full text-base text-white mq450:gap-[22px] mq750:flex-wrap">
            <TopicsLinearProgress />
            <TopicsContainer />
          </Box>
        </Box>
      </Box>
    );
  }

  // Modified component below 1275px - centered with preserved text styles
  return (
    <Box
      className={`self-stretch text-left text-16xl text-white font-fira-sans`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '20px',
        gap: '30px',
      }}
    >
      {/* UserMetrics and ChannelsChart - centered in row */}
      <Box
        className="text-left text-white"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        }}
      >
        <Box sx={{ width: '202px' }}>
          <UserMetrics />
        </Box>
        <Box sx={{ width: '402px' }}>
          <ChannelsChart />
        </Box>
      </Box>

      {/* QuestionsMetrics and RatingCard - centered in row */}
      <Box
        className="text-gold"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        }}
      >
        <Box sx={{ width: '240px' }}>
          <QuestionsMetrics />
        </Box>
        <Box sx={{ width: '630px' }}>
          <RatingCard />
        </Box>
      </Box>

      {/* TopicsLinearProgress and TopicsContainer - centered in row */}
      <Box
        className="text-base text-white"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        }}
      >
        <Box sx={{ width: '365px' }}>
          <TopicsLinearProgress />
        </Box>
        <Box sx={{ width: '536px' }}>
          <TopicsContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default ChartsContainer;
