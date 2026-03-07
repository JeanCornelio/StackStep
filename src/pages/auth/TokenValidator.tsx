import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const TokenValidator = () => {
  const { token: accessToken } = useParams();
  const { setAuthenticated } = useAuth();

  useEffect(() => {
    if (accessToken) {
      setAuthenticated(accessToken);
    }
  }, [accessToken, setAuthenticated]);

  return <div>TokenValidator</div>;
};
