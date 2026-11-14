"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";

interface LayoutProps {
    headerStyle?: Number;
    footerStyle?: Number;
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    // Search
    const [isSearch, setSearch] = useState<boolean>(false);
    const handleSearch = (): void => setSearch(!isSearch);

    // OffCanvas
    const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
    const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Import WOW.js dynamically to avoid SSR issues
            import("wowjs")
                .then((module: any) => {
                    // wowjs uses UMD pattern, try accessing WOW constructor
                    // It might be: module.WOW, module.default.WOW, or module.default
                    const WOW = module.WOW || (module.default && (module.default.WOW || module.default));

                    if (WOW && typeof WOW === "function") {
                        (window as any).wow = new WOW({
                            live: false,
                        });
                        (window as any).wow.init();
                    } else {
                        // Fallback: try CommonJS require
                        try {
                            const wowjsModule = require("wowjs");
                            const WOWClass = wowjsModule.WOW || wowjsModule.default?.WOW || wowjsModule.default || wowjsModule;
                            if (WOWClass && typeof WOWClass === "function") {
                                (window as any).wow = new WOWClass({
                                    live: false,
                                });
                                (window as any).wow.init();
                            }
                        } catch (err) {
                            console.error("WOW.js initialization failed:", err);
                        }
                    }
                })
                .catch((error) => {
                    console.error("Failed to import WOW.js:", error);
                });
        }

        AOS.init();

        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div id="top" />
            {!headerStyle && <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}

            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            <Footer1 />

            <BackToTop target="#top" />
        </>
    );
}
