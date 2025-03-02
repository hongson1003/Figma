import "./globals.css";
import { Room } from "./Room";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
