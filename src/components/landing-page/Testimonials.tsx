"use client";

import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const TESTIMONIALS = [
	{
		name: "John Doe",
		designation: "Software Eng. - Google",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website; it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Anjana Trivedia",
		designation: "Supervisor, Strategy",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website; it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Sahil Khanna",
		designation: "Copy Writer - Fallen MVN",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website; it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Karan Singh",
		designation: "Sr. Art Director - Kraft Home",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website; it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
];

export default function Testimonials() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section className="container space-y-10 py-10 text-primary-foreground">
			<h2 className="text-5xl md:text-6xl font-judson font-bold text-center">
				What our users say
			</h2>
			<Carousel
				className="w-[40rem] mx-auto"
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
				setApi={setApi}
			>
				<CarouselContent>
					{TESTIMONIALS.map((testimonial, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="bg-muted border-none rounded-none">
									<CardContent className="rounded-md flex flex-col h-96 p-0 items-center justify-between">
										<p className="max-w-lg my-auto font-semibold">
											<span className="text-3xl">&apos;&apos;{"   "}</span>
											{testimonial.text}
											<span className="text-3xl">{"   "}&apos;&apos;</span>
										</p>
										<div className="flex gap-4 items-center px-14 p-4 bg-secondary text-secondary-foreground w-full">
											<div className="w-[80px]">
												<AspectRatio ratio={1 / 1}>
													<Image
														src={testimonial.avatar}
														alt="avatar"
														className="object-cover rounded-full"
														fill
													/>
												</AspectRatio>
											</div>
											<div className="space-y-1">
												<h3 className="text-2xl font-bold">
													{testimonial.name}
												</h3>
												<p>{testimonial.designation}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="bg-transparent" />
				<CarouselNext className="bg-transparent" />
			</Carousel>
		</section>
	);
}
