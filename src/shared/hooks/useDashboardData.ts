import {
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
} from '@/shared/api/request/dashboardApi/dashboardApi';
import { useAppSelector } from '@/app/store/store';
import { QueryParams, CategoryType } from '../types/dashboard';

type DataType =
  | 'statistics'
  | 'successfulRequests'
  | 'operatorTransfers'
  | 'userStatistics'
  | 'questionStats'
  | 'ratingData'
  | 'trafficChannels'
  | 'topCategories'
  | 'hourlyBreakdown'
  | 'comparisonData';

interface UseDashboardDataParams extends QueryParams {
  categoryType?: CategoryType;
}

export const useDashboardData = (
  dataType: DataType,
  params: UseDashboardDataParams = {}
) => {
  const { period, topicFilter, channelFilter } = useAppSelector(
    state => state.dashboard
  );

  // Combine filters from global state with any specific params
  const queryParams = {
    period,
    topic: topicFilter,
    channel: channelFilter,
    ...params,
  };

  // Select the appropriate query hook based on dataType
  switch (dataType) {
    case 'statistics':
      return useGetStatisticsQuery(queryParams.period);
    case 'successfulRequests':
      return useGetSuccessfulRequestsQuery(queryParams.period);
    case 'operatorTransfers':
      return useGetOperatorTransfersQuery(queryParams.period);
    case 'userStatistics':
      return useGetUserStatisticsQuery();
    case 'questionStats':
      return useGetQuestionStatsQuery();
    case 'ratingData':
      return useGetRatingDataQuery();
    case 'trafficChannels':
      return useGetTrafficChannelsQuery();
    case 'topCategories':
      return useGetTopCategoriesQuery(params.categoryType || 'inquiries');
    case 'hourlyBreakdown':
      return useGetHourlyBreakdownQuery();
    case 'comparisonData':
      return useGetComparisonDataQuery();
    default:
      throw new Error(`Unknown data type: ${dataType}`);
  }
};
