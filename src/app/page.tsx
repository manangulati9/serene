import Navbar from "@/components/Navbar";
import About from "@/components/landing-page/About";
import HeroSection from "@/components/landing-page/HeroSection";
import Services from "@/components/landing-page/Services";

export default function Home() {
	return (
		<section>
			<div className="pt-20 bg-secondary space-y-4 pb-6">
				<HeroSection />
				<Services />
			</div>
			<About />
		</section>
	);
}
