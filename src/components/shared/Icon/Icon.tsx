import { SVGProps, memo, useMemo } from "react";

// COMMON
import { ReactComponent as CalendarDates } from "assets/images/svg/common/calendar-dates.svg";
import { ReactComponent as Carbon } from "assets/images/svg/common/carbon.svg";
import { ReactComponent as DefaultUser } from "assets/images/svg/common/default-user.svg";
import { ReactComponent as DocumentArrowDown } from "assets/images/svg/common/document-arrow-down.svg";
import { ReactComponent as EnterCircle } from "assets/images/svg/common/enter-circle.svg";
import { ReactComponent as LoginInputPass } from "assets/images/svg/common/login-input-pass.svg";
import { ReactComponent as LoginInputUser } from "assets/images/svg/common/login-input-user.svg";
import { ReactComponent as LoginUser } from "assets/images/svg/common/login-user.svg";
import { ReactComponent as OpenFull } from "assets/images/svg/common/open-full.svg";
import { ReactComponent as Operator } from "assets/images/svg/common/operator.svg";
import { ReactComponent as PersonCall } from "assets/images/svg/common/person-call.svg";
import { ReactComponent as Search } from "assets/images/svg/common/search.svg";
import { ReactComponent as SocialGlobe } from "assets/images/svg/common/social-globe.svg";
import { ReactComponent as SocialPhone } from "assets/images/svg/common/social-phone.svg";
import { ReactComponent as SocialTelegram } from "assets/images/svg/common/social-telegram.svg";
import { ReactComponent as Trash } from "assets/images/svg/common/trash.svg";

// OTHER
import { ReactComponent as Troubleshooting } from "assets/images/svg/other/troubleshooting.svg";
import { ReactComponent as ChevronLeft } from "assets/images/svg/other/chevron-left.svg";
import { ReactComponent as FlagRussia } from "assets/images/svg/other/flag-russia.svg";
import { ReactComponent as FlagUzb } from "assets/images/svg/other/flag-uzb.svg";
import { ReactComponent as EspKey } from "assets/images/svg/other/esp-key.svg";
import { ReactComponent as Location } from "assets/images/svg/other/location.svg";
import { ReactComponent as Empty } from "assets/images/svg/other/empty.svg";
import { ReactComponent as UpRight } from "assets/images/svg/other/up-right.svg";
import { ReactComponent as Logo } from "assets/images/svg/other/logo.svg";

export type IconName =
  | "calendar-dates"
  | "carbon"
  | "default-user"
  | "document-arrow-down"
  | "enter-circle"
  | "login-input-pass"
  | "login-input-user"
  | "login-user"
  | "open-full"
  | "operator"
  | "person-call"
  | "search"
  | "social-globe"
  | "social-phone"
  | "social-telegram"
  | "trash"
  | "troubleshooting"
  | "chevron-left"
  | "flag-uzb"
  | "flag-russia"
  | "esp-key"
  | "location"
  | "empty"
  | "up-right"
  | "logo";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: IconName;
}

export const Icon = memo(({ name, ...props }: IconProps) => {
  const iconMap: Record<IconName, JSX.Element> = useMemo(
    () => ({
      "calendar-dates": <CalendarDates {...props} />,
      carbon: <Carbon {...props} />,
      "default-user": <DefaultUser {...props} />,
      "document-arrow-down": <DocumentArrowDown {...props} />,
      "enter-circle": <EnterCircle {...props} />,
      "login-input-pass": <LoginInputPass {...props} />,
      "login-input-user": <LoginInputUser {...props} />,
      "login-user": <LoginUser {...props} />,
      "open-full": <OpenFull {...props} />,
      operator: <Operator {...props} />,
      "person-call": <PersonCall {...props} />,
      search: <Search {...props} />,
      "social-globe": <SocialGlobe {...props} />,
      "social-phone": <SocialPhone {...props} />,
      "social-telegram": <SocialTelegram {...props} />,
      trash: <Trash {...props} />,
      troubleshooting: <Troubleshooting {...props} />,
      "chevron-left": <ChevronLeft {...props} />,
      "flag-russia": <FlagRussia {...props} />,
      "flag-uzb": <FlagUzb {...props} />,
      "esp-key": <EspKey {...props} />,
      location: <Location {...props} />,
      empty: <Empty {...props} />,
      "up-right": <UpRight {...props} />,
      logo: <Logo {...props} />,
    }),
    [props]
  );

  return iconMap[name];
});
