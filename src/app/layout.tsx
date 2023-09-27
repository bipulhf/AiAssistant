import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import favicon from "../../public/images/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Green Roof AI Assistant",
    description: "Green Roof AI Assistant",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <Head>
                    <link
                        rel="shortcut icon"
                        href={favicon.src}
                        type="image/x-icon"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
