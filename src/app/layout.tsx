import "./globals.css";
import { Albert_Sans, Cairo } from "next/font/google";
import { LocaleProvider } from "../i18n/LocaleProvider";

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "Ionic Finishing & Construction",
  description: "Modern finishing & construction portfolio by Ionic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[--color-background] text-[--color-foreground]">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
