import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/Fonts/font";
import Header from "@/ui/sections/Header";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "Newsletter App",
  description: "Send and recieve newsletters with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-black dark:text-white dark:bg-black`}>
        <ThemeProvider attribute="class">
          <Header />
          <div className="pt-10 sm:pt-32">
            {children}
          </div>

        </ThemeProvider >
      </body>
    </html>
  );
}
