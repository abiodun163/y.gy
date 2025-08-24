import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import FeaturesLayout from "./layouts/FeaturesLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Blog from "./pages/Blog";
import QrCreator from "./pages/QrCreator";

// SUB-PAGES
import FeatureAnalytics from "./pages/FeatureAnalytics";
import CustomLinks from "./pages/CustomLinks";
import QrCode from "./pages/QrCode";
import Collaboration from "./pages/Collaboration";
import Webhooks from "./pages/Webhooks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/qr-creator" element={<QrCreator />} />

          {/* FEATURES - LAYOUTS */}
          <Route path="features" element={<FeaturesLayout />}>
            <Route path="analytics" element={<FeatureAnalytics />} />
            <Route path="custom-links" element={<CustomLinks />} />
            <Route path="qr-codes" element={<QrCode />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="integration" element={<Webhooks />} />
          </Route>
        </Route>

        {/* DOCUMENTATION - NO SHARED UI */}
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
