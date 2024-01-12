import About from "@/components/landing-page/About";
import Disorders from "@/components/landing-page/Disorders";
import HeroSection from "@/components/landing-page/HeroSection";
import Joy from "@/components/landing-page/Joy";
import Services from "@/components/landing-page/Services";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
	return (
		<section>
			<div className="pt-20 pb-6 space-y-4 bg-secondary">
				<HeroSection />
				<Services />
			</div>
			<About />
			<div className="bg-primary">
				<Disorders />
			</div>
			<Joy />
			<div className="bg-primary">
				<Testimonials />
			</div>
		</section>
	);
}
