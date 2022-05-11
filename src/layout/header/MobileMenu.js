import React, { useEffect, useState } from "react";
import $ from "jquery";
import { MobileMenuContainer } from "./mobile-menu.style";
import { initSlickNav } from "../../assets/js/jquery-slicknav";

function MobileMenu() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initSlickNav();
		setInit(true);
	}, [initSlickNav]);

	useEffect(() => {
		if (init) {
			$("#navigation").slicknav({
				duration: 500,
				closedSymbol: '<i class="fas fa-plus"></i>',
				openedSymbol: '<i class="fas fa-minus"></i>',
				prependTo: ".mobile-menu-container",
				allowParentLinks: true,
				nestedParentLinks: false,
				label: "Menu",
				closeOnClick: true // Close menu when a link is clicked.
			});
		}
	}, [init]);

	console.log(init);

	return (
		<MobileMenuContainer className="mobile-menu-container">
			<div className="slicknav_menu">
				<nav
					className="slicknav_nav slicknav_hidden"
					aria-hidden="true"
					role="menu"
					style={{ display: "none" }}>
					<ul>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="index.html">Home</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="index-v2.html" role="menuitem" tabIndex={-1}>
										Home 2
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="#">Tour</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="destination.html" role="menuitem" tabIndex={-1}>
										Destination
									</a>
								</li>
								<li>
									<a href="tour-packages.html" role="menuitem" tabIndex={-1}>
										Tour Packages
									</a>
								</li>
								<li>
									<a href="package-offer.html" role="menuitem" tabIndex={-1}>
										Package Offer
									</a>
								</li>
								<li>
									<a href="package-detail.html" role="menuitem" tabIndex={-1}>
										Package Detail
									</a>
								</li>
								<li>
									<a href="tour-cart.html" role="menuitem" tabIndex={-1}>
										Tour Cart
									</a>
								</li>
								<li>
									<a href="booking.html" role="menuitem" tabIndex={-1}>
										Package Booking
									</a>
								</li>
								<li>
									<a href="confirmation.html" role="menuitem" tabIndex={-1}>
										Confirmation
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="#">Pages</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="about.html" role="menuitem" tabIndex={-1}>
										About
									</a>
								</li>
								<li>
									<a href="service.html" role="menuitem" tabIndex={-1}>
										Service
									</a>
								</li>
								<li>
									<a href="career.html" role="menuitem" tabIndex={-1}>
										Career
									</a>
								</li>
								<li>
									<a href="career-detail.html" role="menuitem" tabIndex={-1}>
										Career Detail
									</a>
								</li>
								<li>
									<a href="tour-guide.html" role="menuitem" tabIndex={-1}>
										Tour Guide
									</a>
								</li>
								<li>
									<a href="gallery.html" role="menuitem" tabIndex={-1}>
										Gallery
									</a>
								</li>
								<li>
									<a href="single-page.html" role="menuitem" tabIndex={-1}>
										Single Page
									</a>
								</li>
								<li>
									<a href="faq.html" role="menuitem" tabIndex={-1}>
										FAQ Page
									</a>
								</li>
								<li>
									<a href="testimonial-page.html" role="menuitem" tabIndex={-1}>
										Testimonial Page
									</a>
								</li>
								<li>
									<a href="search-page.html" role="menuitem" tabIndex={-1}>
										Search Page
									</a>
								</li>
								<li>
									<a href="404.html" role="menuitem" tabIndex={-1}>
										404 Page
									</a>
								</li>
								<li>
									<a href="comming-soon.html" role="menuitem" tabIndex={-1}>
										Comming Soon
									</a>
								</li>
								<li>
									<a href="contact.html" role="menuitem" tabIndex={-1}>
										Contact
									</a>
								</li>
								<li>
									<a href="wishlist-page.html" role="menuitem" tabIndex={-1}>
										Wishlist
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="single-page.html">Shop</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="product-right.html" role="menuitem" tabIndex={-1}>
										Shop Archive
									</a>
								</li>
								<li>
									<a href="product-detail.html" role="menuitem" tabIndex={-1}>
										Shop Single
									</a>
								</li>
								<li>
									<a href="product-cart.html" role="menuitem" tabIndex={-1}>
										Shop Cart
									</a>
								</li>
								<li>
									<a href="product-checkout.html" role="menuitem" tabIndex={-1}>
										Shop Checkout
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="#">Blog</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="blog-archive.html" role="menuitem" tabIndex={-1}>
										Blog List
									</a>
								</li>
								<li>
									<a href="blog-archive-left.html" role="menuitem" tabIndex={-1}>
										Blog Left Sidebar
									</a>
								</li>
								<li>
									<a href="blog-archive-both.html" role="menuitem" tabIndex={-1}>
										Blog Both Sidebar
									</a>
								</li>
								<li>
									<a href="blog-single.html" role="menuitem" tabIndex={-1}>
										Blog Single
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
							<span className="slicknav_parent-link slicknav_row">
								<a href="#">Dashboard</a>
								<a
									href="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item"
									style={{ outline: "none" }}>
									<span className="slicknav_arrow">
										<i className="fas fa-plus" />
									</span>
								</a>
							</span>
							<ul
								role="menu"
								className="slicknav_hidden"
								aria-hidden="true"
								style={{ display: "none" }}>
								<li>
									<a href="admin/dashboard.html" role="menuitem" tabIndex={-1}>
										Dashboard
									</a>
								</li>
								<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
									<span className="slicknav_parent-link slicknav_row">
										<a href="#" tabIndex={-1}>
											User
										</a>
										<a
											href="#"
											role="menuitem"
											aria-haspopup="true"
											tabIndex={-1}
											className="slicknav_item"
											style={{ outline: "none" }}>
											<span className="slicknav_arrow">
												<i className="fas fa-plus" />
											</span>
										</a>
									</span>
									<ul
										role="menu"
										aria-hidden="true"
										className="slicknav_hidden"
										style={{ display: "none" }}>
										<li>
											<a href="admin/user.html" role="menuitem" tabIndex={-1}>
												User List
											</a>
										</li>
										<li>
											<a href="admin/user-edit.html" role="menuitem" tabIndex={-1}>
												User Edit
											</a>
										</li>
										<li>
											<a href="admin/new-user.html" role="menuitem" tabIndex={-1}>
												New User
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="admin/db-booking.html" role="menuitem" tabIndex={-1}>
										Booking
									</a>
								</li>
								<li className="menu-item-has-children slicknav_collapsed slicknav_parent">
									<span className="slicknav_parent-link slicknav_row">
										<a href="admin/db-package.html" tabIndex={-1}>
											Package
										</a>
										<a
											href="#"
											role="menuitem"
											aria-haspopup="true"
											tabIndex={-1}
											className="slicknav_item"
											style={{ outline: "none" }}>
											<span className="slicknav_arrow">
												<i className="fas fa-plus" />
											</span>
										</a>
									</span>
									<ul
										role="menu"
										aria-hidden="true"
										className="slicknav_hidden"
										style={{ display: "none" }}>
										<li>
											<a href="admin/db-package-active.html" role="menuitem" tabIndex={-1}>
												Package Active
											</a>
										</li>
										<li>
											<a href="admin/db-package-pending.html" role="menuitem" tabIndex={-1}>
												Package Pending
											</a>
										</li>
										<li>
											<a href="admin/db-package-expired.html" role="menuitem" tabIndex={-1}>
												Package Expired
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="admin/db-comment.html" role="menuitem" tabIndex={-1}>
										Comments
									</a>
								</li>
								<li>
									<a href="admin/db-wishlist.html" role="menuitem" tabIndex={-1}>
										Wishlist
									</a>
								</li>
								<li>
									<a href="admin/login.html" role="menuitem" tabIndex={-1}>
										Login
									</a>
								</li>
								<li>
									<a href="admin/forgot.html" role="menuitem" tabIndex={-1}>
										Forget Password
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</MobileMenuContainer>
	);
}

export default MobileMenu;
