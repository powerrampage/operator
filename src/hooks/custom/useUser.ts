import { useNavigate } from "react-router-dom";
import { queryClient } from "services";
import i18n from "services/i18n";
import {
  persistor,
  selectUserRole,
  selectUserState,
  setLogout,
  useAppDispatch,
  useAppSelector,
} from "store";
import { UserRoles } from "types";

const useUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(selectUserState);
  const role = useAppSelector(selectUserRole) as UserRoles;
  const language = i18n.language;
  const isLogged = !!Object.keys(userInfo).length;

  function clearUserData() {
    persistor.purge();
    queryClient.clear();
  }

  function logoutUser() {
    dispatch(setLogout());
    clearUserData();
    navigate("/auth/sign-in");
    // window.location.href = "/auth/sign-in";
  }

  return {
    isLogged,
    userInfo,
    logoutUser,
    language,
    role,
  };
};

export default useUser;
