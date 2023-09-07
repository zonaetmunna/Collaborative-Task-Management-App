import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import DashboardSidebar from "../components/common/Sidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
