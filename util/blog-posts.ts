import blogData from "@/util/blog.json";

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	category: string;
	author: string;
	date: string;
	image: string;
	readingTime: string;
	intro: string;
	sections: { heading: string; paragraphs: string[] }[];
}

const featuredPosts: BlogPost[] = [
	{
		id: "9",
		title: "10 Proven SEO Strategies to Boost Your Website Traffic in 2026",
		excerpt:
			"Practical ways to improve your search visibility and bring the right visitors to your website.",
		category: "Marketing",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-3/img-1.png",
		readingTime: "8 mins to read",
		intro:
			"Search visibility helps people find useful information, products, and services. A thoughtful SEO plan combines clear content, a technically sound website, and a consistent understanding of what your audience is looking for.",
		sections: [
			{
				heading: "Build useful, focused content",
				paragraphs: [
					"Start with the questions your audience asks and create clear pages that answer them. Organize related information around meaningful topics, use descriptive headings, and keep each page focused on a real need.",
					"Review existing pages regularly. Refresh outdated details, improve internal links, and make sure titles and descriptions accurately represent the content.",
				],
			},
			{
				heading: "Make the website easy to use",
				paragraphs: [
					"Fast loading, mobile-friendly layouts, accessible navigation, and descriptive links help both visitors and search engines understand a site. Check these fundamentals as part of routine site maintenance.",
					"Track relevant performance measures over time and use what you learn to prioritize useful improvements rather than chasing short-term tricks.",
				],
			},
		],
	},
	{
		id: "10",
		title: "The Power of Branding: How to Create a Memorable Brand Identity",
		excerpt:
			"Create a recognizable brand through a clear story, consistent design, and meaningful customer experiences.",
		category: "Business",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-3/img-2.png",
		readingTime: "7 mins to read",
		intro:
			"A memorable brand is more than a logo. It is the shared impression created by a business's values, voice, visual identity, and every interaction customers have with it.",
		sections: [
			{
				heading: "Define what makes your brand distinct",
				paragraphs: [
					"Begin by clarifying who you serve, what you offer, and why it matters. A concise brand promise gives teams a useful foundation for decisions about messaging, design, and customer experience.",
					"Use audience research and feedback to make sure your brand reflects the people you want to reach, not only internal assumptions.",
				],
			},
			{
				heading: "Be consistent across touchpoints",
				paragraphs: [
					"Document your visual elements, tone of voice, and key messages so that teams can apply them consistently. Consistency makes a brand easier to recognize while leaving room for communication to fit each channel.",
					"Review the experience as a whole, from the first introduction to ongoing support, and look for opportunities to make each interaction feel coherent.",
				],
			},
		],
	},
	{
		id: "11",
		title: "Why Consistent Brand Identity is Key to Business Success",
		excerpt:
			"Consistency helps customers recognize your business and builds trust across every interaction.",
		category: "Business",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-3/img-3.png",
		readingTime: "6 mins to read",
		intro:
			"Customers encounter brands across websites, social channels, proposals, and real-world conversations. A consistent identity helps those experiences feel connected and makes it easier to understand what a business stands for.",
		sections: [
			{
				heading: "Create a shared foundation",
				paragraphs: [
					"Set clear guidelines for your logo, colors, typography, writing style, and core messages. These guidelines give everyone a practical reference and reduce unnecessary variation between materials.",
					"Make the standards easy to access and include examples that show how to apply them in common situations.",
				],
			},
			{
				heading: "Keep the experience authentic",
				paragraphs: [
					"Consistency should reinforce genuine values, not make communication feel rigid. Adapt the format to each audience while keeping the underlying promise and personality recognizable.",
					"Gather feedback and review customer touchpoints periodically so the identity can evolve without losing its core.",
				],
			},
		],
	},
	{
		id: "12",
		title: "Top Trends in Digital Marketing and How They Impact Your Business",
		excerpt:
			"Explore how changing technology and customer expectations are shaping digital marketing.",
		category: "Marketing",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-3/img-4.png",
		readingTime: "15 mins to read",
		intro:
			"The digital marketing landscape continues to evolve as technology advances and customer expectations change. Understanding the trends that are relevant to your audience can help your business make informed choices and build stronger relationships.",
		sections: [
			{
				heading: "Use data thoughtfully",
				paragraphs: [
					"Analytics can help teams understand what content is useful and where customers encounter friction. Choose measures tied to clear goals, respect user privacy, and use insights to improve the experience.",
					"Automation can support repetitive tasks, but clear human oversight helps keep messaging accurate, useful, and aligned with your brand.",
				],
			},
			{
				heading: "Focus on the customer experience",
				paragraphs: [
					"Make content easy to navigate, answer questions directly, and ensure the experience works well on mobile devices. Helpful, relevant communication is more durable than tactics that interrupt or overwhelm an audience.",
					"Review performance over time and adapt your approach as customer needs and channel behavior change.",
				],
			},
		],
	},
	{
		id: "13",
		title: "The Future of SaaS: Emerging Trends to Watch",
		excerpt:
			"Explore the trends influencing how SaaS products are built, delivered, and experienced.",
		category: "Business",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-5/img-1.png",
		readingTime: "7 mins to read",
		intro:
			"The SaaS industry continues to evolve as businesses expect software to be more adaptable, connected, and reliable. These emerging trends are shaping how providers deliver value and how organizations choose the tools they use.",
		sections: [
			{
				heading: "AI-powered, more personalized software",
				paragraphs: [
					"AI features are becoming part of everyday SaaS workflows, helping teams summarize information, automate repetitive tasks, and surface useful insights. The most effective products make these capabilities practical and transparent, with people remaining in control of important decisions.",
					"Personalization is also moving beyond simple settings. Products can adapt dashboards and recommendations to a user's role and needs while keeping data use clear and respectful.",
				],
			},
			{
				heading: "Connected tools and flexible platforms",
				paragraphs: [
					"Organizations rely on many cloud services, so integrations and dependable data exchange are increasingly important. SaaS providers are investing in open APIs and smoother workflows that reduce manual handoffs between tools.",
					"Modular plans and configurable features let businesses adopt what they need and expand over time without replacing their entire software stack.",
				],
			},
			{
				heading: "Security, trust, and sustainable growth",
				paragraphs: [
					"As more critical work moves to cloud platforms, customers expect strong security, privacy, and service reliability. Clear controls and communication help providers build trust as their products scale.",
					"Together, these trends point toward SaaS products that are more useful and connected, while remaining secure, adaptable, and focused on customer needs.",
				],
			},
		],
	},
	{
		id: "14",
		title: "Choosing the Right SaaS Solution for Your Business",
		excerpt:
			"A practical guide to evaluating SaaS products for your team's needs, budget, and future growth.",
		category: "Technology",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-6/img-2.png",
		readingTime: "6 mins to read",
		intro:
			"Choosing a SaaS solution can be challenging with so many options available. Start with the needs of your business, then compare how each product fits your workflows, budget, security requirements, and plans for growth.",
		sections: [
			{
				heading: "Start with your team's needs",
				paragraphs: [
					"Identify the problem the software should solve and the people who will use it. List the essential workflows and features before comparing vendors, so that attractive extras do not distract from your actual requirements.",
					"Consider how the tool will fit with your current processes and whether employees can adopt it without unnecessary complexity.",
				],
			},
			{
				heading: "Evaluate security and integrations",
				paragraphs: [
					"Review the provider's security practices, access controls, data handling, and backup policies. Make sure the service meets your organization's privacy and compliance needs.",
					"Check that the product integrates with the tools your team already relies on. Reliable integrations can reduce duplicate work and make information easier to manage.",
				],
			},
			{
				heading: "Compare total cost and room to grow",
				paragraphs: [
					"Compare subscription tiers, user limits, onboarding, support, and any usage-based fees to understand the full cost over time. A low entry price may not represent the cost once your team expands.",
					"Look for a provider with clear service terms and a product that can scale with your needs. A focused trial with real users can help confirm the fit before making a longer commitment.",
				],
			},
		],
	},
	{
		id: "15",
		title: "The Importance of Data Security in Your SaaS Projects",
		excerpt:
			"Learn how to protect business data in SaaS applications with practical security controls and clear vendor expectations.",
		category: "Security",
		author: "Evara Rose",
		date: "17 May 2026",
		image: "/assets/imgs/blog-6/img-5.png",
		readingTime: "6 mins to read",
		intro:
			"Data security is essential for businesses that rely on SaaS applications. A strong approach combines careful vendor evaluation with sensible access controls and ongoing attention to how information is stored and shared.",
		sections: [
			{
				heading: "Understand where your data lives",
				paragraphs: [
					"Before adopting a service, understand what information it collects, where it is stored, and how it is protected. Review the provider's security documentation, data retention practices, and incident response process.",
					"Make sure the service's privacy and compliance commitments align with your organization's obligations and the sensitivity of the data you plan to use.",
				],
			},
			{
				heading: "Control access to business information",
				paragraphs: [
					"Use individual accounts, multi-factor authentication, and role-based permissions to limit access to the people who need it. Review permissions regularly and remove access promptly when roles change.",
					"Keep administrators informed about sign-in activity and available security settings so suspicious access can be investigated quickly.",
				],
			},
			{
				heading: "Prepare for incidents and recovery",
				paragraphs: [
					"Confirm how the provider handles backups, service interruptions, and security incidents. Document who to contact and how your team should respond if an account or service is compromised.",
					"Revisit your SaaS inventory and security practices as your business changes. Regular reviews help keep protections aligned with new tools, users, and requirements.",
				],
			},
		],
	},
];

const archivePosts: BlogPost[] = blogData.map((post, index) => {
	const summary = `Explore ${post.title.toLowerCase()} and the ideas behind it. This article offers a starting point for understanding the topic and considering how it relates to your interests.`;

	return {
		id: String(post.id),
		title: post.title,
		excerpt: summary,
		category: post.category,
		author: post.author,
		date: post.date,
		image: `/assets/imgs/blog-6/img-${(index % 7) + 1}.png`,
		readingTime: "5 mins to read",
		intro: summary,
		sections: [
			{
				heading: `Understanding ${post.category.toLowerCase()}`,
				paragraphs: [
					`${post.title} introduces a subject with many ways to explore it. Start by identifying the questions that matter to you, then look for reliable information that adds context and perspective.`,
					"Taking time to compare ideas and revisit new information can help build a clearer picture of the topic and its wider context.",
				],
			},
			{
				heading: "A perspective to keep exploring",
				paragraphs: [
					"New discoveries and changing perspectives continue to shape how people understand this subject. Staying curious and open to evidence makes it easier to follow those developments.",
					"Use this overview as a starting point for further reading and discussion.",
				],
			},
		],
	};
});

export const blogPosts: BlogPost[] = [...featuredPosts, ...archivePosts];
