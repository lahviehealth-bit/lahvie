import React from "react";
export function Button({ asChild, variant="default", className="", children, ...props }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = { default:"bg-emerald-700 text-white hover:bg-emerald-800", outline:"border border-gray-300 hover:bg-gray-50", ghost:"hover:bg-gray-100" };
  const cn = `${base} ${(variants[variant] || variants.default)} ${className}`;
  if (asChild && React.isValidElement(children)) { return React.cloneElement(children, { className: `${children.props.className||""} ${cn}`.trim(), ...props }); }
  return <button className={cn} {...props}>{children}</button>;
}
