import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { log } from "console";
import LoadingPage from "../Loading";
const Home: React.FC = () => {
  //   const [activeView, setActiveView] = useState("connections-view");
  const [activeView, setActiveView] = useState("connections-view");
  const { logout } = useAuth0();

  const getButtonClass = (view: string) => {
    return activeView === view
      ? "block w-full text-left py-2 px-4 mb-2 bg-indigo-200 rounded-lg text-gray-800 font-bold"
      : "block w-full hover:bg-indigo-100 bg-slate-100 text-left py-2 px-4 mb-2 rounded-lg text-gray-800";
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="bg-white w-64 p-4  border-r ">
        <a href="/">
          <div className="flex flex-row w-full items-center justify-center pt-12 pb-10">
            <p className="h3 text-black text-2xl">[APP NAME]</p>
          </div>
        </a>
        <button
          onClick={() => setActiveView("connections-view")}
          className={getButtonClass("connections-view")}
        >
          Find Connections
        </button>
        <button
          onClick={() => setActiveView("settings-view")}
          className={getButtonClass("settings-view")}
        >
          Settings
        </button>
        <button
          onClick={() => logout()}
          className="block w-full text-left text-red-500 py-2 px-4 mb-2 rounded-lg hover:bg-red-100"
        >
          Logout
        </button>
      </div>
      <div className="flex-1 p-12">
        {activeView === "connections-view" && <p>View connections</p>}
        {activeView === "search-view" && <p>View Search</p>}
        {activeView === "settings-view" && <p> View Settings</p>}
      </div>
    </div>
  );
};

// TODO: Uncomment this when you're ready to add authentication
// export default withAuthenticationRequired(Home, {
//   returnTo: "/home",
//   onRedirecting: () => <LoadingPage />,
// });
export default Home;
