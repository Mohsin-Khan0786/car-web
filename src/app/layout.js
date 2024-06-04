import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Car App",
  description: "Car Web App devloped by Mohsin Kahn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}

      </body>
    </html>
  );
}
