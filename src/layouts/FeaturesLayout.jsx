import { Outlet, Link } from "react-router-dom";

const FeaturesLayout = () => {
  return (
    <div>
      <Link to="analytics">Analytics</Link>
      <br />
      <Link to="custom-links">Custom Links</Link>
      <br />
      <Link to="qr-codes">QR Code</Link>
      <br />
      <Link to="collaboration">Team Collaborations</Link>
      <br />
      <Link to="integration">Webhooks</Link>
      <br />

      <Outlet />
    </div>
  );
};

export default FeaturesLayout;
