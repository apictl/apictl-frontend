import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import bhushan from "../assets/bhushan.png";
import manan from "../assets/manan.png";
import yash from "../assets/yash.png";
import adith from "../assets/adith.png";

export default function Home() {
	const team = [
		{
			name: "adith",
			image: adith,
			description: "backend developer",
			link: "#",
		},
		{
			name: "manan",
			image: manan,
			description: "backend developer",
			link: "https://manangandhi.tech",
		},
		{
			name: "bhushan",
			image: bhushan,
			description: "ux designer",
			link: "https://bloodymary.framer.website/",
		},
		{
			name: "yash",
			image: yash,
			description: "ui & frontend developer",
			link: "https://yashd.tech",
		},
	];
	return (
		<main className="h-full flex flex-col items-center justify-center max-w-7xl mx-auto space-y-24">
			<section className="flex flex-col w-full max-w-7xl mx-auto items-center text-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mt-[10vh] ">
				<h1 className=" text-4xl md:text-6xl font-bold leading-relaxed">
					your api is may be exposed,{" "}
					<span className="bg-red p-2 inline-block -rotate-2 rounded-md">
						<span className="inline-block rotate-2">
							lets fix it.
						</span>
					</span>
				</h1>
				<h3 className="text-lg md:text-2xl max-w-[80%] md:max-w-[45%] text-center mt-5">
					your api keys are a network tab away from being exposed,
					give us your api and we will give you a secure url
				</h3>
				<Link
					href="/signup"
					className="text-2xl bg-red px-4 pt-2 pb-3 lg:px-6 lg: rounded-full border border-red invert hover:invert-0 transition-all mt-5"
				>
					Secure Now!
				</Link>

				<div className=" h-[30vh] md:h-[50vh] w-[95%] md:w-[98%] max-w-[1440px]  bg-background rounded-lg p-4 text-center mt-24 border border-border"></div>
			</section>
			<section className="flex w-[95%] md:w-[98%] max-w-[1440px] flex-col items-center text-center justify-around md:ml-auto gap-24  bg-red opacity-85 md:opacity-100 rounded-[3rem] mx-auto p-8 lg:p-20 md:mx-10 lg:mx-20">
				<div className="flex flex-col items-end justify-end gap-4 md:gap-2 lg:gap-4 w-full text-right">
					<h1 className="text-4xl md:text-6xl font-bold">
						why should you trust us?
					</h1>
					<h3 className=" text-lg md:text-2xl md:max-w-[45%] mt-5 opacity-90 tracking-tighter ">
						well you should trust AES256 encryption and the{" "}
						<span className="font-bold">
							138,260 secure API requests served
						</span>
					</h3>
				</div>
				<div className="flex flex-col items-start justify-start gap-4 md:gap-2 lg:gap-4 w-full text-left">
					<h1 className="text-4xl md:text-6xl font-bold">
						exposed api&apos;s are bad
					</h1>
					<h3 className=" text-lg md:text-2xl md:max-w-[45%] mt-5 opacity-90 tracking-tighter ">
						you really do not want to share your api keys with the
						world, the world is unjust, they will misuse and
						possibly charge you for it
					</h3>
				</div>
				<div className="flex flex-col items-end justify-end gap-4 md:gap-2 lg:gap-4 w-full text-right">
					<h1 className="text-4xl md:text-6xl font-bold">
						we also have analytics on your endpoints!
					</h1>
					<h3 className=" text-lg md:text-2xl md:max-w-[45%] mt-5 opacity-90 tracking-tighter ">
						we provide you with detailed analytics on your
						endpoints, powered by clickhouse db!
					</h3>
				</div>
			</section>
			<section className="flex flex-col w-full max-w-7xl mx-auto items-center text-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
				<h1 className=" text-4xl md:text-6xl font-bold leading-relaxed">
					whats up with the money?
				</h1>
				<div className="flex flex-col items-start justify-center gap-4 md:gap-2 lg:gap-4 w-fit  bg-card2 mt-14 rounded-2xl border border-red p-10">
					<h1 className="text-xl md:text-4xl">standard</h1>
					<p className="text-lg md:text-2xl opacity-85">
						free for everyone!
					</p>
					<h1 className="text-2xl md:text-5xl font-bold py-5">
						$0/year
					</h1>
					<span className="inline-flex items-center justify-center gap-2 text-red">
						{" "}
						<Check size={20} />{" "}
						<p className="text-foreground"> unlimited projects</p>
					</span>
					<span className="inline-flex items-center justify-center gap-2 text-red">
						{" "}
						<Check size={20} />{" "}
						<p className="text-foreground"> unlimited users</p>
					</span>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center gap-4 md:gap-2 lg:gap-4 pb-14 px-2 ">
				<h1 className=" text-4xl md:text-6xl font-bold leading-relaxed">
					team behind this
				</h1>
				<p className="text-lg md:text-xl text-center mt-5">
					we started this because our gemini keys were public and
					making it secure was a chore
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full text-center justify-items-center items-center pt-6 mx-auto">
					{team.map((teamMember) => (
						<Link
							href={teamMember.link}
							target="_blank"
							rel="noreferrer"
							key={teamMember.name}
							className="flex flex-col items-center justify-center gap-1 w-fit md:w-full text-center hover:bg-card2 rounded-2xl transition-all p-10"
						>
							<Image
								src={teamMember.image}
								alt={teamMember.name}
								width={150}
								height={150}
								className="rounded-full "
							/>
							<h1 className="text-xl md:text-2xl">
								{teamMember.name}
							</h1>
							<p className="text-lg md:text-xl opacity-85">
								{teamMember.description}
							</p>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
