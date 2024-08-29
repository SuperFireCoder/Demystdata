import ReportTable from "@/components/ReportTable";
import { data } from "@/types";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Balance Sheet Report</h1>
      <ReportTable report={data.Reports[0]} />
    </div>
  );
}
