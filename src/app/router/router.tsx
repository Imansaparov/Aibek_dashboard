import { createBrowserRouter } from 'react-router-dom';

import { paths } from '@/shared/paths';
import DashboardHome from '@/pages/dashboard/ui/DashboardHome';

export const router = createBrowserRouter([
  {
    children: [
      {
        path: paths.home,
        element: <DashboardHome />,
      },
      {
        path: paths.analytics,
        element: <DashboardHome />,
      },
      {
        path: paths.portfolio,
        element: <DashboardHome />,
      },
      {
        path: paths.settings,
        element: <DashboardHome />,
      },
    ],
  },
]);
