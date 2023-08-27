import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Constants from "../constants";

const useUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);
  const [userInfoLoading, setUserInfoLoading] = useState(true);
  const getUserInfo = async () => {
    fetch(`${Constants.API_ENDPOINT}/user/info`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getAccessTokenSilently()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
        setUserInfoLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { userInfo, userInfoLoading, getUserInfo };
};

export default useUser;
