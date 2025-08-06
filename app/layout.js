import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Terrapix",
  description: "Stunning Wallpapers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
