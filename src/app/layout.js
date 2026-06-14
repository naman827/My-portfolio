import "./globals.css";
import Navbar from '../components/navbar'
import Main from '../components/main'

export const metadata = {
  title: "Naman | Full Stack Developer",
  description: "Portfolio of Naman — Full Stack Developer, React Enthusiast, and UI/UX Lover.",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    </head>
    <body suppressHydrationWarning>
      <Navbar/>
      <Main/>
      {children}
    </body>
   </html>
  );
}
