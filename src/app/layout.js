import { CartProvider } from "@/context";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Car App",
  description: "Car Web App devloped by Mohsin Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
