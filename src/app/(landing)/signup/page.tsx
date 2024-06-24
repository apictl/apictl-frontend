import MyForm from "./form";
import { FadeText } from "@/components/boxReveal";

export default function Login() {
	const techFacts = [
		"The first computer virus, called 'Creeper,' was created in 1971 as an experimental self-replicating program.",
		"The most secure passwords are at least 12 characters long and include a mix of letters, numbers, and symbols.",
		"The fastest internet speed ever recorded was 319 terabits per second by Japanese researchers in 2021.",
		"The average cost of a data breach in 2021 was $4.24 million, according to IBM.",
		"By 2025, it's estimated that there will be over 75 billion Internet of Things (IoT) devices worldwide.",
		"The first website, created by Tim Berners-Lee in 1991, is still online at http://info.cern.ch.",
		"The first email was sent by Ray Tomlinson to himself in 1971, containing the text 'QWERTYUIOP.'",
		"APIs (Application Programming Interfaces) are used by 83% of web traffic today.",
		"The world's first computer programmer was Ada Lovelace, who wrote an algorithm for Charles Babbage's early mechanical general-purpose computer in the 1840s.",
		"The concept of 'debugging' a computer was popularized by Admiral Grace Hopper in the 1940s when she removed an actual moth from a computer.",
		"More than 90% of the world's currency exists only on computers. Only about 8% of global currency is physical money.",
		"The original name of Windows was Interface Manager.",
		"The first 1GB hard drive, announced by IBM in 1980, weighed over 500 pounds and cost $40,000.",
		"Bluetooth technology is named after a 10th-century king, Harald 'Bluetooth' Gormsson, who united Denmark and Norway.",
		"Approximately 90% of the world's data has been created in the last two years alone.",
		"In 2020, there were 6.4 billion fake emails sent daily worldwide.",
		"The word 'robot' comes from the Czech word 'robota,' which means 'forced labor.'",
		"The first mobile phone call was made by Martin Cooper in 1973 on a Motorola DynaTAC.",
		"There are over 700 different programming languages in use today.",
		"The first video uploaded to YouTube was titled 'Me at the zoo,' and was uploaded by co-founder Jawed Karim on April 23, 2005.",
		"The first mobile phone was invented in 1876 by Alexander Graham Bell.",
		"The first computer mouse was invented in 1961 by Len Shiffrin.",
	];
	const getRandomFact = () =>
		techFacts[Math.floor(Math.random() * techFacts.length)];

	return (
		<div className="min-h-screen grid md:grid-cols-2 mx-auto max-w-[1440px] ">
			<div className="w-full h-full md:bg-card3 pb-5 ">
				<div className="w-full h-full max-w-lg flex flex-col items-start mx-auto px-8 md:mt-14 justify-center text-left gap-4 md:ml-auto md:gap-2 lg:gap-4">
					<h1 className=" text-4xl md:text-6xl font-bold leading-relaxed inline-block text-left">
						get started
					</h1>
					<h3 className="text-lg md:text-2xl md:mt-5 mb-5 inline-block text-left">
						lets create a new account
					</h3>
					<MyForm />
				</div>
			</div>
			
			<div className="w-fit hidden md:flex flex-col items-end text-right justify-center gap-8 md:ml-auto   mt-0 px-10">
				<h1 className=" text-4xl md:text-6xl font-bold leading-relaxed">
					cool to know that
				</h1>
				<FadeText
					className="text-md max-w-[10ch] text-red invert dark:opacity-80"
					direction="down"
					framerProps={{
						show: { transition: { delay: 0.2 } },
					}}
					text={getRandomFact()}
				></FadeText>
			</div>
		</div>
	);
}
