// !! Styles
import "@/Styles/globals.css";
import "simplebar-react/dist/simplebar.min.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-center items-center p-[24px] bg-gray-900">
        {children}
      </body>
    </html>
  );
}
