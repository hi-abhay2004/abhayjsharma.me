// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import SplashCursor from "./components/ui-components/splashCursor/page";
// import NavBar from "./components/navBar/page";
// import Footer from "./components/Footer/page";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//       <NavBar/>
//         {/* <SplashCursor /> */}
        
//         {children}
//         {/* <Footer /> */}
      
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import ClientRoot from "./ClientRoot/page";

export const metadata = {
  title: "Abhay | Full Stack Developer",
     viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  description: "Portfolio site of Abhay, a creative full stack developer.",
   icons: {
    icon: "/profile-pic.png", // or "/favicon.png"
  },
   
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </head>
      <body className="antialiased">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
