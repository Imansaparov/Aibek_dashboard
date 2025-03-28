import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  StatisticsData,
  SuccessData,
  TransferData,
  UserStatistics,
  QuestionStats,
  RatingData,
  TrafficChannels,
  TopCategories,
  HourlyData,
  ComparisonRow,
  PeriodType,
  CategoryType,
  QueryParams,
} from '@/shared//types/dashboard';
import { baseURL } from '@/shared/constants/config/config';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    // You can add headers, credentials, etc. here
    prepareHeaders: headers => {
      // Add any auth headers if needed
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getDashboardData: builder.query<any, QueryParams>({
      query: params => ({
        url: '/dashboard',
        params,
      }),
    }),
    getStatistics: builder.query<StatisticsData, PeriodType>({
      query: period => `/statistics?period=${period}`,
    }),
    getSuccessfulRequests: builder.query<SuccessData, PeriodType>({
      query: period => `/albek/success?period=${period}`,
    }),
    getOperatorTransfers: builder.query<TransferData, PeriodType>({
      query: period => `/albek/transfers?period=${period}`,
    }),
    getUserStatistics: builder.query<UserStatistics, void>({
      query: () => '/users/statistics',
    }),
    getQuestionStats: builder.query<QuestionStats, void>({
      query: () => '/albek/questions',
    }),
    getRatingData: builder.query<RatingData, void>({
      query: () => '/albek/rating',
    }),
    getTrafficChannels: builder.query<TrafficChannels, void>({
      query: () => '/traffic/channels',
    }),
    getTopCategories: builder.query<TopCategories, CategoryType>({
      query: categoryType => `/categories/top?type=${categoryType}`,
    }),
    getHourlyBreakdown: builder.query<HourlyData[], void>({
      query: () => '/requests/hourly',
    }),
    getComparisonData: builder.query<ComparisonRow[], void>({
      query: () => '/analytics/comparison',
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useGetStatisticsQuery,
  useGetSuccessfulRequestsQuery,
  useGetOperatorTransfersQuery,
  useGetUserStatisticsQuery,
  useGetQuestionStatsQuery,
  useGetRatingDataQuery,
  useGetTrafficChannelsQuery,
  useGetTopCategoriesQuery,
  useGetHourlyBreakdownQuery,
  useGetComparisonDataQuery,
} = dashboardApi;
