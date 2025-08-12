export function Card({ className="", children }) { return <div className={`border rounded-xl ${className}`}>{children}</div>; }
export function CardHeader({ children }) { return <div className="p-5">{children}</div>; }
export function CardTitle({ className="", children }) { return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>; }
export function CardDescription({ children }) { return <p className="text-sm text-gray-600">{children}</p>; }
export function CardContent({ className="", children }) { return <div className={`p-5 pt-0 ${className}`}>{children}</div>; }
