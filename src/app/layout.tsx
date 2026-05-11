import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "SS Electrician",
  description: `For all your electrical needs in the most affordable price. Avail services
   like: LED tv repair, circuit installation, light fixing, entire house wiring and more.  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        < Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
