'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
							<span>Infinia</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li><Link className="active" href="/">Home</Link></li>
										<li><Link href="/about-us">About Us</Link></li>
										<li><Link href="/services">Services</Link></li>
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(5)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Features</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
												<li><Link href="/page-features-1">Features v.1</Link></li>
												<li><Link href="/page-features-2">Features v.2</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 6 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(6)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Pricing</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
												<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
												<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
											</ul>
										</li>
										<li><Link href="/contact">Contact</Link></li>
										<li><Link href="/blog">Blog</Link></li>
										<li className={`has-children ${isAccordion === 9 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(9)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Case Study</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 9 ? "block" : "none"}` }}>
												<li><Link href="/page-case-study">Case Study</Link></li>
												<li><Link href="/page-case-study-details">Case study details</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 10 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(10)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Authentication</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 10 ? "block" : "none"}` }}>
												<li><Link href="/page-register">Register</Link></li>
												<li><Link href="/page-login">Sign in</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 11 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(11)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Utilities</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 11 ? "block" : "none"}` }}>
												<li><Link href="/page-work-process">Work Process</Link></li>
												<li><Link href="/page-book-a-demo">Book a demo</Link></li>
												<li><Link href="/page-integration">Integration</Link></li>
												<li><Link href="/page-changelog">Change log</Link></li>
												<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
												<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
												<li><Link href="/page-comming-soon">Comming soon</Link></li>
												<li><Link href="/page-404">Error 404</Link></li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
