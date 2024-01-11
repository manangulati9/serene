import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { AspectRatio } from "../ui/aspect-ratio";

export default function HeroSection() {
	return (
		<section className="container text-primary">
			<MaxWidthWrapper className="h-fit py-8 md:py-0 flex items-center text-center md:text-left justify-between">
				<div className="space-y-4">
					<h1 className="text-6xl tracking-[-2px] font-extrabold font-judson">
						A companion app that cares about your mental well-being
					</h1>
					<p>
						Computer assisted cognitive behavioral therapy programs that are
						that are accessible, free and deliver better clinical outcomes than
						a traditional talk therapy.
					</p>
				</div>
				<div className="w-[80rem] hidden md:block">
					<AspectRatio ratio={1 / 1}>
						<Image src="/hero-section.svg" fill alt="img" />
					</AspectRatio>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
