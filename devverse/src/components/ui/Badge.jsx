/* ============================================
   Badge — Small label/tag component
   ============================================ */

const badgeVariants = {
  default: "bg-blue-50 text-blue-700 border-blue-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  learning: "bg-purple-50 text-purple-700 border-purple-200",
};

const Badge = ({ children, variant = "default", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
