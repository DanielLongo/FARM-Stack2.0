import React from "react";

export default {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT ?? "",
  AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN ?? "",
  AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID ?? "",
  AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE ?? "",
};
