import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import { Box } from '@mui/material';

export type TopicsType = {
  className?: string;
  iconMessageOutline?: string;
  aIbek?: string;
  prop?: string;
  sIM30?: string;
  prop1?: string;

  /** Style props */
  topics2Padding?: CSSProperties['padding'];
  completedTopicsHeadersPadding?: CSSProperties['padding'];
  completedTopicThreeAlignSelf?: CSSProperties['alignSelf'];
  completedTopicThreePadding?: CSSProperties['padding'];
};

const Topics: FunctionComponent<TopicsType> = ({
  topics2Padding,
  completedTopicsHeadersPadding,
  iconMessageOutline,
  aIbek,
  prop,
  sIM30,
  completedTopicThreeAlignSelf,
  completedTopicThreePadding,
  prop1,
}) => {
  const topics2Style: CSSProperties = useMemo(() => {
    return {
      padding: topics2Padding,
    };
  }, [topics2Padding]);

  const completedTopicsHeadersStyle: CSSProperties = useMemo(() => {
    return {
      padding: completedTopicsHeadersPadding,
    };
  }, [completedTopicsHeadersPadding]);

  const completedTopicThreeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: completedTopicThreeAlignSelf,
      padding: completedTopicThreePadding,
    };
  }, [completedTopicThreeAlignSelf, completedTopicThreePadding]);

  return (
    <Box
      className={`flex-1 rounded-xl bg-darkslategray overflow-hidden flex flex-col items-start justify-start py-[31px] px-[18px] box-border gap-[23px] min-w-[240px] h-[198px] text-left text-base text-white font-fira-sans`}
      style={topics2Style}
    >
      <Box
        className="self-stretch flex flex-row items-start justify-start py-0 px-1.5"
        style={completedTopicsHeadersStyle}
      >
        <Box className="flex flex-row items-center justify-start gap-3">
          <img
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            alt=""
            src={iconMessageOutline}
          />
          <Box className="w-[156px] relative leading-[120%] font-medium inline-block shrink-0">
            {aIbek}
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm">
        <Box className="relative font-semibold">
          <ul className="m-0 font-inherit text-inherit pl-[19px]">
            <li>{prop}</li>
          </ul>
        </Box>
        <Box className="relative font-semibold">
          <ul className="m-0 font-inherit text-inherit pl-[19px]">
            <li>{sIM30}</li>
          </ul>
        </Box>
        <Box
          className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2"
          style={completedTopicThreeStyle}
        >
          <Box className="relative font-semibold">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li>{prop1}</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topics;
