import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../backend/client";

export default function Private({children}) {
  const navigate = useNavigate();
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabaseClient.auth.getSession();
      if (!data.session) {
        navigate("/login");
      }
    };
    getSession();

    return () => {};
  }, [navigate]);



  return <>{children}</>;
}
