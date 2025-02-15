import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { logout } from "@/State/Auth/Action";
import {
  BookmarkIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  
} from "@radix-ui/react-icons";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "My Cars", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Add Cars",
    path: "/addcars",
    icon: <DashboardIcon className="h-6 w-6" />,
  },
  {
    name: "Change Car Details",
    path: "/updatecardetails",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
 
  { name: "Logout", path: "/", icon: <ExitIcon className="h-6 w-6" /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="mt-10 space-y-5">
      {menu.map((item) => (
        <div key={item.name}>
          <SheetClose className="w-full">
            <Button
              variant="outline"
              className="flex items-center gap-5 py-6 w-full"
              onClick={() => {
                navigate(item.path);
                if (item.name == "Logout") {
                  handleLogout();
                }
              }}
            >
              <span className="w-8">{item.icon}</span>
              <p>{item.name}</p>
            </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;