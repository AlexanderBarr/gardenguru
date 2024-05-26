import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { TopNav } from "./_component/topnav";

export const metadata = {
  title: "Garden Guru",
  description: "Garden Helper for all",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
