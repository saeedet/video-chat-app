import Call from "./Call";
import Notifications from "./Notifications";
import User from "./User";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-w-min h-screen bg-gradient-to-b from-green-500 to-blue-500 flex flex-col justify-between px-4 py-8">
      <User />
      <Notifications />
      <Call />
    </div>
  );
};

export default Sidebar;
