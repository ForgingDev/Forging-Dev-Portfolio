import { cn } from "@/common/helpers/tailwind.helper";
import AppLayout from "@/common/layouts/AppLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Valhalla",
  description: "Project Valhalla Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-dark-purple text-white")}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
