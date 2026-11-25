"use client";
import Marquee from "react-fast-marquee";

import Layout from "@/components/layout/Layout";
import Testimonial from "@/components/sections/Testimonial";
import Link from "next/link";
import CountUp from "react-countup";
import BouncingBlobsWrapper from "@/components/elements/BouncingBlobsWrapper";
import NewsletterForm from "@/components/sections/NewsletterForm";
export default function PageAbout() {
    return (
        <>
            <Layout>
                {/*CTA 13 3*/}
                <section className="section-testimonial-13 position-relative section-padding fix">
                    <div className="container position-relative z-1">
                        <div className="row pb-9">
                            <div className="col-lg-7 mx-lg-auto">
                                <div className="text-center mb-lg-0 mb-5">
                                    <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                                        <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                        <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">About our company</span>
                                    </div>
                                    <h5 className="ds-5 my-3 fw-regular">
                                        Uncover{" "}
                                        <span className="fw-bold">
                                            Our Journey: <br className="d-none d-md-inline" />{" "}
                                        </span>{" "}
                                        Uniting Through <span className="fw-bold">Creativity</span>
                                    </h5>
                                    <p className="fs-5 mb-0 text-500">Our dedication to quality and excellence has made us a trusted partner for enterprises looking to enhance their online presence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="position-relative mb-lg-0 mb-8 fix">
                                    <div className="zoom-img rounded-4 fix">
                                        <img src="/assets/imgs/cta-13/img-1.png" alt="infinia" />
                                    </div>
                                    <div className="position-absolute alltuchtopdown bottom-0 start-0 m-md-5 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
                                        <p className="pt-2">
                                            Loved by over 4k <br /> happy clients
                                        </p>
                                        <div className="d-flex align-items-center justify-content-center py-4">
                                            <img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
                                            <img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
                                            <img className="avt-hero z-0" src="/assets/imgs/features-3/avatar-3.png" alt="infinia" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row flex-lg-column">
                                    <div className="col-md-6 col-lg-12">
                                        <div className="backdrop-filter bg-linear-2 rounded-4 px-6 py-4 z-1">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="my-lg-3 text-center">
                                                    <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
                                                        +<span className="odometer" />
                                                        <CountUp end={23} enableScrollSpy={true} />k
                                                    </span>
                                                    <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Projects Completed</p>
                                                    <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                                                        +<span className="odometer" />
                                                        <CountUp end={98} enableScrollSpy={true} />k
                                                    </span>
                                                    <p className="text-white text-nowrap mb-0">Happy Clients</p>
                                                </div>
                                                <div className="my-lg-3 text-center">
                                                    <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
                                                        +<span className="odometer" />
                                                        <CountUp end={38} enableScrollSpy={true} />k
                                                    </span>
                                                    <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Users Actived</p>
                                                    <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                                                        <span className="odometer" />
                                                        <CountUp end={150} enableScrollSpy={true} />
                                                    </span>
                                                    <p className="text-white text-nowrap mb-0">Operating countries</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <div className="zoom-img rounded-4 fix d-inline-block mt-4 mt-lg-4 mt-md-0 h-100">
                                            <img className="h-100" src="/assets/imgs/cta-13/img-2.png" alt="infinia" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                        <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
                    </div>
                    <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
                    <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
                </section>
                {/*Logo cloud 3*/}
                <div className="section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
                    <div className="container">
                        <h5 className="text-500 mb-5 text-center">Trusted by great companies</h5>
                        <div className="carouselTicker carouselTicker-right">
                            <ul className="carouselTicker__list pb-4">
                                <Marquee direction="right">
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="infinia" />
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="infinia" />
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="infinia" />
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width={95} height={16} viewBox="0 0 95 16" fill="none">
                                            <path d="M50.2795 0.182373C45.8551 0.182373 42.2654 3.63876 42.2654 7.90461C42.2654 12.4399 45.6991 15.8302 50.2795 15.8302C54.7456 15.8302 58.2718 12.3951 58.2718 7.99365C58.2718 3.61839 54.7691 0.182373 50.2795 0.182373Z" fill="url(#paint0_linear_815_25436)" />
                                            <path
                                                className="fill-dark"
                                                d="M4.7827 0.463976H0.474365V15.4912H4.7603C7.0342 15.4912 8.67874 14.9523 10.1213 13.7573C11.8331 12.3377 12.8483 10.1971 12.8483 7.98487C12.8483 3.54822 9.53389 0.463976 4.7827 0.463976ZM8.20912 11.7503C7.28268 12.5862 6.09001 12.9473 4.19466 12.9473H3.4073V3.00848H4.19466C6.09001 3.00848 7.237 3.34687 8.20912 4.22471C9.22285 5.12613 9.82747 6.52189 9.82747 7.96334C9.82747 9.40769 9.22285 10.8523 8.20912 11.7503ZM14.2013 15.4912H17.1293V0.463976H14.2013V15.4912ZM24.2978 6.22831C22.538 5.57625 22.0201 5.1462 22.0201 4.3379C22.0201 3.3908 22.9422 2.67037 24.2061 2.67037C25.0849 2.67037 25.8059 3.03059 26.5743 3.88428L28.1045 1.88214C26.8429 0.7756 25.3334 0.213163 23.6868 0.213163C21.0305 0.213163 19.0011 2.06167 19.0011 4.51539C19.0011 6.59027 19.9467 7.64822 22.6966 8.64216C23.8465 9.04573 24.4311 9.31488 24.7246 9.49877C25.3104 9.88197 25.6045 10.4208 25.6045 11.0514C25.6045 12.2699 24.6347 13.1699 23.326 13.1699C21.9288 13.1699 20.8033 12.4722 20.1268 11.1654L18.2364 12.9927C19.5856 14.9727 21.2083 15.8543 23.4415 15.8543C26.4832 15.8543 28.6227 13.8237 28.6227 10.9178C28.6227 8.52898 27.6337 7.44658 24.2978 6.22831ZM29.5462 7.98487C29.5462 12.4061 33.0175 15.8302 37.4803 15.8302C38.7419 15.8302 39.8235 15.5808 41.1543 14.9523V11.5029C39.9809 12.6758 38.9442 13.1478 37.6142 13.1478C34.6629 13.1478 32.5659 11.0066 32.5659 7.96334C32.5659 5.08045 34.7284 2.80422 37.4803 2.80422C38.8752 2.80422 39.9361 3.29973 41.1543 4.49386V1.04474C39.87 0.393271 38.8092 0.125 37.5472 0.125C33.1071 0.125 29.5462 3.61834 29.5462 7.98487ZM64.9036 10.5582L60.8923 0.463976H57.6923L64.0717 15.875H65.6479L72.1387 0.463976H68.9623L64.9036 10.5582ZM73.4711 15.4912H81.7852V12.9473H76.4002V8.88832H81.5791V6.34382H76.4002V3.00848H81.7852V0.463976H73.4711V15.4912ZM93.3874 4.89888C93.3874 2.08378 91.4522 0.463976 88.07 0.463976H83.7204V15.4912H86.6527V9.45163H87.0365L91.0905 15.4912H94.6962L89.961 9.16125C92.1726 8.70908 93.3874 7.19868 93.3874 4.89888ZM87.5055 7.38053H86.6527V2.82691H87.5524C89.3817 2.82691 90.3727 3.59535 90.3727 5.05775C90.3727 6.56641 89.3817 7.38053 87.5055 7.38053Z"
                                                fill="black"
                                            />
                                            <defs>
                                                <linearGradient x1="45.373" y1="1.60057" x2="56.1885" y2="13.0236" gradientUnits="userSpaceOnUse">
                                                    <stop offset={1} stopColor="#F34F26" />
                                                    <stop offset={1} stopColor="#F69E35" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="infinia" />
                                    </li>
                                    <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                        <img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="infinia" />
                                    </li>
                                </Marquee>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 mx-lg-auto">
                                <div className="carouselTicker carouselTicker-left">
                                    <ul className="carouselTicker__list pb-4">
                                        <Marquee>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="infinia" />
                                            </li>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="infinia" />
                                            </li>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
                                            </li>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-10.svg" alt="infinia" />
                                            </li>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="infinia" />
                                            </li>
                                            <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
                                                <img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="infinia" />
                                            </li>
                                        </Marquee>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Team 6*/}
                <section className="section-team-6 section-padding position-relative">
                    <div className="container">
                        <div className="row position-relative z-1">
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
                                </div>
                                <h3 className="ds-3 my-3">Meet Our Team</h3>
                                <p className="fs-5">
                                    Meet the talented and passionate team members who drive our <br />
                                    company forward every day.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-6">
                            {/* prettier-ignore */}
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-1.png" alt="infinia" />
									</div>
								</div>
							</div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    Michael Anderson
                                                </Link>
                                            </h6>
                                            <p className="mb-0">Software Engineer</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-2.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    David Clark
                                                </Link>
                                            </h6>
                                            <p className="mb-0">Product Manager</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-3.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    Emily Adams
                                                </Link>
                                            </h6>
                                            <p className="mb-0">UX/UI Designer</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-4.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    Jessica Carter
                                                </Link>
                                            </h6>
                                            <p className="mb-0">DevOps Engineer</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-5.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    William Foster
                                                </Link>
                                            </h6>
                                            <p className="mb-0">Marketing Specialist</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-6.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    Lauren Graham
                                                </Link>
                                            </h6>
                                            <p className="mb-0">Sales Executive</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-7.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                                <div className="card-team position-relative d-inline-block hover-up">
                                    <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                                        <div>
                                            <h6>
                                                <Link href="#" className="text-900">
                                                    James Bennett
                                                </Link>
                                            </h6>
                                            <p className="mb-0">Data Analyst</p>
                                        </div>
                                        <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="zoom-img bg-primary-soft">
                                        <img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-8.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center mt-6">
                                <div className="text-center">
                                    <p className="fs-4 mb-5 text-900">
                                        Easily Monitor, Control, and Enhance Your Personal and <br />
                                        Business Finances. Your All-In-One Solution.
                                    </p>
                                    <Link href="#" className="btn btn-gradient">
                                        Get a Free Quote
                                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial style={{ paddingBottom: "60px" }} />
                
                
                {/* Newsletter 1 */}
                <section className="section-newsletter-1 pb-120 fix position-relative" style={{ paddingTop: "60px" }}>
                    <div className="container position-relative fix">
                        <div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
                            <div className="col-lg-6 my-4">
                                <div className="row">
                                    <div className="ms-lg-4">
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="infinia" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="infinia" />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="infinia" />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
                                    </div>
                                </div>
                                <div className="row d-none d-lg-flex">
                                    <div className="me-lg-0">
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
                                        <img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="px-lg-5 text-lg-start text-center">
                                    <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                        <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                        <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
                                    </div>
                                    <h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>
                                        Subscribe to our Newsletter!
                                    </h4>
                                    <span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>
                                        Join 52,000+ people on our newsletter
                                    </span>
                                    <NewsletterForm
                                        formClassName="input-group mb-3 mt-4 position-relative"
                                        inputClassName="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white"
                                        buttonContainerClassName="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill"
                                        buttonClassName="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle z-0">
                            <img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
                        </div>
                        <div className="bouncing-blobs-container rounded-4 fix">
                            <div className="bouncing-blobs-glass rounded-4" />
                            <BouncingBlobsWrapper className="bouncing-blobs">
                                <div className="bouncing-blob bouncing-blob--green" />
                                <div className="bouncing-blob bouncing-blob--primary" />
                            </BouncingBlobsWrapper>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
