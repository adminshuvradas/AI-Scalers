import Link from "next/link";
import { teamMembers, type TeamMember } from "@/util/team";

interface TeamMemberCardsProps {
	imageVariant?: "classic" | "modern";
	columnClass?: string;
	textStart?: boolean;
}

export default function TeamMemberCards({
	imageVariant = "classic",
	columnClass = "col-lg-3 col-md-6",
	textStart = false,
}: TeamMemberCardsProps) {
	return (
		<>
			{teamMembers.map((member, index) => (
				<div
					className={`${columnClass} mb-lg-4 mb-7 text-center`}
					data-aos="fade-zoom-in"
					data-aos-delay={((index % 4) + 1) * 100}
					key={member.slug}
				>
					<TeamMemberCard
						member={member}
						image={imageVariant === "modern" ? member.modernImage : member.image}
						textStart={textStart}
					/>
				</div>
			))}
		</>
	);
}

interface TeamMemberCardProps {
	member: TeamMember;
	image: string;
	textStart?: boolean;
}

export function TeamMemberCard({
	member,
	image,
	textStart = false,
}: TeamMemberCardProps) {
	return (
		<div className="position-relative d-inline-block z-1 w-100">
			<div className="zoom-img rounded-3">
				<img className="img-fluid w-100" src={image} alt={member.name} />
			</div>
			<Link
				href={`/team/${member.slug}`}
				className={`card-team ${textStart ? "text-start " : ""}rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up`}
			>
				<h6>{member.name}</h6>
				<div className="d-flex">
					<span className="fs-6 text-600 me-auto">{member.role}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={14}
						viewBox="0 0 24 14"
						fill="none"
						aria-hidden="true"
					>
						<path
							className="fill-primary"
							d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
							fill="white"
						/>
					</svg>
				</div>
			</Link>
		</div>
	);
}
