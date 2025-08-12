export const metadata = { title: "LAHVIE Health", description: "Adding life to your years." };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
