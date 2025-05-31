import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";

export default function StoreLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-24"></div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
