"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
    footerStyle?: Number;
    children?: React.ReactNode;
}

export default function Layout({ footerStyle, children }: LayoutProps) {
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
            <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />

            <main>
                {children}
            </main>

            <Footer />

            <BackToTop target="#top" />
        </>
    );
}
