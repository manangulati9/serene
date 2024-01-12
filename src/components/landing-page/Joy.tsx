import { BadgeCheck } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const INSTRUCTIONS = [
	{
		title: "Daily tasks",
	},
	{
		title: "Morning walks",
	},
	{
		title: "Time managment",
	},
	{
		title: "Drinking water",
	},
	{
		title: "Healthy diet",
	},
	{
		title: "Family time",
	},
	{
		title: "Sound sleep",
	},
	{
		title: "Exercise/Gym",
	},
];

export default function Joy() {
	return (
		<section className="container py-10 space-y-16 md:px-20">
			<div className="mx-auto space-y-5 max-w-3xl">
				<h2 className="text-5xl font-extrabold tracking-tight text-center md:text-6xl font-judson text-primary">
					Feel the joy of life after using Serene
				</h2>
				<p>
					Serene empowers users, fostering a sense of control and
					self-awareness. The user-friendly platform, insightful quizzes, and
					supportive community create a positive and encouraging mental health
					experience.
				</p>
			</div>
			<div className="flex flex-col gap-10 justify-between items-center mx-auto max-w-6xl md:flex-row">
				<div className="order-1 md:order-2 w-[250px] md:w-[350px]">
					<AspectRatio ratio={1 / 1}>
						<Image
							src="/assets/joy.jpg"
							fill
							alt="img"
							className="object-cover object-center"
						/>
					</AspectRatio>
				</div>
				<div className="order-2 space-y-12 max-w-2xl md:order-1">
					<div className="space-y-3">
						<h3 className="text-3xl font-semibold text-center text-primary md:text-start">
							Primary Instructions
						</h3>
						<p>
							Welcome to Serene! Take control by setting daily tasks, explore
							insightful quizzes for self-discovery, and connect with a
							supportive community. Empower your mental health journey
							effortlessly. Start now for a positive and personalized
							experience!
						</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						{INSTRUCTIONS.map((ele) => (
							<div
								key={ele.title}
								className="flex gap-2 items-center font-semibold text-primary"
							>
								<BadgeCheck className="w-6 h-6 stroke-primary-foreground fill-primary" />
								<p>{ele.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
