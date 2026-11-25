'use client'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
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
										<li><Link href="/">Home</Link></li>
										<li><Link href="/about-us">About Us</Link></li>
										<li><Link href="/services">Services</Link></li>
										<li><Link href="/blog">Blog</Link></li>
										<li><Link href="/contact">Contact</Link></li>
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
