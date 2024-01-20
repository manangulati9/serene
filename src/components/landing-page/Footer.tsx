import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col md:flex-row justify-between px-10 py-8  items-center bg-secondary text-secondary-foreground static bottom-0 w-full">
			<div className="space-y-4">
				<div className="space-y-3 max-w-md">
					<h2 className="text-5xl md:text-6xl font-judson font-extrabold tracking-tight">
						SERENE
					</h2>
					<p>
						Springs Behavioral Health provides high quality mental health
						services using an evidence.
					</p>
				</div>
				<div className="flex gap-4 w-fit items-center">
					<Link href="#">
						<div className="bg-primary border-2 border-primary rounded-full p-2 transition-all border-black group hover:bg-secondary">
							<Instagram className="h-6 w-6 stroke-primary-foreground group-hover:stroke-secondary-foreground" />
						</div>
					</Link>
					<Link href="#">
						<div className="bg-primary border-2 border-primary rounded-full p-2 transition-all border-black group hover:bg-secondary">
							<Twitter className="h-6 w-6 stroke-primary-foreground group-hover:stroke-secondary-foreground" />
						</div>
					</Link>
					<Link href="#">
						<div className="bg-primary border-2 border-primary rounded-full p-2 transition-all border-black group hover:bg-secondary">
							<Linkedin className="h-6 w-6 stroke-primary-foreground group-hover:stroke-secondary-foreground" />
						</div>
					</Link>
				</div>
				<div>&copy;{currentYear}, Serene. All rights reserved.</div>
			</div>
			{Object.entries(FOOTER_LINKS).map(([key, value]) => (
				<div key={key} className="space-y-2 hidden md:block">
					<h3 className="text-primary font-bold text-3xl">{key}</h3>
					<div className="space-y-2 flex flex-col">
						{value.map((val) => (
							<Link key={val.label} href={val.link} className="hover:underline">
								{val.label}
							</Link>
						))}
					</div>
				</div>
			))}
		</footer>
	);
}

const FOOTER_LINKS = {
	Product: [
		{
			label: "Overview",
			link: "#",
		},
		{
			label: "Features",
			link: "#",
		},
		{
			label: "Tutorials",
			link: "#",
		},
		{
			label: "Pricing",
			link: "#",
		},
		{
			label: "Releases",
			link: "#",
		},
	],
	Company: [
		{
			label: "About",
			link: "/about",
		},
		{
			label: "Press",
			link: "#",
		},
		{
			label: "Careers",
			link: "#",
		},
		{
			label: "Contact",
			link: "/contact",
		},
		{
			label: "Partners",
			link: "#",
		},
	],
	Support: [
		{
			label: "Help center",
			link: "#",
		},
		{
			label: "Terms of Service",
			link: "#",
		},
		{
			label: "Legal",
			link: "#",
		},
		{
			label: "Privacy Policy",
			link: "#",
		},
		{
			label: "Status",
			link: "#",
		},
	],
	Legal: [
		{
			label: "Cookies",
			link: "#",
		},
		{
			label: "Privacy",
			link: "#",
		},
		{
			label: "T&C",
			link: "#",
		},
		{
			label: "Security",
			link: "#",
		},
		{
			label: "Status",
			link: "#",
		},
	],
};
