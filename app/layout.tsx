import { Inter } from "next/font/google";
import "@/styles/index.css";
import "@/styles/waves.css";
import Sidenav from "@/components/navigation/Sidenav";
import Topnav from "@/components/navigation/Topnav";
import ClientWrapper from "@/components/navigation/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Genshin Impact Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ClientWrapper>
          <Topnav/>
          <div className="wrapper">
            <Sidenav/>
            <main id="content">
              {children}
            </main>
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}