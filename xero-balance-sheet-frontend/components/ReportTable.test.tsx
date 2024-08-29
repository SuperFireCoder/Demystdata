// components/ReportTable.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReportTable from './ReportTable';
import { Report } from '@/types';

// Mock data for the test
const mockReport: Report = {
  ReportID: 'BalanceSheet',
  ReportName: 'Balance Sheet',
  ReportType: 'BalanceSheet',
  ReportTitles: ['Balance Sheet', 'Demo Org', 'As at 29 August 2024'],
  ReportDate: '29 August 2024',
  UpdatedDateUTC: '/Date(1724944929346)/',
  Fields: [],
  Rows: [
    {
      RowType: 'Header',
      Cells: [
        { Value: '' },
        { Value: '29 August 2024' },
        { Value: '30 August 2023' },
      ],
    },
    {
      RowType: 'Section',
      Title: 'Assets',
      Rows: [
        {
          RowType: 'Row',
          Cells: [
            { Value: 'My Bank Account' },
            { Value: '126.70' },
            { Value: '99.60' },
          ],
        },
      ],
    },
  ],
};

describe('ReportTable Component', () => {
  test('renders the report table with data', () => {
    render(<ReportTable report={mockReport} />);

    // Check if the table headings are rendered
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Current Period')).toBeInTheDocument();
    expect(screen.getByText('Previous Period')).toBeInTheDocument();

    // Check if the section title is rendered
    expect(screen.getByText('Assets')).toBeInTheDocument();

    // Check if the row data is rendered
    expect(screen.getByText('My Bank Account')).toBeInTheDocument();
    expect(screen.getByText('126.70')).toBeInTheDocument();
    expect(screen.getByText('99.60')).toBeInTheDocument();
  });
});
