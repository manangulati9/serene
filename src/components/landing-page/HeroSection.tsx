import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function HeroSection() {
	return (
		<section className="container gap-20 flex py-4 justify-between items-center text-primary">
				<div className="space-y-4">
					<h1 className="md:text-7xl text-6xl tracking-[-2px] font-extrabold font-judson">
						A companion app that cares about your mental well-being
					</h1>
					<p>
						Computer assisted cognitive behavioral therapy programs that are
						that are accessible, free and deliver better clinical outcomes than
						a traditional talk therapy.
					</p>
				</div>
				<div className="w-[55rem] hidden md:block">
					<AspectRatio ratio={1 / 1}>
						<Image src="/assets/hero-section.svg" className="object-cover" fill alt="img" />
					</AspectRatio>
				</div>
		</section>
	);
}
