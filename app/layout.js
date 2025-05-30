import { Footer, Header, PageWrapper } from "@/components/layout";

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
        <PageWrapper>
          <Header />
          <main className="nunito-regular custom-container text-indigo-950">
            {children}
          </main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
