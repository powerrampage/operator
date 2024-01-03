import { languages } from "config";
export type Languages = (typeof languages)[number];

// FixedForwardRef for infer generic React component
export type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;
