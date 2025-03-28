import React from 'react';
import MetricsCard from '@/entities/metrics/ui/MetricsCard';
import Community from '@/assets/images/community.png';
import ArrowUp from '@/assets/images/up.svg';
import Processor from '@/assets/images/processor.png';
import Bags from '@/assets/images/bags.png';
import { Box, useMediaQuery } from '@mui/material';

const MeticsCardContainers = () => {
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isTablet = useMediaQuery('(max-width:768px)');

  return (
    <Box
      className={`flex items-center w-full z-[1] ${
        isTablet
          ? 'flex-col gap-4'
          : isLessThan1280
            ? 'flex-row justify-center gap-4'
            : 'flex-row justify-between'
      }`}
    >
      <MetricsCard
        icon={Community}
        metricLabel="5232"
        aIbek="Общее количество обращений AIbek"
        up={ArrowUp}
        metricPlaceholder="10.2"
        prop="+1.01% за 7 дней"
      />
      <MetricsCard
        icon={Processor}
        metricLabel="4259"
        metricLabelWidth="74px"
        aIbek="Успешно завершенные AIbek"
        aIbekWidth="247px"
        up={ArrowUp}
        metricPlaceholder="3.1"
        prop="+0.49% за 7 дней"
      />
      <MetricsCard
        icon={Bags}
        metricLabel="973"
        metricLabelWidth="53px"
        aIbek="AIbek перевел на оператора"
        aIbekWidth="241px"
        up={ArrowUp}
        metricPlaceholder="2.56"
        prop="-0.91% за 7 дней"
      />
    </Box>
  );
};

export default MeticsCardContainers;
