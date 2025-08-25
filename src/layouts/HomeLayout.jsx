import { Outlet} from "react-router-dom";
import Header from "../components/Header";


const HomeLayout = () => {

  return (
    <div className="container">
      <Header />

      <main>
        {/* RENDER THE NESTED ROUTE COMPONENTS */}
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
