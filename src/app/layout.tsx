import { cn } from "@/common/helpers/tailwind.helper";
import AppLayout from "@/common/layouts/AppLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forging Dev",
  description: "Web Development & Online Services by Forging Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-dark-purple text-white")}>
        <CSPostHogProvider>
          <AppLayout>{children}</AppLayout>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
