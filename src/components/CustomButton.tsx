import Link from "next/link";

type ButtonProps = {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top" | "framename";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function CustomButton({ href, target = "_self", onClick, children, className }: ButtonProps) {
  if (href) {
    return (
      <Link className={`inline-block transform transition duration-300 ${className}`} target={target} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`inline-block transform transition duration-300 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
