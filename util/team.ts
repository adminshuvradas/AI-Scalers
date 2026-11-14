export interface TeamMember {
	slug: string;
	name: string;
	role: string;
	image: string;
	modernImage: string;
	quote: string;
	bio: string;
	skills: string[];
}

export const teamMembers: TeamMember[] = [
	{
		slug: "michael-anderson",
		name: "Michael Anderson",
		role: "Co-Founder",
		image: "/assets/imgs/team-1/avatar-1.png",
		modernImage: "/assets/imgs/team-2/avatar-1.png",
		quote:
			"Great work starts with listening, working together, and staying focused on meaningful outcomes.",
		bio: "Michael works with the team to shape ideas into thoughtful solutions and lasting client partnerships.",
		skills: ["Team Leadership", "Business Strategy", "Client Partnerships"],
	},
	{
		slug: "daniel-martinez",
		name: "Daniel Martinez",
		role: "Software Engineer",
		image: "/assets/imgs/team-1/avatar-2.png",
		modernImage: "/assets/imgs/team-2/avatar-2.png",
		quote:
			"Strong technology makes complex work simpler and helps teams move forward with confidence.",
		bio: "Daniel builds and supports software solutions, bringing a practical engineering perspective to the team.",
		skills: ["Software Engineering", "Technical Planning", "Problem Solving"],
	},
	{
		slug: "sarah-brown",
		name: "Sarah Brown",
		role: "Product Manager",
		image: "/assets/imgs/team-1/avatar-3.png",
		modernImage: "/assets/imgs/team-2/avatar-3.png",
		quote:
			"The best products are built by understanding people and bringing teams together around clear goals.",
		bio: "Sarah coordinates product work across teams, keeping customer needs and project goals in focus.",
		skills: ["Product Planning", "Team Coordination", "Customer Research"],
	},
	{
		slug: "david-clark",
		name: "David Clark",
		role: "UX/UI Designer",
		image: "/assets/imgs/team-1/avatar-4.png",
		modernImage: "/assets/imgs/team-2/avatar-4.png",
		quote:
			"Thoughtful design turns everyday interactions into experiences people enjoy using.",
		bio: "David designs clear, accessible interfaces that help people complete their work with ease.",
		skills: ["UX Research", "Interface Design", "Prototyping"],
	},
	{
		slug: "jessica-carter",
		name: "Jessica Carter",
		role: "DevOps Engineer",
		image: "/assets/imgs/team-1/avatar-5.png",
		modernImage: "/assets/imgs/team-2/avatar-5.png",
		quote:
			"Reliable systems give teams the confidence to build, release, and improve continuously.",
		bio: "Jessica helps maintain dependable delivery processes and supports the systems behind the team's work.",
		skills: ["Cloud Operations", "Release Automation", "System Reliability"],
	},
	{
		slug: "lauren-graham",
		name: "Lauren Graham",
		role: "Data Analyst",
		image: "/assets/imgs/team-1/avatar-6.png",
		modernImage: "/assets/imgs/team-2/avatar-6.png",
		quote:
			"Good analysis makes information useful and helps people make better decisions.",
		bio: "Lauren helps teams understand their data and turn findings into clear, practical next steps.",
		skills: ["Data Analysis", "Reporting", "Business Insights"],
	},
	{
		slug: "james-bennett",
		name: "James Bennett",
		role: "Sales Executive",
		image: "/assets/imgs/team-1/avatar-7.png",
		modernImage: "/assets/imgs/team-1/avatar-7.png",
		quote:
			"Every strong partnership begins with understanding what matters most to the client.",
		bio: "James works with clients to understand their goals and connect them with the right solutions.",
		skills: ["Client Relations", "Sales Planning", "Communication"],
	},
	{
		slug: "william-foster",
		name: "William Foster",
		role: "Marketing Specialist",
		image: "/assets/imgs/team-1/avatar-8.png",
		modernImage: "/assets/imgs/team-1/avatar-8.png",
		quote:
			"Clear stories help people discover the ideas, services, and teams that can help them.",
		bio: "William helps share the team's work through thoughtful, audience-focused marketing.",
		skills: ["Content Strategy", "Campaign Planning", "Brand Communication"],
	},
];
