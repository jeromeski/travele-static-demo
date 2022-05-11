import React from "react";
import destinationOne from "assets/images/img1.jpg";
import destinationTwo from "assets/images/img2.jpg";
import destinationThree from "assets/images/img3.jpg";
import destinationFour from "assets/images/img4.jpg";
import { Button } from "components/buttons/button.style";

function Destination() {
	return (
		<div className="container">
			<div className="section-heading">
				<div className="row align-items-end">
					<div className="col-lg-7">
						<h5 className="dash-style">POPULAR DESTINATION</h5>
						<h2>TOP NOTCH DESTINATION</h2>
					</div>
					<div className="col-lg-5">
						<div className="section-disc">
							Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea
							ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.
						</div>
					</div>
				</div>
			</div>
			<div className="destination-inner destination-three-column">
				<div className="row">
					<div className="col-lg-7">
						<div className="row">
							<div className="col-sm-6">
								<div className="desti-item overlay-desti-item">
									<figure className="desti-image">
										<img src={destinationOne} alt="" />
									</figure>
									<div className="meta-cat bg-meta-cat">
										<Button to="/">THAILAND</Button>
									</div>
									<div className="desti-content">
										<h3>
											<Button to="/">Disney Land</Button>
										</h3>
										<div className="rating-start" title="Rated 5 out of 4">
											<span style={{ width: "53%" }} />
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="desti-item overlay-desti-item">
									<figure className="desti-image">
										<img src={destinationTwo} alt="" />
									</figure>
									<div className="meta-cat bg-meta-cat">
										<Button to="/">NORWAY</Button>
									</div>
									<div className="desti-content">
										<h3>
											<Button to="/">Besseggen Ridge</Button>
										</h3>
										<div className="rating-start" title="Rated 5 out of 5">
											<span style={{ width: "100%" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="row">
							<div className="col-md-6 col-xl-12">
								<div className="desti-item overlay-desti-item">
									<figure className="desti-image">
										<img src={destinationThree} alt="" />
									</figure>
									<div className="meta-cat bg-meta-cat">
										<Button to="/">NEW ZEALAND</Button>
									</div>
									<div className="desti-content">
										<h3>
											<Button to="/">Oxolotan City</Button>
										</h3>
										<div className="rating-start" title="Rated 5 out of 5">
											<span style={{ width: "100%" }} />
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-12">
								<div className="desti-item overlay-desti-item">
									<figure className="desti-image">
										<img src={destinationFour} alt="" />
									</figure>
									<div className="meta-cat bg-meta-cat">
										<Button to="/">SINGAPORE</Button>
									</div>
									<div className="desti-content">
										<h3>
											<Button to="/">Marina Bay Sand City</Button>
										</h3>
										<div className="rating-start" title="Rated 5 out of 4">
											<span style={{ width: "60%" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="btn-wrap text-center">
					<Button to="/" className="button-primary">
						MORE DESTINATION
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Destination;
