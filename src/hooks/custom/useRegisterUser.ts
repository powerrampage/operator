import { notification } from "antd";
import { useUser } from "hooks";
import { useTranslation } from "react-i18next";
import { setUserInfo, setUserRole, useAppDispatch } from "store";
import { UserRoles } from "types";

export const useRegisterUser = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { logoutUser } = useUser();

  // return useUsersMeMutation({
  //   onSuccess({ data }) {
  //     const role = data?.role as UserRoles;

  //     dispatch(setUserRole(role));
  //     dispatch(setUserInfo(data));
  //   },
  //   onError({ response, message }) {
  //     logoutUser();
  //     notification.error({
  //       message: t("Фойдаланувчи маълумотларини олишда хатолик юз берди"),
  //       description: response?.data?.message ?? message,
  //     });
  //   },
  // });
};
