import {Cookie} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav";



const cook = Cookie ({
  subsets: ['latin'],
  weight: ['400'] 
});

export const metadata = {
  title: "Fundamentals of React",
  description: "Creating a React application",
  keywords: "React, Next, Javascript, Tailwind,CSS,HTML"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${cook.className} text-2xl'}>
      <Navbar/>
        {children}
      
      </body>

    </html>
  )
}
