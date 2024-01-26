import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Button, Icon, Input } from "components/shared";
import { LockOutlined, LoginOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { z } from "zod";
import i18n from "services/i18n";
import { Space, notification } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUser } from "hooks";
import { setUserInfo, setUserRole, useAppDispatch } from "store";
import classes from "./SignIn.module.scss";
import Logo from "assets/images/png/logo.png";

import LoginWrapper from "../LoginWrapper";

const schema = z.object({
  username: z
    .string({ required_error: i18n.t("Киритиш мажбурий") })
    .min(1, i18n.t("Киритиш мажбурий")),
  password: z
    .string({ required_error: i18n.t("Киритиш мажбурий") })
    .min(1, i18n.t("Киритиш мажбурий")),
});

type FormValues = z.infer<typeof schema>;

const SignIn: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onRegisterUser = useRegisterUser();

  // const loginMutation = useAuthLogin({
  //   onSuccess({ data }) {
  //     dispatch(setToken(data?.token));
  //     onRegisterUser
  //       .mutateAsync({
  //         config: { headers: { Authorization: "Bearer " + data?.token } },
  //       })
  //       .then(() => {
  //         // window.location.href = "/";
  //         navigate("/");
  //       });
  //   },
  //   onError({ message, response }) {
  //     notification.error({
  //       message: _stringify(response?.data),
  //       description: response?.data?.message ?? message,
  //     });
  //   },
  // });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onLogin = handleSubmit(({ username, password }) => {
    // loginMutation.mutate({
    //   payload: { userName: username, password },
    // });
    dispatch(setUserRole("ADMIN"));
    dispatch(
      setUserInfo({
        pinfl: "123132131",
        lastName: "Adminov",
        firstName: "Admin",
        middleName: "Adminovich",
      })
    );
    setTimeout(() => {
      navigate("/");
    }, 0);
  });

  return (
    <LoginWrapper>
      <div className={classes.box}>
        <Space className="text-center mb20 size25 bold mt10">
          {t("Тизимга кириш")}
          <LockOutlined />
        </Space>
        <form onSubmit={onLogin} autoComplete="off">
          <div className="mb20">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  prefix={<UserOutlined className="size24 mr10" />}
                  placeholder={t("Фойдаланувчи номи")}
                  error={errors?.username?.message}
                />
              )}
            />
          </div>
          <div className="mb30">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  size="large"
                  prefix={<LockOutlined className="size24 mr10" />}
                  placeholder={t("Пароль")}
                  error={errors?.password?.message}
                />
              )}
            />
          </div>
          <Button
            size="large"
            block
            type="primary"
            className="flex-both-center py25"
            htmlType="submit"
            loading={false}
            icon={<LoginOutlined />}
          >
            {t("Кириш")}
          </Button>
        </form>
      </div>
    </LoginWrapper>
  );
};

export default SignIn;
