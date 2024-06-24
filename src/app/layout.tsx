import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import LenisWrapper from "@/components/lenis";
const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "apictl",
	description: "Secure your api with apictl",
	metadataBase: new URL("https://aegis.tech"),
	openGraph: {
		title: "Apictl",
		description: "Secure your api with apictl",
		url: "aegis.tech",
		locale: "en-US",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "apictl logo",
			},
		],
	},
	alternates: {
		canonical: "https://aegis.tech",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-background text-foreground border-border antialiased ${inter.className}`}
			>
				{children}
			</body>
		</html>
	);
}
