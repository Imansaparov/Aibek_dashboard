import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Message from '@/assets/images/message-outline.svg'; // Ensure this is the correct path to your Message icon

// Create the custom styled LinearProgress component
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 20,
  [`&.MuiLinearProgress-colorPrimary`]: {
    backgroundColor: 'rgba(47, 234, 155, 0.2)',
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 20,
    background: 'linear-gradient(90deg, #2fea9b, #7fdd53)',
  },
}));

export const TopicsLinearProgress = () => {
  return (
    <Box className="self-stretch flex flex-row items-start justify-start gap-[45px] max-w-full text-base text-white mq450:gap-[22px] mq750:flex-wrap">
      <Box className="flex flex-col items-start justify-start gap-[22px] min-w-[365.1px] shrink-0 max-w-full z-[2] mq450:min-w-full mq750:flex-1">
        <Box className="flex flex-row items-center justify-start gap-2">
          <img
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            alt=""
            src={Message}
          />
          <Box className="relative leading-[150%] font-medium">
            Топ 3 тематики по обращениям AIbek:
          </Box>
        </Box>
        <Box className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] text-sm">
          <Box className="self-stretch flex flex-row items-end justify-between gap-0">
            <Box className="w-[321.7px] flex flex-col items-start justify-start gap-2">
              <Box className="self-stretch relative leading-[18px] font-semibold">
                Тарифные планы и подключение/отключение
              </Box>
              <Box className="w-[321.7px] flex flex-row items-start justify-start">
                <BorderLinearProgress
                  variant="determinate"
                  value={51}
                  sx={{ width: '321.6px' }}
                />
              </Box>
            </Box>
            <Box className="relative leading-[18px] font-semibold">51%</Box>
          </Box>
          <Box className="self-stretch flex flex-row items-end justify-between gap-0">
            <Box className="w-[321.7px] flex flex-col items-start justify-start gap-2">
              <Box className="self-stretch relative leading-[18px] font-semibold">
                Мобильный интернет
              </Box>
              <Box className="w-[321.7px] flex flex-row items-start justify-start">
                <BorderLinearProgress
                  variant="determinate"
                  value={36}
                  sx={{ width: '321.6px' }}
                />
              </Box>
            </Box>
            <Box className="relative leading-[18px] font-semibold">36%</Box>
          </Box>
          <Box className="self-stretch flex flex-row items-end justify-between gap-0">
            <Box className="w-[321.7px] flex flex-col items-start justify-start gap-2">
              <Box className="self-stretch relative leading-[18px] font-semibold">
                Роуминг и международная связь
              </Box>
              <Box className="w-[321.7px] flex flex-row items-start justify-start">
                <BorderLinearProgress
                  variant="determinate"
                  value={13}
                  sx={{ width: '321.6px' }}
                />
              </Box>
            </Box>
            <Box className="relative leading-[18px] font-semibold">13%</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
