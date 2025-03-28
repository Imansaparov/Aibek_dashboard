import React, { useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartData,
  ChartOptions,
  Plugin,
} from 'chart.js';
import More from '@/assets/images/more.svg';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

export const ChannelsChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);
  const isBelow1275 = useMediaQuery('(max-width:1275px)');

  useEffect(() => {
    if (!chartRef.current) return;

    // Clean up previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Define the custom plugin for adding percentage labels
    const percentageLabelsPlugin: Plugin<'doughnut'> = {
      id: 'percentageLabels',
      afterDraw(chart) {
        const { ctx, data } = chart;

        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex);

          if (!meta.hidden) {
            meta.data.forEach((element, index) => {
              // TypeScript needs help understanding this is an ArcElement
              const arcElement = element as unknown as {
                startAngle: number;
                endAngle: number;
                outerRadius: number;
                x: number;
                y: number;
              };

              const value = dataset.data[index] as number;
              const angle =
                arcElement.startAngle +
                (arcElement.endAngle - arcElement.startAngle) / 2;

              // Position for the label (outside the chart)
              const labelRadius = arcElement.outerRadius * 1;
              const x = arcElement.x + Math.cos(angle) * labelRadius;
              const y = arcElement.y + Math.sin(angle) * labelRadius;

              // Draw white circle with shadow
              ctx.save();
              ctx.beginPath();
              ctx.fillStyle = '#EFEFEF';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
              ctx.shadowBlur = 2;
              ctx.arc(x, y, 16, 0, 2 * Math.PI);
              ctx.fill();
              ctx.closePath();

              // Add percentage text
              ctx.fillStyle = '#000000';
              ctx.font = 'bold 12px Inter';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(`${value}%`, x, y);
              ctx.restore();
            });
          }
        });
      },
    };

    // Register the custom plugin
    ChartJS.register(percentageLabelsPlugin);

    // Chart data
    const data: ChartData<'doughnut'> = {
      labels: ['WhatsApp', 'Instagram', 'Мой Beeline'],
      datasets: [
        {
          data: [60, 20, 20],
          backgroundColor: [
            '#344BFD', // Blue for WhatsApp
            '#F4A79D', // Pink for Instagram
            '#F68D2B', // Orange for My Beeline
          ],
          borderWidth: 0,
          weight: 40, // Thicker donut
        },
      ],
    };

    // Chart options
    const options: ChartOptions<'doughnut'> = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw}%`;
            },
          },
        },
      },
    };

    // Create the chart
    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'doughnut',
      data,
      options,
    } as any);

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  if (!isBelow1275) {
    // Original layout for screens >= 1275px
    return (
      <Box className="self-stretch flex flex-col items-start justify-start gap-[40px] text-xl pt-[30px]">
        <Box className="h-[364px] w-full max-w-[301px] self-stretch rounded-xl bg-darkslategray border-gray-400 border-solid border-[1px] flex flex-col items-start justify-start py-[22px] px-[22px] pb-[18px] gap-[18px]">
          <Box className="self-stretch flex flex-col items-start justify-start gap-[18px]">
            <Box className="self-stretch flex flex-row items-start justify-between gap-5 shrink-0">
              <Typography
                className="m-0 relative"
                variant="inherit"
                component="h3"
                sx={{ fontWeight: '500', lineHeight: '150%', color: '#ffffff' }}
              >
                Каналы трафика
              </Typography>
              <Box className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={More}
                />
              </Box>
            </Box>

            {/* Chart container */}
            <Box className="self-stretch h-[170px] relative flex items-center justify-center">
              <canvas
                ref={chartRef}
                style={{ width: '100%', maxWidth: '220px' }}
              />
            </Box>
          </Box>

          {/* Legend */}
          <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5 text-xs">
            <Box className="flex-1 flex flex-col items-start justify-start gap-[14px]">
              <Box className="self-stretch flex flex-row items-center justify-between gap-5 z-[3]">
                <Box className="flex flex-row items-center justify-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.91016" r="5" fill="#344BFD" />
                  </svg>
                  <Box className="relative font-semibold text-white">
                    WhatsApp
                  </Box>
                </Box>
                <Box className="relative font-semibold text-white">60%</Box>
              </Box>
              <Box className="self-stretch flex flex-row items-center justify-between gap-5">
                <Box className="flex flex-row items-center justify-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.91016" r="5" fill="#F4A79D" />
                  </svg>
                  <Box className="relative font-semibold text-white">
                    Instagram
                  </Box>
                </Box>
                <Box className="relative font-semibold text-white">20%</Box>
              </Box>
              <Box className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                <Box className="flex-1 flex flex-row items-center justify-between gap-5">
                  <Box className="flex flex-row items-center justify-center gap-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.91016" r="5" fill="#F68D2B" />
                    </svg>
                    <Box className="relative font-semibold text-white">
                      Мой Beeline
                    </Box>
                  </Box>
                  <Box className="relative font-semibold text-white">20%</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  // Modified layout for screens < 1275px with legend on the right
  return (
    <Box className="self-stretch flex flex-col items-start justify-start gap-[40px] text-xl pt-[30px]">
      <Box
        className="self-stretch rounded-xl bg-darkslategray border-gray-400 border-solid border-[1px] flex flex-col items-start justify-start py-[22px] px-[22px] pb-[18px] gap-[18px]"
        sx={{
          width: '500px',
          height: '320px',
        }}
      >
        <Box className="self-stretch flex flex-col items-start justify-start gap-[18px]">
          <Box className="self-stretch flex flex-row items-start justify-between gap-5 shrink-0">
            <Typography
              className="m-0 relative"
              variant="inherit"
              component="h3"
              sx={{ fontWeight: '500', lineHeight: '150%', color: '#ffffff' }}
            >
              Каналы трафика
            </Typography>
            <Box className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={More}
              />
            </Box>
          </Box>

          {/* Chart and Legend in horizontal layout */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: '10px',
            }}
          >
            {/* Chart container */}
            <Box
              sx={{
                width: '50%',
                height: '170px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <canvas
                ref={chartRef}
                style={{ width: '100%', maxWidth: '220px' }}
              />
            </Box>

            {/* Legend at the right side */}
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: '20px',
              }}
              className="text-xs"
            >
              {/* WhatsApp */}
              <Box
                sx={{ marginBottom: '12px' }}
                className="flex flex-row items-center justify-between"
              >
                <Box className="flex flex-row items-center justify-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.91016" r="5" fill="#344BFD" />
                  </svg>
                  <Box className="relative font-semibold text-white">
                    WhatsApp
                  </Box>
                </Box>
                <Box className="relative font-semibold text-white">60%</Box>
              </Box>

              {/* Instagram */}
              <Box
                sx={{ marginBottom: '12px' }}
                className="flex flex-row items-center justify-between"
              >
                <Box className="flex flex-row items-center justify-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.91016" r="5" fill="#F4A79D" />
                  </svg>
                  <Box className="relative font-semibold text-white">
                    Instagram
                  </Box>
                </Box>
                <Box className="relative font-semibold text-white">20%</Box>
              </Box>

              {/* Мой Beeline */}
              <Box className="flex flex-row items-center justify-between">
                <Box className="flex flex-row items-center justify-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.91016" r="5" fill="#F68D2B" />
                  </svg>
                  <Box className="relative font-semibold text-white">
                    Мой Beeline
                  </Box>
                </Box>
                <Box className="relative font-semibold text-white">20%</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
