import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://fidelis-tuwei.vercel.app/"),

    title: "Fidelis Tuwei",
    authors: {
      name: "Fidelis Tuwei",
    },

    description:
      "Based in Nairobi, I'm a Fullstack developer passionate about building modern web applications that users love.",
    openGraph: {
      title: "Fidelis Tuwei",
      description:
        "Based in Nairobi, I'm a Fullstack developer passionate about building modern web applications that users love.",
      url: "https://fidelis-tuwei.vercel.app/",
      siteName: "Fidelis Tuwei",
      images: "/og.png",
      type: "website",
    },
    keywords: ["engineer", "fullstack", "software"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={spaceGrotesk.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
