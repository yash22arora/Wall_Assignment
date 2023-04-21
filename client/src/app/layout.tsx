import "./globals.css";

export const metadata = {
  title: "WALL",
  description: "Assignment by Yashvardhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
