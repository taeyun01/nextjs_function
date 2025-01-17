import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
  dashboard,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  dashboard: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-6">
          <Header />
          <section>{children}</section>
          <section className="flex gap-6 py-6">
            {team}
            {dashboard}
          </section>
        </main>
      </body>
    </html>
  );
}
