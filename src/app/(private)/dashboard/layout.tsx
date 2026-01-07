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
          <div className="sm:flex-2/3 w-full">{children}</div>
          <div className="flex-1/3 flex mt-32 hidden sm:flex">
            <DashboardSidebar />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
