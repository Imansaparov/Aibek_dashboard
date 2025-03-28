export interface StatisticsData {
  totalRequests: number;
  trend: number;
  period: string;
}

export interface SuccessData {
  count: number;
  trend: number;
}

export interface TransferData {
  count: number;
  trend: number;
}

export interface UserStatistics {
  totalUniqueUsers: number;
  activeUsers: number;
}

export interface QuestionStats {
  count: number;
}

export interface RatingData {
  rating: number;
  totalVotes: number;
}

export interface ChannelData {
  name: string;
  percentage: number;
  color: string;
}

export interface TrafficChannels {
  channels: ChannelData[];
}

export interface Category {
  name: string;
  percentage: number;
}

export interface TopCategories {
  categories: Category[];
}

export interface HourlyData {
  hour: string;
  count: number;
}

export interface ComparisonRow {
  type: string;
  averageDialogTime: string;
  averageQuestions: number;
  averageResponseTime: string;
}

export type CategoryType = 'inquiries' | 'completed' | 'transfers';
export type PeriodType = 'day' | 'week' | 'month';
export type FilterType = 'all' | string;

export interface DashboardState {
  period: PeriodType;
  topicFilter: FilterType;
  channelFilter: FilterType;
  loading: boolean;
  error: string | null;
}

export interface QueryParams {
  period?: PeriodType;
  topic?: FilterType;
  channel?: FilterType;
  categoryType?: CategoryType;
  [key: string]: any;
}
