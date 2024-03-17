import { Button } from "@mantine/core";
import React, { ReactNode, CSSProperties, FormEvent } from "react";
interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  variant?: string;
  children: ReactNode;
  maintine?: string;
  clsName?: string;
  customStyle?: CSSProperties;
  color?: string;
  [key: string]: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn: React.FC<ButtonProps> = ({
  type,
  variant = "",
  children,
  maintine,
  onClick,
  clsName = "",
  customStyle,
  color,
  ...rest
}: ButtonProps) => {
  return maintine ? (
    <Button
      type={type}
      variant=""
      color={color}
      onClick={onClick}
      style={{ ...customStyle }}
      className={`${clsName ? clsName : ""}`}
      {...rest}
    >
      {children}
    </Button>
  ) : (
    <button
      style={{
        ...customStyle,
        borderRadius: "8px",
        background: "var(--color-primary)",
        color: "var(--white-color)",
        border: "none",
      }}
      className={`${clsName ? clsName : ""}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Btn;
