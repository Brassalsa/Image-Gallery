import Header from "@/components/header/Header";
import "./globals.css";
import ThemeProvider from "@/providers/themeProvider";
import { ThemeContextProvider } from "@/context/themeContext";

export const metadata = {
  title: "Image Gallery",
  description: "Created with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-[100vh] bg-primBg text-primText">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
