import { PageContainer } from "@/layout/page-container";
import { DashboardSidebar } from "@/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageContainer>
        <div className="flex gap-x-10 h-full">
          <div className="flex-2/3">{children}</div>
          <div className="flex-1/3 flex items-center">
            <DashboardSidebar />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
