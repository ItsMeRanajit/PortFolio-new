import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" sizes="96x96" href="/favicon.svg" />
        <title>Ranajit Das | Developer Portfolio</title>
      </head>
      <body className="">{children}</body>
    </html>
  );
}
