import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DashboardState,
  PeriodType,
  FilterType,
} from '@/shared/types/dashboard';

const initialState: DashboardState = {
  period: 'day',
  topicFilter: 'all',
  channelFilter: 'all',
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<PeriodType>) => {
      state.period = action.payload;
    },
    setTopicFilter: (state, action: PayloadAction<FilterType>) => {
      state.topicFilter = action.payload;
    },
    setChannelFilter: (state, action: PayloadAction<FilterType>) => {
      state.channelFilter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPeriod,
  setTopicFilter,
  setChannelFilter,
  setLoading,
  setError,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
