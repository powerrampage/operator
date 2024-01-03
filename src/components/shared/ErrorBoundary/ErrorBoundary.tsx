import { Component, ErrorInfo, ReactNode } from "react";
import classes from "./ErrorBoundary.module.scss";
import { Icon } from "../Icon";
import i18n from "services/i18n";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.log("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={classes.container}>
          <h1>{i18n.t("Хатолик юз берди")}</h1>
          <Icon name="troubleshooting" style={{ width: "650px" }} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
