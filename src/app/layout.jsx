import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import MyContextProvider from "./context/MyContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit App",
  description: "Reddit type application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
          <NavBar />
          <div className="max-w-6xl w-full mx-auto mt-3 ">{children}</div>
        </MyContextProvider>
      </body>
    </html>
  );
}
