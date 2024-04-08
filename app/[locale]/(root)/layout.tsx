import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../globalRedux/provider";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "AbuGlobal | Buy & sell Crypto",
  description: "Crypto on and off ramp platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
