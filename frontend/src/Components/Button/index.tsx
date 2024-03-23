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
      variant="filled"
      color={color}
      size="md"
      radius={"lg"}
      style={{
        ...customStyle,
        background: "#1c64f2",
        color: "#ffffff",
        border: "none",
        fontSize: "1.6rem",
        padding: "1.2rem 1.4rem",
        lineHeight: "16px",
        height: "100%",
      }}
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
        background: "#1c64f2",
        color: "#ffffff",
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
