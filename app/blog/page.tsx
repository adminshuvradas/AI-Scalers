import BouncingBlobsWrapper from "@/components/elements/BouncingBlobsWrapper";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { blogPosts } from "@/util/blog-posts";
import NewsletterForm from "@/components/sections/NewsletterForm";

const postsPerPage = 6;

interface PageBlogProps {
    searchParams: Promise<{ page?: string | string[] }>;
}

export default async function PageBlog({ searchParams }: PageBlogProps) {
    const { page } = await searchParams;
    const requestedPage = Number(Array.isArray(page) ? page[0] : page);
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const currentPage = Number.isInteger(requestedPage) && requestedPage > 0
        ? Math.min(requestedPage, totalPages)
        : 1;
    const currentPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage,
    );

    return (
        <>
            <Layout>
                {/*Blog 5*/}
                <section className="section-blog-1 section-padding position-relative border-top border-bottom overflow-hidden">
                    <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                        <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
                    </div>
                    <div className="container position-relative z-2">
                        <div className="row align-items-end">
                            <div className="col-lg-7 me-auto">
                                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
                                </div>
                                <h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
                                <span className="fs-5 fw-medium text-900">Explore the insights and trends shaping our industry</span>
                            </div>
                            <div className="col-lg-auto">
                                <Link href="#" className="fw-bold text-primary btn bg-white hover-up shadow-2 mt-lg-0 mt-5 ms-lg-auto">
                                    Subscribe our newsletter
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
                                        <path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-8 align-items-center">
                            <div className="col-lg-7">
                                <div className="card-team position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 border  card-hover shadow-2 mb-lg-0 mb-8">
                                    <img className="rounded rounded-bottom-0 rounded-start-lg rounded-end-lg-0 w-100 w-lg-auto" src="/assets/imgs/blog-5/img-1.png" alt="infinia" />
                                    <div className="bg-white align-self-stretch rounded rounded-start-lg-0 p-5">
                                        <span className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-2">
                                            <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
                                        </span>
                                        <h6 className="mb-3">The Future of SaaS: Emerging Trends to Watch</h6>
                                        <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
                                            <div className="d-flex align-items-center position-relative z-1">
                                                <div className="icon-shape rounded-circle border border-2 border-white">
                                                    <img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="fs-7 m-0 mb-1">Evara Rose</h6>
                                                    <p className="mb-0 fs-8">17 May 2026</p>
                                                </div>
                                                <Link href="/blog/13" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                                            </div>
                                            <div className="arrow-icon icon-shape icon-md bg-white rounded-circle border">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                    <path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Link href="/blog/13" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div>
                                    <Link href="/blog/11" className="d-flex flex-column flex-md-row align-items-center hover-up">
                                        <img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-2.png" alt="infinia" />
                                        <div className="content ms-5 mt-4 mt-md-0">
                                            <h6 className="mb-2">Why Consistent Brand Identity is Key to Business Success</h6>
                                            <p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                                        </div>
                                    </Link>
                                    <Link href="/blog/15" className="d-flex flex-column flex-md-row align-items-center mt-7 hover-up">
                                        <img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-3.png" alt="infinia" />
                                        <div className="content ms-5 mt-4 mt-md-0">
                                            <h6 className="mb-2">The Importance of Data Security in Your SaaS Projects</h6>
                                            <p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
                    <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
                </section>
                {/*Blog 6*/}
                <section className="section-blog-6 section-padding border-bottom">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col">
                                <h5 className="ds-5 mt-3 mb-3">Trending News</h5>
                                <span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
                            </div>
                        </div>
                        <div className="row">
                            {currentPosts.map((post) => (
                                <div className="col-lg-4 col-md-6 text-start" key={post.id}>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="card border-0 rounded-3 mt-4 position-relative d-flex flex-column h-100 w-100 text-decoration-none"
                                    >
                                        <img
                                            className="rounded-top-3 w-100"
                                            src={post.image}
                                            alt={post.title}
                                            style={{ aspectRatio: "1 / 1", objectFit: "cover", maxWidth: "420px" }}
                                        />
                                        <div className="card-body bg-white p-0 d-flex flex-column flex-grow-1">
                                            <span className="position-relative z-1 bg-primary-soft border border-2 border-white d-inline-flex align-self-start rounded-pill px-3 py-2 mt-3">
                                                <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{post.category}</span>
                                            </span>
                                            <h6 className="my-3">{post.title}</h6>
                                            <p>{post.excerpt}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row pt-5 text-start">
                            <div className="d-flex justify-content-start align-items-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination gap-2">
                                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                            {currentPage === 1 ? (
                                                <span className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" aria-label="Previous">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href={`/blog?page=${currentPage - 1}`} aria-label="Previous">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            )}
                                        </li>
                                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                                            <li className="page-item" key={pageNumber}>
                                                <Link
                                                    className={`icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold ${currentPage === pageNumber ? "bg-primary text-white" : "bg-neutral-100 text-900"}`}
                                                    href={`/blog?page=${pageNumber}`}
                                                    aria-current={currentPage === pageNumber ? "page" : undefined}
                                                >
                                                    {pageNumber}
                                                </Link>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                            {currentPage === totalPages ? (
                                                <span className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" aria-label="Next">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href={`/blog?page=${currentPage + 1}`} aria-label="Next">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            )}
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Newsletter 1 */}
                <section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
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
