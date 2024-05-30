import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { TopNav } from "./_component/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "~/app/api/uploadthing/core";
import React from "react";

export const metadata = {
  title: "Garden Guru",
  description: "Garden Helper for all",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans ${GeistSans.variable} dark`}>
          <div className="grid-rows-[auto, 1fr] grid h-screen">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
