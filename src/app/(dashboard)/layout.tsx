"use client";
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "@/components/toggle";
import {
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	ShoppingCart,
	Users,
	FolderOpen,
	GanttChart,
	MessageCircleDashed,
	BookOpen,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/components/dropdownMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { ThemeProvider } from "@/components/theme-provider";

export default function Dashboard({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`bg-background text-foreground border-border antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
						<div className="hidden border-r border-border bg-muted/40 md:block">
							<div className="flex h-full max-h-screen flex-col gap-2">
								<div className="flex h-14 items-center border-b border-border px-4 lg:h-[60px] lg:px-6">
									<Link
										href="/"
										className="flex items-center gap-2 font-semibold"
									>
										<Image
											src="/logo.svg"
											alt="Aegis Gateway"
											width={50}
											height={80}
											className="h-6 w-6 fill-red"
										/>
										<span className="">apictl</span>
									</Link>
								</div>
								<div className="flex-1 pt-5">
									<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
										<Link
											href="#"
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-red"
										>
											<GanttChart className="h-4 w-4" />
											Dashboard
										</Link>
										<Link
											href="#"
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-red"
										>
											<FolderOpen className="h-4 w-4" />
											Projects
										</Link>
										<Link
											href="#"
											className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-red transition-all hover:text-red"
										>
											<BookOpen className="h-4 w-4" />
											Documentation{" "}
										</Link>
										<Link
											href="#"
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-red"
										>
											<MessageCircleDashed className="h-4 w-4" />
											Feedback
										</Link>
									</nav>
								</div>
							</div>
						</div>
						<div className="flex flex-col">
							<header className="flex h-14 items-center gap-4 border-b border-border bg-muted/40 px-4 lg:h-[60px] lg:px-6">
								<Sheet>
									<SheetTrigger asChild>
										<button className="shrink-0 md:hidden">
											<Menu className="h-5 w-5" />
											<span className="sr-only">
												Toggle navigation menu
											</span>
										</button>
									</SheetTrigger>
									<SheetContent
										side="left"
										className="flex flex-col"
									>
										<nav className="grid gap-2 text-lg font-medium">
											<Link
												href="/"
												className="flex items-center gap-2 font-semibold pb-2"
											>
												<Image
													src="/logo.svg"
													alt="Aegis Gateway"
													width={50}
													height={80}
													className="h-6 w-6 fill-red"
												/>
												<span className="">apictl</span>
											</Link>
											<Link
												href="#"
												className="flex items-center text-sm gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-red"
											>
												<GanttChart className="h-4 w-4" />
												Dashboard
											</Link>
											<Link
												href="#"
												className="flex items-center text-sm gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-red"
											>
												<FolderOpen className="h-4 w-4" />
												Projects
											</Link>
											<Link
												href="#"
												className="flex items-center text-sm gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-red"
											>
												<BookOpen className="h-4 w-4" />
												Documentation{" "}
											</Link>
											<Link
												href="#"
												className="flex items-center text-sm gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-red"
											>
												<MessageCircleDashed className="h-4 w-4" />
												Feedback
											</Link>
										</nav>
										<div className="mt-auto"></div>
									</SheetContent>
								</Sheet>
								<div className="w-full flex flex-row gap-4">
									<span className=" text-md text-red">/</span>
									<p>home</p>
								</div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<button className="rounded-full">
											<CircleUser className="h-5 w-5" />
											<span className="sr-only">
												Toggle user menu
											</span>
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>
											My Account
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											Settings
										</DropdownMenuItem>
										<DropdownMenuItem>
											Support
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											Logout
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								<ModeToggle></ModeToggle>
							</header>
							<main className="flex md:flex-1 w-full h-full px-10 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
								<div className="space-y-3">{children}</div>
							</main>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
