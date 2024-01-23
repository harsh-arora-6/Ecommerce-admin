import { useContext } from "react";
import { UserContext } from "@/app/providers/UserProvider";

export const useUserContext = () => {
  const data = useContext(UserContext);

  return data;
};
