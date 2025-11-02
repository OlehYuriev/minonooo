import { AuthProvider } from "@/auth/provider/auth-provider";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { ToastProvider } from "@/providers/toast-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Forum, Inter, Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "800"], // Light(300), Regular(400), Medium(500), ExtraBold(800)
  variable: "--font-family",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--second-family",
  display: "swap",
});

const forum = Forum({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--third-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Minonooo",
  description: "Магазин жіночого та дитячого одягу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${montserrat.variable} ${forum.variable} ${playfair.variable} ${inter.variable} font-normal antialiased`}
      >
        <AuthProvider>
          <ToastProvider>
            <div className="max-w-[1440px] mx-auto relative" id="container">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
