import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
