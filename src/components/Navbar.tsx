import { Button, buttonVariants } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import { ChevronDown } from "lucide-react";

export default function Component() {
	return (
		<header className="flex items-center px-4 md:bg-transparent bg-primary w-full h-20 md:px-6 text-primary-foreground shrink-0">
			<p className="md:hidden block text-4xl font-extrabold font-judson">
				SERENE
			</p>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						className="ml-auto md:hidden bg-transparent"
						size="icon"
						variant="outline"
					>
						<Icons.menu className="w-6 h-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link href="/">
						<span>SERENE</span>
						<span className="sr-only">Serene</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							className="flex items-center py-2 w-full text-lg font-semibold"
							href="/services"
						>
							Services
						</Link>
						<Link
							className="flex items-center py-2 w-full text-lg font-semibold"
							href="/specialities"
						>
							Specialities
						</Link>
						<Link
							className="flex items-center py-2 w-full text-lg font-semibold"
							href="/how-it-works"
						>
							How it works
						</Link>
						<Link
							className="flex items-center py-2 w-full text-lg font-semibold"
							href="/about"
						>
							About
						</Link>
						<Link
							className="flex items-center py-2 w-full text-lg font-semibold"
							href="/contact"
						>
							Contact
						</Link>
					</div>
				</SheetContent>
			</Sheet>
			<div className="hidden justify-evenly items-center p-3 w-full bg-primary rounded-xl md:flex">
				<Link className="hidden mr-6 md:flex" href="/">
					<p className="text-4xl font-extrabold font-judson">SERENE</p>
					<span className="sr-only">Acme Inc</span>
				</Link>
				<nav className="hidden gap-6 md:flex">
					<div className="flex gap-0.5 group">
						<Link
							className="text-sm font-medium hover:underline"
							href="/services"
						>
							Services
						</Link>
						<ChevronDown className="mt-0.5 w-4 h-4 transition group-hover:rotate-180" />
					</div>
					<div className="flex gap-0.5 group">
						<Link
							className="text-sm font-medium hover:underline"
							href="/specialities"
						>
							Specialities
						</Link>
						<ChevronDown className="mt-0.5 w-4 h-4 transition group-hover:rotate-180" />
					</div>
					<div className="flex gap-0.5 group">
						<Link
							className="text-sm font-medium hover:underline"
							href="/how-it-works"
						>
							How it works
						</Link>
						<ChevronDown className="mt-0.5 w-4 h-4 transition group-hover:rotate-180" />
					</div>
					<div className="flex gap-0.5 group">
						<Link className="text-sm font-medium hover:underline" href="/about">
							About
						</Link>
						<ChevronDown className="mt-0.5 w-4 h-4 transition group-hover:rotate-180" />
					</div>
					<div className="flex gap-0.5 group">
						<Link
							className="text-sm font-medium hover:underline"
							href="/contact"
						>
							Contact
						</Link>
						<ChevronDown className="mt-0.5 w-4 h-4 transition group-hover:rotate-180" />
					</div>
				</nav>
				<div className="hidden gap-2 items-center md:flex">
					<Link
						className={buttonVariants({ variant: "ghost" })}
						href="/sign-in"
					>
						Login
					</Link>
					<Link
						className={buttonVariants({ variant: "secondary" })}
						href="/dashboard"
					>
						Dashboard
					</Link>
				</div>
			</div>
		</header>
	);
}