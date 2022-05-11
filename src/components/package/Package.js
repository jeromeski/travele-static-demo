import { Button } from "components/buttons/button.style";
import React from "react";
import { Link } from "react-router-dom";
import packageOne from "assets/images/img5.jpg";
import packageTwo from "assets/images/img6.jpg";
import packageThree from "assets/images/img7.jpg";

function Package() {
	return (
		<div className="container">
			<div className="section-heading text-center">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<h5 className="dash-style">EXPLORE GREAT PLACES</h5>
						<h2>POPULAR PACKAGES</h2>
						<p>
							Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid
							blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum
							magnis maxime curae placeat.
						</p>
					</div>
				</div>
			</div>
			<div className="package-inner">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="package-wrap">
							<figure className="feature-image">
								<Link to="/">
									<img src={packageOne} alt="" />
								</Link>
							</figure>
							<div className="package-price">
								<h6>
									<span>$1,900 </span> / per person
								</h6>
							</div>
							<div className="package-content-wrap">
								<div className="package-meta text-center">
									<ul>
										<li>
											<i className="far fa-clock" />
											7D/6N
										</li>
										<li>
											<i className="fas fa-user-friends" />
											People: 5
										</li>
										<li>
											<i className="fas fa-map-marker-alt" />
											Malaysia
										</li>
									</ul>
								</div>
								<div className="package-content">
									<h3>
										<Link to="/">Sunset view of beautiful lakeside resident</Link>
									</h3>
									<div className="review-area">
										<span className="review-text">(25 reviews)</span>
										<div className="rating-start" title="Rated 5 out of 5">
											<span style={{ width: "60%" }} />
										</div>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
										elit tellus, luctus nec ullam elit tellpus.
									</p>
									<div className="btn-wrap">
										<Link to="/" className="button-text width-6">
											Book Now
											<i className="fas fa-arrow-right" />
										</Link>
										<Link to="/" className="button-text width-6">
											Wish List
											<i className="far fa-heart" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="package-wrap">
							<figure className="feature-image">
								<Link to="/">
									<img src={packageTwo} alt="" />
								</Link>
							</figure>
							<div className="package-price">
								<h6>
									<span>$1,230 </span> / per person
								</h6>
							</div>
							<div className="package-content-wrap">
								<div className="package-meta text-center">
									<ul>
										<li>
											<i className="far fa-clock" />
											5D/4N
										</li>
										<li>
											<i className="fas fa-user-friends" />
											People: 8
										</li>
										<li>
											<i className="fas fa-map-marker-alt" />
											Canada
										</li>
									</ul>
								</div>
								<div className="package-content">
									<h3>
										<Link to="/">Experience the natural beauty of island</Link>
									</h3>
									<div className="review-area">
										<span className="review-text">(17 reviews)</span>
										<div className="rating-start" title="Rated 5 out of 5">
											<span style={{ width: "100%" }} />
										</div>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
										elit tellus, luctus nec ullam elit tellpus.
									</p>
									<div className="btn-wrap">
										<Link to="/" className="button-text width-6">
											Book Now
											<i className="fas fa-arrow-right" />
										</Link>
										<Link to="/" className="button-text width-6">
											Wish List
											<i className="far fa-heart" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="package-wrap">
							<figure className="feature-image">
								<Link to="/">
									<img src={packageThree} alt="" />
								</Link>
							</figure>
							<div className="package-price">
								<h6>
									<span>$2,000 </span> / per person
								</h6>
							</div>
							<div className="package-content-wrap">
								<div className="package-meta text-center">
									<ul>
										<li>
											<i className="far fa-clock" />
											6D/5N
										</li>
										<li>
											<i className="fas fa-user-friends" />
											People: 6
										</li>
										<li>
											<i className="fas fa-map-marker-alt" />
											Portugal
										</li>
									</ul>
								</div>
								<div className="package-content">
									<h3>
										<Link to="/">Vacation to the water city of Portugal</Link>
									</h3>
									<div className="review-area">
										<span className="review-text">(22 reviews)</span>
										<div className="rating-start" title="Rated 5 out of 5">
											<span style={{ width: "80%" }} />
										</div>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
										elit tellus, luctus nec ullam elit tellpus.
									</p>
									<div className="btn-wrap">
										<Button to="/" className="button-text width-6">
											Book Now
											<i className="fas fa-arrow-right" />
										</Button>
										<Button to="/" className="button-text width-6">
											Wish List
											<i className="far fa-heart" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="btn-wrap text-center">
					<Button to="/" className="button-primary">
						VIEW ALL PACKAGES
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Package;
