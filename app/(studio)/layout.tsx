import "@/app/styles/globals.css";
export const metadata = {
  title: "borhansaflo.com Studio",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
