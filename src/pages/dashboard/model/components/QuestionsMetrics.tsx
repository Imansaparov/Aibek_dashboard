import React from 'react';
import { Box } from '@mui/material';
import Messages from '@/assets/images/message.png';

const QuestionsMetrics = () => {
  return (
    <Box
      className={`w-60 rounded-xl h-[289px] bg-darkslategray overflow-hidden shrink-0 flex flex-row items-start justify-start py-[36px] px-[27px] box-border mq750:flex-1 `}
    >
      <Box className="self-stretch flex-1 flex flex-col items-center justify-center gap-3">
        <Box className="w-[71px] flex-1 flex flex-col items-center justify-center gap-3">
          <img
            className="w-[45px] relative max-h-full overflow-hidden"
            loading="lazy"
            alt=""
            src={Messages}
          />
          <Box className="self-stretch relative leading-[150%] font-semibold mq450:text-2xl mq450:leading-[31px] mq750:text-9xl mq750:leading-[42px]">
            2491
          </Box>
        </Box>
        <Box className="self-stretch relative text-lg leading-[110%] text-white text-center">{`Количество вопросов отвеченных AIbek перед трансфером на оператора `}</Box>
      </Box>
    </Box>
  );
};

export default QuestionsMetrics;
