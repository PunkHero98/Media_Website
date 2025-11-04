import { AppSideNavbar } from "../../components/AppSideNavbar";
import { AppTopNavbar } from "../../components/AppTopNavbar";
export default function Homepage() {
  return (
    <div className="flex gap-2 h-screen w-full">
      <AppSideNavbar />
      <div className="flex flex-col w-full">
        <AppTopNavbar />
        This is home page
      </div>
    </div>
  );
}
