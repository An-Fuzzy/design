import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  children: ReactNode;
  variant?: "primary" | "secondary";
} & Omit<ComponentPropsWithoutRef<C>, "as" | "children">;

export default function Button<C extends ElementType = "button">({
  as,
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps<C>) {
  const Component = as ?? "button";
  const classes = [`btn-${variant}`, className].filter(Boolean).join(" ");
  const typeDefault = Component === "button" ? { type: "button" as const } : {};

  return (
    <Component {...typeDefault} className={classes} {...rest}>
      {children}
    </Component>
  );
}
