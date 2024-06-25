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

export default function Dashboard() {
	return (
		<main className="">
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
	);
}
