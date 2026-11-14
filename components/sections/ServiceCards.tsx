import Link from "next/link";
import { services } from "@/util/services";

export default function ServiceCards() {
	return (
		<>
			{services.map((service) => (
				<div className="col-lg-4 col-md-6" key={service.slug}>
					<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
						<div className="card-service bg-white p-6 border rounded-4 text-center">
							<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
								<div className="icon">
									<img src={service.icon} alt="" />
								</div>
							</div>
							<h5 className="my-3">{service.title}</h5>
							<p className="mb-6">{service.description}</p>
							<Link
								href={`/services/${service.slug}`}
								className="text-primary fs-7 fw-bold"
							>
								Learn More
								<svg
									className="ms-2"
									xmlns="http://www.w3.org/2000/svg"
									width={19}
									height={18}
									viewBox="0 0 19 18"
									fill="none"
								>
									<path
										d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
										fill="#111827"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
