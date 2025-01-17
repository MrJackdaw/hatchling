import { ComponentPropsWithRef } from "react";
import "./Button.css";

type BProps = ComponentPropsWithRef<"button">;

export default function Button(props: BProps) {
  const { className, ...btnProps } = props;
  const classlist = `filled-button ${className}`.trim();

  return <button {...btnProps} className={classlist} />;
}
