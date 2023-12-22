import { Toaster } from "react-hot-toast";
import "../../globals.css";
const AdminLayout = ({ children }) => {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
};

export default AdminLayout;
