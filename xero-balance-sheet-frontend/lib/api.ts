// lib/api.ts
import { ReportData } from '@/types';

export const fetchReport = async (): Promise<ReportData> => {
  const response = await fetch('http://backend:3001/reports/balance-sheet', {
    cache: 'no-store', // Ensure fresh data each time, avoids caching
  });
  if (!response.ok) {
    throw new Error('Failed to fetch the balance sheet report');
  }
  return response.json();
};
