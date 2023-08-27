import React, { FC } from "react";
import Button from "./core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AppBar: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-center items-center h-16 bg-white text-black fixed w-full top-0 z-50 shadow-sm py-10">
      <div className="flex justify-between items-center w-11/12">
        <h1 className="text-xl font-bold">[AppName]</h1>
        <div className="space-x-2">
          {isAuthenticated ? (
            <>
              <Button secondary text="Logout" onClick={() => logout()} />
              <Button
                primary
                text="Dashboard"
                onClick={() => navigate("/home")}
              />
            </>
          ) : (
            <>
              <Button
                secondary
                text="Login"
                onClick={() => loginWithRedirect()}
              />
              <a href="#waitlist">
                <Button primary text="Join Waitlist" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default AppBar;
