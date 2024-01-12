"use client";

import { useState, useEffect } from "react";
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

export default function Testimonials() {
	return (
		<section className="container py-10 space-y-10 text-primary-foreground">
			<h2 className="text-5xl font-bold text-center md:text-6xl font-judson">
				What our users say
			</h2>
			<Carousel
				className="mx-auto w-full md:w-[40rem]"
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
			>
				<CarouselContent>
					{TESTIMONIALS.map((testimonial, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="rounded-none border-none bg-muted">
									<CardContent className="flex flex-col justify-between items-center p-0 h-96 rounded-md">
										<p className="overflow-hidden relative py-0 px-6 my-auto max-w-lg font-semibold md:py-3 md:px-0 line-clamp-[9] md:line-clamp-none">
											&apos;&apos;{"  "}
											{testimonial.text}
											{"  "}&apos;&apos;
										</p>
										<div className="flex gap-4 items-center p-4 w-full md:px-14 bg-secondary text-secondary-foreground">
											<div className="w-[60px] md:w-[80px]">
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
				<CarouselPrevious className="hidden bg-transparent border-2 md:flex" />
				<CarouselNext className="hidden bg-transparent border-2 md:flex" />
			</Carousel>
		</section>
	);
}

const TESTIMONIALS = [
	{
		name: "John Doe",
		designation: "Software Eng. - Google",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website, it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Anjana Trivedia",
		designation: "Supervisor, Strategy",
		text: "Serene is a haven for mental well-being! The features are not only insightful but also bring a sense of calm to my daily routine. The daily challenges are a delightful way to stay motivated, and the personalized feedback feels like a compassionate friend guiding me. The reading section on Serene is a goldmine of wisdom. Massive appreciation to the team for crafting such a serene space for mental health awareness and growth!",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Sahil Khanna",
		designation: "Copy Writer - Fallen MVN",
		text: "Discovering Serene has been a breath of fresh air for my mental well-being. The mood assessments are a quick but powerful pause for self-reflection. The daily challenges are both invigorating and calming, and the quiz tests keep my mind serenely engaged. The weighted average system weaves everything together, offering a holistic view of my mental health in a tranquil manner. Highly recommended for those seeking a serene sanctuary for mental wellness!",
		avatar: "/assets/joy.jpg",
	},
	{
		name: "Karan Singh",
		designation: "Sr. Art Director - Kraft Home",
		text: "Serene has redefined my approach to mental health. The scoring system provides a clear and comprehensive snapshot, making it easy to track my progress in a peaceful manner. The interface is intuitive, and the weighted average feature gives a nuanced understanding of various factors, creating a harmonious mental health profile. The personalized feedback feels like a gentle breeze guiding me towards positive changes. It's not just a website, it's a serene sanctuary on my mental health journey.",
		avatar: "/assets/joy.jpg",
	},
];
