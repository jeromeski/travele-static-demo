import logo from "../../assets/images/travele-logo.png";
import { BottomHeader, SiteHeader, TopHeader } from "./header.style";
import { Button } from "components/buttons/button.style";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Header() {
	return (
		<SiteHeader id="masthead" className="site-header header-primary">
			{/* header html start */}
			<TopHeader className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 d-none d-lg-block">
							<div className="header-contact-info">
								<ul>
									<li>
										<Link to="/">
											<i className="fas fa-phone-alt" /> +01 (977) 2599 12
										</Link>
									</li>
									<li>
										<Link to="/mailto:info@Travel.com">
											<i className="fas fa-envelope" /> company@domain.com
										</Link>
									</li>
									<li>
										<i className="fas fa-map-marker-alt" /> 3146 Koontz Lane, California
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
							<div className="header-social social-links">
								<ul>
									<li>
										<Link to="/">
											<i className="fab fa-facebook-f" aria-hidden="true" />
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fab fa-twitter" aria-hidden="true" />
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fab fa-instagram" aria-hidden="true" />
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fab fa-linkedin" aria-hidden="true" />
										</Link>
									</li>
								</ul>
							</div>
							<div className="header-search-icon">
								<button className="search-icon">
									<i className="fas fa-search" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</TopHeader>

			<BottomHeader className="bottom-header">
				<div className="container d-flex justify-content-between align-items-center">
					<div className="site-identity">
						<h1 className="site-title">
							<Link to="/index.html">
								<img src={logo} alt="logo" />
							</Link>
						</h1>
					</div>
					<div className="main-navigation d-none d-lg-block">
						<nav id="navigation" className="navigation">
							<ul>
								<li className="menu-item-has-children">
									<Link to="/">Home</Link>
									<ul>
										<li>
											<Link to="/">Home 2</Link>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/">Tour</Link>
									<ul>
										<li>
											<Link to="/destination.html">Destination</Link>
										</li>
										<li>
											<Link to="/tour-packages.html">Tour Packages</Link>
										</li>
										<li>
											<Link to="/package-offer.html">Package Offer</Link>
										</li>
										<li>
											<Link to="/package-detail.html">Package Detail</Link>
										</li>
										<li>
											<Link to="/tour-cart.html">Tour Cart</Link>
										</li>
										<li>
											<Link to="/booking.html">Package Booking</Link>
										</li>
										<li>
											<Link to="/confirmation.html">Confirmation</Link>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/">Pages</Link>
									<ul>
										<li>
											<Link to="/about.html">About</Link>
										</li>
										<li>
											<Link to="/service.html">Service</Link>
										</li>
										<li>
											<Link to="/career.html">Career</Link>
										</li>
										<li>
											<Link to="/career-detail.html">Career Detail</Link>
										</li>
										<li>
											<Link to="/tour-guide.html">Tour Guide</Link>
										</li>
										<li>
											<Link to="/gallery.html">Gallery</Link>
										</li>
										<li>
											<Link to="/single-page.html">Single Page</Link>
										</li>
										<li>
											<Link to="/faq.html">FAQ Page</Link>
										</li>
										<li>
											<Link to="/testimonial-page.html">Testimonial Page</Link>
										</li>
										<li>
											<Link to="/search-page.html">Search Page</Link>
										</li>
										<li>
											<Link to="/404.html">404 Page</Link>
										</li>
										<li>
											<Link to="/comming-soon.html">Comming Soon</Link>
										</li>
										<li>
											<Link to="/contact.html">Contact</Link>
										</li>
										<li>
											<Link to="/wishlist-page.html">Wishlist</Link>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/single-page.html">Shop</Link>
									<ul>
										<li>
											<Link to="/product-right.html">Shop Archive</Link>
										</li>
										<li>
											<Link to="/product-detail.html">Shop Single</Link>
										</li>
										<li>
											<Link to="/product-cart.html">Shop Cart</Link>
										</li>
										<li>
											<Link to="/product-checkout.html">Shop Checkout</Link>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/">Blog</Link>
									<ul>
										<li>
											<Link to="/blog-archive.html">Blog List</Link>
										</li>
										<li>
											<Link to="/blog-archive-left.html">Blog Left Sidebar</Link>
										</li>
										<li>
											<Link to="/blog-archive-both.html">Blog Both Sidebar</Link>
										</li>
										<li>
											<Link to="/blog-single.html">Blog Single</Link>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/">Dashboard</Link>
									<ul>
										<li>
											<Link to="/admin/dashboard.html">Dashboard</Link>
										</li>
										<li className="menu-item-has-children">
											<Link to="/">User</Link>
											<ul>
												<li>
													<Link to="/admin/user.html">User List</Link>
												</li>
												<li>
													<Link to="/admin/user-edit.html">User Edit</Link>
												</li>
												<li>
													<Link to="/admin/new-user.html">New User</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to="/admin/db-booking.html">Booking</Link>
										</li>
										<li className="menu-item-has-children">
											<Link to="/admin/db-package.html">Package</Link>
											<ul>
												<li>
													<Link to="/admin/db-package-active.html">Package Active</Link>
												</li>
												<li>
													<Link to="/admin/db-package-pending.html">Package Pending</Link>
												</li>
												<li>
													<Link to="/admin/db-package-expired.html">Package Expired</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to="/admin/db-comment.html">Comments</Link>
										</li>
										<li>
											<Link to="/admin/db-wishlist.html">Wishlist</Link>
										</li>
										<li>
											<Link to="/admin/login.html">Login</Link>
										</li>
										<li>
											<Link to="/admin/forgot.html">Forget Password</Link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
					<div className="header-btn">
						<Button to="/" className="button-primary">
							BOOK NOW
						</Button>
					</div>
				</div>
			</BottomHeader>

			<MobileMenu />
		</SiteHeader>
	);
}
