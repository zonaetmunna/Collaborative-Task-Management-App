import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
