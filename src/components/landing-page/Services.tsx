import {
	ArrowRight,
	BookOpen,
	NotebookPen,
	SquarePen,
	Utensils,
} from "lucide-react";

const SERVICES = [
	{
		title: "Quiz",
		descripton: "Take a quiz and tell us about yourself",
		icon: (
			<SquarePen className="w-full h-full transition-colors stroke-primary group-hover:stroke-primary-foreground" />
		),
	},

	{
		title: "Daily Challenges",
		descripton: "Test yourself and complete daily challenges!",
		icon: (
			<NotebookPen className="w-full h-full transition-colors stroke-primary group-hover:stroke-primary-foreground" />
		),
	},
	{
		title: "Diet plan",
		descripton: "Get yourself a personalized and healthy diet plan!",
		icon: (
			<Utensils className="w-full h-full transition-colors stroke-primary group-hover:stroke-primary-foreground" />
		),
	},
	{
		title: "Get inspired",
		descripton: "Read inspiring blogs and articles!",
		icon: (
			<BookOpen className="w-full h-full transition-colors stroke-primary group-hover:stroke-primary-foreground" />
		),
	},
];

export default function Services() {
	return (
		<section className="pt-8 container space-y-4">
			<h2 className="font-judson text-5xl text-primary font-bold text-center">
				OUR SERVICES
			</h2>
			<div className="flex flex-col flex-wrap gap-2 md:flex-row w-full max-w-8xl items-center ">
				{SERVICES.map((service) => {
					return (
						<div
							key={service.title}
							className="bg-primary-foreground flex flex-col flex-1 justify-around p-4 w-[18rem] md:w-auto hover:cursor-pointer space-y-2 rounded-md border shadow-lg transition-colors drop-shadow-lg aspect-square border-muted group hover:bg-primary hover:text-primary-foreground"
						>
							<div className="w-10 h-10">{service.icon}</div>
							<div className="space-y-2">
								<p className="text-2xl font-bold uppercase transition-colors text-primary group-hover:text-primary-foreground">
									{service.title}
								</p>
								<p>{service.descripton}</p>
							</div>
							<ArrowRight className="ml-auto w-6 h-6 stroke-primary group-hover:stroke-primary-foreground" />
						</div>
					);
				})}
			</div>
		</section>
	);
}
