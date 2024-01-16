//styles
import "@/styles/reset.css";
import "@/styles/global.css";

//redux
import Providers from "@/redux/providers";

//layout
import Header from "@/layout/header";
import Main from "@/layout/main";
import Footer from "@/layout/footer";

//toast
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Kplus Travel",
  description: "Kplus Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="w-full h-full min-h-screen flex flex-col">
        <Toaster />
        <Providers>
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
