import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useDashboardData } from '@/shared/hooks/useDashboardData';

export type GroupComponentType = {
  className?: string;
  icon?: string;
  metricLabel?: string;
  aIbek?: string;
  up?: string;
  metricPlaceholder?: string;
  prop?: string;
  metricLabelWidth?: CSSProperties['width'];
  aIbekWidth?: CSSProperties['width'];
};

const MetricsCard: FunctionComponent<GroupComponentType> = ({
  icon,
  metricLabel,
  metricLabelWidth,
  aIbek,
  aIbekWidth,
  up,
  metricPlaceholder,
  prop,
}) => {
  const { data, isLoading, error } = useDashboardData('statistics');
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isTablet = useMediaQuery('(max-width:768px)');

  const metricLabelStyle: CSSProperties = useMemo(() => {
    return {
      width: metricLabelWidth,
    };
  }, [metricLabelWidth]);

  const aIbekStyle: CSSProperties = useMemo(() => {
    return {
      width: isLessThan1280 ? 'auto' : aIbekWidth,
    };
  }, [aIbekWidth, isLessThan1280]);

  const cardWidth = useMemo(() => {
    if (isTablet) return '100%';
    if (isLessThan1280) return '340px';
    return '410px';
  }, [isLessThan1280, isTablet]);

  return (
    <Box
      className={`h-[213px] flex flex-col items-end justify-start text-left text-16xl text-white font-fira-sans`}
      sx={{ width: cardWidth }}
    >
      <Box
        className="flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border"
        sx={{ width: cardWidth }}
      >
        <img
          className="h-[66.1px] w-[66.3px] relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={icon}
        />
      </Box>
      <Box
        className="h-[180px] rounded-xl bg-darkslategray border-gray-400 border-solid border-[1px] box-border flex flex-col items-start justify-start pt-9 px-8 pb-[26px] shrink-0 mt-[-33.1px] relative"
        sx={{ width: cardWidth }}
      >
        <Box
          className="relative leading-[150%] font-semibold inline-block mq450:text-2xl mq450:leading-[31px] mq750:text-9xl mq750:leading-[42px]"
          style={metricLabelStyle}
        >
          {metricLabel}
        </Box>
        <Box className="flex flex-col items-start justify-start gap-2.5 text-lg">
          <Box
            className="relative leading-[150%] inline-block"
            style={aIbekStyle}
          >
            {aIbek}
          </Box>
          <Box
            className="flex flex-row items-start justify-start gap-3 text-base text-dimgray"
            sx={{ width: '198px' }}
          >
            <Box className="flex flex-row items-center justify-start gap-2">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={up}
              />
              <Box className="relative leading-[150%]">{metricPlaceholder}</Box>
            </Box>
            <Box className="flex-1 relative leading-[150%]">{prop}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MetricsCard;
