import { Inter } from "next/font/google";
import "./globals.css";
import './style.scss';

// NT Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NodesTheme",
  description: "This is the base theme for the theme-club NodesTheme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} nt-base-theme nt-body`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
