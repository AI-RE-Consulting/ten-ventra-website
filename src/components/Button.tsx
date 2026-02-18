import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "filled" | "outlined";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  variant = "filled",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-200";
  const variants = {
    filled:
      "bg-accent text-white hover:bg-navy-light",
    outlined:
      "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
