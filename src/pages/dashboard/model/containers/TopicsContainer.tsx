import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Topics from '@/pages/dashboard/model/components/Topics';
import Message from '@/assets/images/message-outline.svg';

const TopicsContainer = () => {
  const isSmallLaptop = useMediaQuery('(max-width:1024px)');

  return (
    <Box className="flex-1 flex flex-row items-start justify-start gap-[25px] min-w-[331px] shrink-0 max-w-full mq450:flex-wrap">
      <Topics
        iconMessageOutline={Message}
        aIbek="Топ 3 тематики, завершенные AIbek:"
        prop="Мобильный интернет (50%)"
        sIM30="SIM-карта и номер (30%)"
        prop1="Клиентские жалобы (20%)"
        className={isSmallLaptop ? 'py-[25px] px-[16px]' : ''}
      />
      <Topics
        topics2Padding={isSmallLaptop ? '25px 16px' : '31px 16px'}
        completedTopicsHeadersPadding="0px 10px 0px 6px"
        iconMessageOutline={Message}
        aIbek="Топ 3 тематики трансфера от AIbek:"
        prop="Тарифные планы (50%)"
        sIM30="Финансовые вопросы (30%)"
        completedTopicThreeAlignSelf="unset"
        completedTopicThreePadding="0px 1px"
        prop1="Мошенничество (20%)"
      />
    </Box>
  );
};

export default TopicsContainer;
