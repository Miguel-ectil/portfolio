import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "next/font/local";
import { Analytics } from "../components/analytics";

export const metadata: Metadata = {
  title: {
	default: "Miguel.com",
	template: "%s | miguel.com",
  }
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
	<html lang="en" className={[inter.variable, 
      calSans.variable].join(" ")}
	>
	  <head>
		<Analytics />
	  </head>
	  <body
		className={`bg-black ${
			process.env.NODE_ENV === "development" ? "debug-screens" : undefined
		}`}
	  >
		{children}
	  </body>
	</html>
  );
}

