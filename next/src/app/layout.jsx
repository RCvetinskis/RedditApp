import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import { AuthProvider, MyContextProvider } from "./providers";
import CreatCommunityModal from "./components/community/createCommunity/CreatCommunityModal";

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
          <body className={inter.className} suppressHydrationWarning={true}>
            <NavBar />
            <CreatCommunityModal />

            <div>{children}</div>
          </body>
        </AuthProvider>
      </MyContextProvider>
    </html>
  );
}
