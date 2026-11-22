import Link from "next/link";

const companyLinks = [
    { label: "Mission & Vision", href: "/about-us" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Advertising", href: "#" },
];

const resourceLinks = [
    "Knowledge Base",
    "Documents",
    "System Status",
    "Security",
];

const instagramImages = [
    "img-inst-1.png",
    "img-inst-2.png",
    "img-inst-3.png",
    "img-inst-4.png",
    "img-inst-5.png",
    "img-inst-6.png",
];

export default function Footer1() {
    return (
        <footer>
            <div className="section-footer position-relative overflow-hidden">
                <div className="container-fluid bgft-1">
                    <div className="container position-relative z-2">
                        <div className="row py-90">
                            <div className="col-lg-4 pe-lg-10">
                                <Link href="/">
                                    <img
                                        src="/assets/imgs/logo/logo-white.svg"
                                        alt="Infinia"
                                    />
                                </Link>
                                <p className="text-white fw-medium mt-3 mb-6 opacity-50">
                                    You may also realize cost savings from your
                                    energy efficient choices in your custom home.
                                    Federal tax credits for some green materials
                                    can allow you to deduct as much.
                                </p>
                                <div className="d-flex social-icons">
                                    <a
                                        href="https://www.facebook.com/"
                                        aria-label="Facebook"
                                        className="text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md"
                                    >
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        aria-label="X"
                                        className="text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md"
                                    >
                                        <i className="bi bi-twitter-x" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/"
                                        aria-label="LinkedIn"
                                        className="text-white border border-light border-opacity-10 icon-shape icon-md"
                                    >
                                        <i className="bi bi-linkedin" />
                                    </a>
                                    <a
                                        href="https://www.behance.net/"
                                        aria-label="Behance"
                                        className="text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md"
                                    >
                                        <i className="bi bi-behance" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-6">
                                        <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                                            Company
                                        </h3>
                                        <div className="d-flex flex-column align-items-start">
                                            {companyLinks.map(({ label, href }) => (
                                                <Link
                                                    key={label}
                                                    className="hover-effect text-white mb-2 fw-medium fs-6"
                                                    href={href}
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-6">
                                        <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                                            Resource
                                        </h3>
                                        <div className="d-flex flex-column align-items-start">
                                            {resourceLinks.map((label) => (
                                                <Link
                                                    key={label}
                                                    className="hover-effect text-white mb-2 fw-medium fs-6"
                                                    href="#"
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                                            Instagram Posts
                                        </h3>
                                        <div className="row g-2">
                                            {instagramImages.map((image) => (
                                                <a
                                                    key={image}
                                                    href="https://instagram.com/"
                                                    aria-label="View Instagram post"
                                                    className="col-4 hover-up"
                                                >
                                                    <img
                                                        className="img-fluid w-100 rounded-3"
                                                        src={`/assets/imgs/footer-3/${image}`}
                                                        alt=""
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bgft-1">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
                                    <p className="text-white opacity-50 mb-0 fs-7">
                                        Copyright © 2026 Infinia. All Rights
                                        Reserved
                                    </p>
                                    <div className="d-flex">
                                        <Link
                                            href="/privacy-policy"
                                            className="text-white me-3"
                                        >
                                            Privacy policy
                                        </Link>
                                        <Link href="/terms-conditions" className="text-white">
                                            Terms &amp; Conditions
                                        </Link>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                                    <img src="/assets/imgs/footer-1/line-bg.png" alt="" />
                                </div>
                                <div className="position-absolute top-0 start-0 z-0">
                                    <img src="/assets/imgs/footer-1/ellipse-left.png" alt="" />
                                </div>
                                <div className="position-absolute top-0 end-0 z-0">
                                    <img src="/assets/imgs/footer-1/ellipse-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
