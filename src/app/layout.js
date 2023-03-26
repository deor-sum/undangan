import "./globals.css";

export const metadata = {
  title: "UNDANGAN ",
  description: "Undangan Mepandes dan Tiga Bulanan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
