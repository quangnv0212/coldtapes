import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Cold Tapes",
  description:
    "Cold Tapes murder mystery and game. 16 Suspects. 1 Murderer. Only you can solve it...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/campton" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {process.env.NODE_ENV == "production" ? (
          <>
            {" "}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-T3EBMWTZKD"
              strategy="afterInteractive"
            />{" "}
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-T3EBMWTZKD'); gtag('config', 'AW-16549895089');
      `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="overflex-x-hidden">{children}</body>
    </html>
  );
}
