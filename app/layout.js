import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata = {
  title: "Divy UI | React UI library",
  description:
    "Divy UI is a minimalist React UI library to elevate your frontend workflow",
  // TODO: add logo fav icon
  // icons: {
  //   icon: ["./favicon.ico?v=4"],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="nunito-regular">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
