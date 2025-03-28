// Approach that works even if type declarations aren't properly recognized
declare const import_meta: {
  env: {
    VITE_BACKEND_URL?: string;
    VITE_APP_ENV?: string;
  };
};

// Method 1: Using direct access with type assertion
export const baseURL = (import.meta as any).env.VITE_BACKEND_URL || '';

// Method 2: Using a safer accessor function
function getEnv(key: string, defaultValue: string = ''): string {
  try {
    const value = (import.meta as any).env[key];
    return value !== undefined ? value : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

export const config = {
  api: {
    baseURL: getEnv('VITE_BACKEND_URL', 'http://localhost:3000'),
    timeout: 10000,
  },
  app: {
    env: getEnv('VITE_APP_ENV', 'development'),
  },
};
