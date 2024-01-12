import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";

const DISORDERS = [
	{
		title: "Personality Disorders",
		description: "Personality disorders are a group of mental illnesses.",
		img: "/assets/personality_disorders.jpg",
		link: "#",
	},
	{
		title: "Depression",
		description: "Depression is a common and serious mental illness.",
		img: "/assets/depression.png",
		link: "#",
	},
	{
		title: "Anxiety",
		description: "Anxiety is a feeling of fear, dread, and uneasiness.",
		img: "/assets/anxiety.jpg",
		link: "#",
	},
	{
		title: "Mood swings",
		description: "Mood swings causes sudden behavioral change and irritation.",
		img: "/assets/mood_swings.png",
		link: "#",
	},
];

export default function Disorders() {
	return (
		<section className="container py-10 space-y-12">
			<h2 className="text-5xl md:text-6xl font-bold tracking-tight text-center font-judson text-primary-foreground">
				We&apos;re here to help
			</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{DISORDERS.map((disorder) => (
					<div
						key={disorder.title}
						className="flex gap-6 items-center p-4 rounded-md bg-primary-foreground"
					>
						<div className="hidden md:block w-[200px]">
							<AspectRatio ratio={1 / 1}>
								<Image
									src={disorder.img}
									fill
									className="object-cover"
									alt="img"
								/>
							</AspectRatio>
						</div>
						<div className="flex flex-col gap-4 justify-between items-start h-full">
							<div className="space-y-3">
								<h3 className="text-2xl font-bold md:text-3xl text-primary">
									{disorder.title}
								</h3>
								<p>{disorder.description}</p>
							</div>
							<Link
								href={disorder.link}
								className="flex items-center hover:underline text-primary"
							>
								<span className="font-semibold text-md">Learn more</span>
								<ChevronRight className="pt-0.5 w-4 h-4 stroke-primary" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
