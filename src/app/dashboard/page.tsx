"use client";
import Link from "next/link";
import Image from "next/image";
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
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

export default function Dashboard() {
	return (
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
						<SheetContent side="left" className="flex flex-col">
							<nav className="grid gap-2 text-lg font-medium">
								<Link
									href="#"
									className="flex items-center gap-2 text-lg font-semibold"
								>
									<Package2 className="h-6 w-6" />
									<span className="sr-only">Acme Inc</span>
								</Link>
								<Link
									href="#"
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
								>
									<Home className="h-5 w-5" />
									Dashboard
								</Link>
								<Link
									href="#"
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
								>
									<ShoppingCart className="h-5 w-5" />
									Orders
									<div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
										6
									</div>
								</Link>
								<Link
									href="#"
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
								>
									<Package className="h-5 w-5" />
									Products
								</Link>
								<Link
									href="#"
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
								>
									<Users className="h-5 w-5" />
									Customers
								</Link>
								<Link
									href="#"
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
								>
									<LineChart className="h-5 w-5" />
									Analytics
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
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="flex md:flex-1 w-full h-full px-10 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="space-y-3">
						<div className="flex space-x-4 items-center">
							<h1 className="text-lg font-semibold md:text-2xl">
								Your Projects
							</h1>
						</div>
						<ul className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
							<li className="list-none">
								<a className="group relative text-left bg-card2 border border-border rounded-md p-5 flex flex-row transition ease-in-out duration-150 cursor-pointer hover:bg-surface-200 hover:border-red h-32 !px-0 group pt-5 pb-0">
									<div className="flex h-full w-full flex-col space-y-2">
										<div className="w-full justify-between space-y-1.5 px-5">
											<p className="flex-shrink truncate font-medium text-md pr-4 pb-4 ">
												gemini ke links
											</p>
										</div>
										<div className="w-full !mt-auto space-y-1.5 p-5">
											<div className="flex justify-between items-center w-full gap-x-1">
												<h5 className="text-sm mb-0">
													4 active links
												</h5>
											</div>
										</div>
									</div>
									<div className=" absolute right-4 top-4 text-foreground/50 transition-all duration-200 group-hover:right-3 group-hover:text-foreground ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="sbui-icon"
										>
											<polyline points="9 18 15 12 9 6"></polyline>
										</svg>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
