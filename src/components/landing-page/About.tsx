import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button, buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function About() {
	return (
		<section className="container py-20 px-10 gap-8 flex md:flex-row flex-col justify-around">
			<div className="md:w-[450px] w-[300px] self-center md:self-start">
				<AspectRatio ratio={3 / 4}>
					<Image
						src="/assets/about-section.jpg"
						alt="img"
						fill
						className="object-cover"
					/>
				</AspectRatio>
			</div>
			<div className="space-y-8 flex-1 max-w-xl">
				<h2 className="text-primary text-5xl font-judson font-bold">
					WHAT WE DO
				</h2>
				<p>
					Our platform is a user-friendly platform designed for proactive mental
					health monitoring and self-care. It allows individuals to set and
					track daily tasks while engaging in insightful quizzes for a better
					understanding of their emotional well-being. The platform also
					provides a supportive community for users to connect, share
					experiences, and find inspiration on their mental health journey. This
					platform is not just a monitoring tool; it's a companion that
					prioritizes your well-being.
				</p>
				<p>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
					enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
					exercitation amet. Nisi anim cupidatat excepteur officia.
					Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
					voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
					officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
					commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
					Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
					officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
					sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
					consectetur et est culpa et culpa duis.
				</p>
				<Link
					href="/about"
					className={buttonVariants({
						variant: "default",
						className: "space-x-1",
					})}
				>
					<span>Learn more</span>
					<ChevronRight className="h-4 w-4" />
				</Link>
			</div>
		</section>
	);
}
