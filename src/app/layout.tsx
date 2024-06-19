import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aegis Gateway",
	description: "Secure your APIs with Aegis Gateway",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-background text-foreground antialiased max-w-[100vw] ${inter.className}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-border  bg-background backdrop-blur-lg">
						<div className="max-w-7xl mx-auto px-4 ">
							<div className="relative flex h-24 items-center justify-arou">
								<a className="text-lg md:text-2xl font-normal w-full inline-flex items-center gap-4">
									<Image
										src="/logo.svg"
										alt="Aegis Gateway"
										width={50}
										height={80}
										className="size-[40px] md:size-[80px] fill-red"
									/>
									Aegis Gateway
								</a>
								<div className="hidden md:flex w-full items-center text-center gap-4  md:gap-2 lg:gap-4 justify-end">
									<Link
										href="/documentation"
										className="text-md md:text-xl"
									>
										Documentation
									</Link>
									<Link
										href="/pricing"
										className="text-md md:text-xl"
									>
										Pricing
									</Link>
									<Link
										href="/login"
										className="text-md md:text-xl"
									>
										Login
									</Link>
									<Link
										href="/signup"
										className="text-md md:text-xl bg-red p-2 rounded-full"
									>
										Secure Now!
									</Link>
								</div>
								<Sheet>
									<SheetTrigger asChild>
										<button className="shrink-0 md:hidden">
											<Menu className="h-5 w-5" />
										</button>
									</SheetTrigger>
									<SheetContent side="left">
										<nav className="grid gap-6 text-lg font-medium">
											<Link
												href="#"
												className="flex items-center gap-2 text-lg font-semibold pb-2"
											>
												<p className="text-lg md:text-2xl font-normal w-full inline-flex items-center gap-4">
													<Image
														src="/logo.svg"
														alt="Aegis Gateway"
														width={50}
														height={80}
														className="size-[40px] md:size-[80px] fill-red"
													/>
													Aegis Gateway
												</p>
											</Link>
											<Link
												href="#"
												className="hover:text-foreground pl-2"
											>
												Dashboard
											</Link>
											<Link
												href="#"
												className="text-muted-foreground hover:text-foreground pl-2"
											>
												pricing
											</Link>
											<Link
												href="#"
												className="text-muted-foreground hover:text-foreground pl-2"
											>
												login
											</Link>
											<Link
												href="/signup"
												className="text-md md:text-xl bg-red p-2 rounded-full w-fit"
											>
												Secure Now!
											</Link>
										</nav>
									</SheetContent>
								</Sheet>
							</div>
						</div>
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
