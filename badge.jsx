export function Badge({ className="", children }) {
  return <span className={`inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-1 text-xs font-medium ${className}`}>{children}</span>;
}
