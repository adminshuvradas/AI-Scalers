export interface Service {
	slug: string;
	title: string;
	description: string;
	icon: string;
	details: string;
	highlights: string[];
}

export const services: Service[] = [
	{
		slug: "business-analytics",
		title: "Business Analytics",
		description:
			"Turn business data into clear insights that support smarter decisions and measurable growth.",
		icon: "/assets/imgs/service-2/icon-1.svg",
		details:
			"We bring your business data together and surface the trends that matter. Use clear reporting and practical insights to identify opportunities, track performance, and make confident decisions.",
		highlights: [
			"Clear performance reporting",
			"Actionable trend analysis",
			"Data-led planning",
		],
	},
	{
		slug: "investment",
		title: "Investment",
		description:
			"Build a thoughtful investment strategy around your goals, opportunities, and appetite for risk.",
		icon: "/assets/imgs/service-2/icon-2.svg",
		details:
			"Assess opportunities with a structured approach to planning, evaluation, and ongoing performance. We help you align investment decisions with your long-term business objectives.",
		highlights: [
			"Opportunity assessment",
			"Investment planning",
			"Performance monitoring",
		],
	},
	{
		slug: "tax-advisory",
		title: "Tax Advisory",
		description:
			"Plan ahead with tax guidance designed to support compliance and your financial objectives.",
		icon: "/assets/imgs/service-2/icon-3.svg",
		details:
			"Navigate tax obligations with clear planning and practical advice. We help you understand your options, prepare for upcoming requirements, and make informed financial decisions.",
		highlights: [
			"Tax planning",
			"Compliance guidance",
			"Financial decision support",
		],
	},
	{
		slug: "automated-reports",
		title: "Automated Reports",
		description:
			"Save time and improve visibility with reports that keep essential business metrics close at hand.",
		icon: "/assets/imgs/service-2/icon-4.svg",
		details:
			"Replace repetitive manual reporting with automated updates tailored to your business. Bring key metrics into one view and give your team reliable information when they need it.",
		highlights: [
			"Automated data updates",
			"Custom business metrics",
			"Consistent reporting",
		],
	},
	{
		slug: "funnel-optimization",
		title: "Funnel Optimization",
		description:
			"Understand each step of the customer journey and find ways to improve conversion.",
		icon: "/assets/imgs/service-2/icon-5.svg",
		details:
			"Review the customer journey from first interaction to conversion. Identify friction, test improvements, and build a more effective funnel based on measurable results.",
		highlights: [
			"Customer journey review",
			"Conversion improvement",
			"Measurable experiments",
		],
	},
	{
		slug: "integrations",
		title: "Integrations",
		description:
			"Connect the tools your team relies on and create a smoother flow of business information.",
		icon: "/assets/imgs/service-2/icon-6.svg",
		details:
			"Connect your existing systems so data and workflows move more smoothly between them. We help reduce manual handoffs and keep your team's tools working together.",
		highlights: [
			"Connected business systems",
			"Streamlined workflows",
			"Reduced manual handoffs",
		],
	},
];
