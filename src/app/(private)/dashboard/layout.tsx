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
          <div className="sm:flex-3/4 w-full min-w-0 ">{children}</div>
          <aside className="flex-1/4 flex mt-32 hidden sm:flex">
            <DashboardSidebar />
          </aside>
        </div>
      </PageContainer>
    </>
  );
}
