import { SliderSection } from "components/slider/slider.style";
import styled from "styled-components/macro";

import Slider from "components/slider/Slider";
import { TripSearchSection } from "components/search/trip-search/trip-search.style";
import TripSearch from "components/search/trip-search/TripSearch";
import { DestinationSection } from "components/destination/destination.style";
import Destination from "components/destination/Destination";
import { PackageSection } from "components/package/package.style";
import Package from "components/package/Package";
import { CallbackSection } from "components/callback/callback.style";
import Callback from "components/callback/Callback";

const SiteMain = styled.main`
	main {
		display: block;
	}
`;

export default function Main({ children }) {
	return (
		<SiteMain id="content" className="site-main">
			{/* Home slider html start */}
			<SliderSection className="home-slider-section">
				<Slider />
			</SliderSection>
			{/* slider html start */}
			{/* Home search field html start */}
			<TripSearchSection className="trip-search-section shape-search-section">
				<TripSearch />
			</TripSearchSection>
			{/* search search field html end */}
			<DestinationSection className="destination-section">
				<Destination />
			</DestinationSection>
			{/* Home packages section html start */}
			<PackageSection className="package-section">
				<Package />
			</PackageSection>
			{/* packages html end */}
			{/* Home callback section html start */}
			<CallbackSection className="callback-section">
				<Callback />
			</CallbackSection>
			{/* callback html end */}
			{/* Home activity section html start */}
			<section className="activity-section">
				<div className="container">
					<div className="section-heading text-center">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<h5 className="dash-style">TRAVEL BY ACTIVITY</h5>
								<h2>ADVENTURE &amp; ACTIVITY</h2>
								<p>
									Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid
									blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus?
									Nostrum magnis maxime curae placeat.
								</p>
							</div>
						</div>
					</div>
					<div className="activity-inner row">
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon6.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Adventure</a>
									</h4>
									<p>15 Destination</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon10.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Trekking</a>
									</h4>
									<p>12 Destination</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon9.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Camp Fire</a>
									</h4>
									<p>7 Destination</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon8.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Off Road</a>
									</h4>
									<p>15 Destination</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon7.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Camping</a>
									</h4>
									<p>13 Destination</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="activity-item">
								<div className="activity-icon">
									<a href="#">
										<img src="assets/images/icon11.png" alt="" />
									</a>
								</div>
								<div className="activity-content">
									<h4>
										<a href="#">Exploring</a>
									</h4>
									<p>25 Destination</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* activity html end */}
			{/* Home special section html start */}
			<section className="special-section">
				<div className="container">
					<div className="section-heading text-center">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<h5 className="dash-style">TRAVEL OFFER &amp; DISCOUNT</h5>
								<h2>SPECIAL TRAVEL OFFER</h2>
								<p>
									Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid
									blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus?
									Nostrum magnis maxime curae placeat.
								</p>
							</div>
						</div>
					</div>
					<div className="special-inner">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="special-item">
									<figure className="special-img">
										<img src="assets/images/img9.jpg" alt="" />
									</figure>
									<div className="badge-dis">
										<span>
											<strong>20%</strong>
											off
										</span>
									</div>
									<div className="special-content">
										<div className="meta-cat">
											<a href="#">CANADA</a>
										</div>
										<h3>
											<a href="#">Experience the natural beauty of glacier</a>
										</h3>
										<div className="package-price">
											Price:
											<del>$1500</del>
											<ins>$1200</ins>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="special-item">
									<figure className="special-img">
										<img src="assets/images/img10.jpg" alt="" />
									</figure>
									<div className="badge-dis">
										<span>
											<strong>15%</strong>
											off
										</span>
									</div>
									<div className="special-content">
										<div className="meta-cat">
											<a href="#">NEW ZEALAND</a>
										</div>
										<h3>
											<a href="#">Trekking to the mountain camp site</a>
										</h3>
										<div className="package-price">
											Price:
											<del>$1300</del>
											<ins>$1105</ins>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="special-item">
									<figure className="special-img">
										<img src="assets/images/img11.jpg" alt="" />
									</figure>
									<div className="badge-dis">
										<span>
											<strong>15%</strong>
											off
										</span>
									</div>
									<div className="special-content">
										<div className="meta-cat">
											<a href="#">MALAYSIA</a>
										</div>
										<h3>
											<a href="#">Sunset view of beautiful lakeside city</a>
										</h3>
										<div className="package-price">
											Price:
											<del>$1800</del>
											<ins>$1476</ins>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* special html end */}
			{/* Home special section html start */}
			<section className="best-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="section-heading">
								<h5 className="dash-style">OUR TOUR GALLERY</h5>
								<h2>BEST TRAVELER'S SHARED PHOTOS</h2>
								<p>
									Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea
									ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt
									odio voluptates etiam, omnis.
								</p>
							</div>
							<figure className="gallery-img">
								<img src="assets/images/img12.jpg" alt="" />
							</figure>
						</div>
						<div className="col-lg-7">
							<div className="row">
								<div className="col-sm-6">
									<figure className="gallery-img">
										<img src="assets/images/img13.jpg" alt="" />
									</figure>
								</div>
								<div className="col-sm-6">
									<figure className="gallery-img">
										<img src="assets/images/img14.jpg" alt="" />
									</figure>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<figure className="gallery-img">
										<img src="assets/images/img15.jpg" alt="" />
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* best html end */}
			{/* Home client section html start */}
			<div className="client-section">
				<div className="container">
					<div className="client-wrap client-slider secondary-bg">
						<div className="client-item">
							<figure>
								<img src="assets/images/logo1.png" alt="" />
							</figure>
						</div>
						<div className="client-item">
							<figure>
								<img src="assets/images/logo2.png" alt="" />
							</figure>
						</div>
						<div className="client-item">
							<figure>
								<img src="assets/images/logo3.png" alt="" />
							</figure>
						</div>
						<div className="client-item">
							<figure>
								<img src="assets/images/logo4.png" alt="" />
							</figure>
						</div>
						<div className="client-item">
							<figure>
								<img src="assets/images/logo5.png" alt="" />
							</figure>
						</div>
						<div className="client-item">
							<figure>
								<img src="assets/images/logo2.png" alt="" />
							</figure>
						</div>
					</div>
				</div>
			</div>
			{/* client html end */}
			{/* Home subscribe section html start */}
			<section
				className="subscribe-section"
				style={{ backgroundImage: "url(assets/images/img16.jpg)" }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="section-heading section-heading-white">
								<h5 className="dash-style">HOLIDAY PACKAGE OFFER</h5>
								<h2>HOLIDAY SPECIAL 25% OFF !</h2>
								<h4>
									Sign up now to recieve hot special offers and information about the best tour
									packages, updates and discounts !!
								</h4>
								<div className="newsletter-form">
									<form>
										<input type="email" name="s" placeholder="Your Email Address" />
										<input type="submit" name="signup" defaultValue="SIGN UP NOW!" />
									</form>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
									nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend
									temporibus occaecat luctus eleifend tempo ribus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* subscribe html end */}
			{/* Home blog section html start */}
			<section className="blog-section">
				<div className="container">
					<div className="section-heading text-center">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<h5 className="dash-style">FROM OUR BLOG</h5>
								<h2>OUR RECENT POSTS</h2>
								<p>
									Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid
									blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus?
									Nostrum magnis maxime curae placeat.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<article className="post">
								<figure className="feature-image">
									<a href="#">
										<img src="assets/images/img17.jpg" alt="" />
									</a>
								</figure>
								<div className="entry-content">
									<h3>
										<a href="#">Life is a beautiful journey not a destination</a>
									</h3>
									<div className="entry-meta">
										<span className="byline">
											<a href="#">Demoteam</a>
										</span>
										<span className="posted-on">
											<a href="#">August 17, 2021</a>
										</span>
										<span className="comments-link">
											<a href="#">No Comments</a>
										</span>
									</div>
								</div>
							</article>
						</div>
						<div className="col-md-6 col-lg-4">
							<article className="post">
								<figure className="feature-image">
									<a href="#">
										<img src="assets/images/img18.jpg" alt="" />
									</a>
								</figure>
								<div className="entry-content">
									<h3>
										<a href="#">Take only memories, leave only footprints</a>
									</h3>
									<div className="entry-meta">
										<span className="byline">
											<a href="#">Demoteam</a>
										</span>
										<span className="posted-on">
											<a href="#">August 17, 2021</a>
										</span>
										<span className="comments-link">
											<a href="#">No Comments</a>
										</span>
									</div>
								</div>
							</article>
						</div>
						<div className="col-md-6 col-lg-4">
							<article className="post">
								<figure className="feature-image">
									<a href="#">
										<img src="assets/images/img19.jpg" alt="" />
									</a>
								</figure>
								<div className="entry-content">
									<h3>
										<a href="#">Journeys are best measured in new friends</a>
									</h3>
									<div className="entry-meta">
										<span className="byline">
											<a href="#">Demoteam</a>
										</span>
										<span className="posted-on">
											<a href="#">August 17, 2021</a>
										</span>
										<span className="comments-link">
											<a href="#">No Comments</a>
										</span>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			{/* blog html end */}
			{/* Home testimonial section html start */}
			<div
				className="testimonial-section"
				style={{ backgroundImage: "url(assets/images/img23.jpg)" }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<div className="testimonial-inner testimonial-slider">
								<div className="testimonial-item text-center">
									<figure className="testimonial-img">
										<img src="assets/images/img20.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>
											" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis
											fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere?
											Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
											condi mentum acpri! "
										</p>
										<cite>
											Johny English
											<span className="company">Travel Agent</span>
										</cite>
									</div>
								</div>
								<div className="testimonial-item text-center">
									<figure className="testimonial-img">
										<img src="assets/images/img21.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>
											" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis
											fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere?
											Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
											condi mentum acpri! "
										</p>
										<cite>
											William Housten
											<span className="company">Travel Agent</span>
										</cite>
									</div>
								</div>
								<div className="testimonial-item text-center">
									<figure className="testimonial-img">
										<img src="assets/images/img22.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>
											" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis
											fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere?
											Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
											condi mentum acpri! "
										</p>
										<cite>
											Alison Wright
											<span className="company">Travel Guide</span>
										</cite>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* testimonial html end */}
			{/* Home contact details section html start */}
			<section className="contact-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div
								className="contact-img"
								style={{ backgroundImage: "url(assets/images/img24.jpg)" }}></div>
						</div>
						<div className="col-lg-8">
							<div className="contact-details-wrap">
								<div className="row">
									<div className="col-sm-4">
										<div className="contact-details">
											<div className="contact-icon">
												<img src="assets/images/icon12.png" alt="" />
											</div>
											<ul>
												<li>
													<a href="#">support@gmail.com</a>
												</li>
												<li>
													<a href="#">info@domain.com</a>
												</li>
												<li>
													<a href="#">name@company.com</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="contact-details">
											<div className="contact-icon">
												<img src="assets/images/icon13.png" alt="" />
											</div>
											<ul>
												<li>
													<a href="#">+132 (599) 254 669</a>
												</li>
												<li>
													<a href="#">+123 (669) 255 587</a>
												</li>
												<li>
													<a href="#">+01 (977) 2599 12</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="contact-details">
											<div className="contact-icon">
												<img src="assets/images/icon14.png" alt="" />
											</div>
											<ul>
												<li>3146 Koontz, California</li>
												<li>Quze.24 Second floor</li>
												<li>36 Street, Melbourne</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="contact-btn-wrap">
								<h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
								<a href="#" className="button-primary">
									LEARN MORE
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</SiteMain>
	);
}
