import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  label: string;
  variant?: "primary" | "secondary";
} & Omit<ComponentPropsWithoutRef<C>, "as" | "label">;

export default function Button<C extends ElementType = "button">({
  as,
  label,
  variant = "primary",
  className,
  ...rest
}: ButtonProps<C>) {
  const Component = as ?? "button";
  const classes = [`btn-${variant}`, className].filter(Boolean).join(" ");
  const typeDefault = Component === "button" ? { type: "button" as const } : {};

  return (
    <Component {...typeDefault} className={classes} {...rest}>
      {label}
    </Component>
  );
}
