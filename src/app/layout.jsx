import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import { AuthProvider, MyContextProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit App",
  description: "Reddit type application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyContextProvider>
        <AuthProvider>
          <body className={inter.className}>
            <NavBar />

            <div>{children}</div>
          </body>
        </AuthProvider>
      </MyContextProvider>
    </html>
  );
}
