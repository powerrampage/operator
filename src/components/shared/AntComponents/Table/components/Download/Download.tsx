import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonProps } from "components/shared";
import cn from "classnames";
import classes from "./Download.module.scss";

export interface DownloadProps extends Omit<ButtonProps, "onClick"> {
  show?: boolean;
  isDownloading?: boolean;
  onDownload?: ButtonProps["onClick"];
}

export const Download: FC<DownloadProps> = ({
  isDownloading,
  onDownload,
  show,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Button
        {...props}
        onClick={onDownload}
        size="large"
        className={cn(classes.button)}
        loading={isDownloading}
      >
        {t("Скачать")}
      </Button>
    </div>
  );
};
