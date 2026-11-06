/* ============================================
   Button — Clean reusable button
   ============================================ */

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-sm hover:shadow transition-all",
  secondary:
    "bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 font-medium shadow-sm transition-all",
  outline:
    "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium transition-all",
};

const sizes = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  variant = "primary",
  size = "md",
  href,
  children,
  icon: Icon,
  className = "",
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg transition-colors cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {Icon && <Icon size={size === "sm" ? 16 : 18} />}
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {Icon && <Icon size={size === "sm" ? 16 : 18} />}
      {children}
    </button>
  );
};

export default Button;
