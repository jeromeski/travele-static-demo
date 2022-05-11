import React, { useEffect, useState } from "react";
import $ from "jquery";
import callbackOne from "assets/images/img8.jpg";
import cbIconOne from "assets/images/icon1.png";
import cbIconTwo from "assets/images/icon2.png";
import cbIconThree from "assets/images/icon3.png";
import cbIconFour from "assets/images/icon4.png";
import cbIconFive from "assets/images/icon5.png";

function Callback() {
	const [init, setInit] = useState(false);

	return (
		<div className="container">
			<div className="row no-gutters align-items-center">
				<div className="col-lg-5">
					<div className="callback-img" style={{ backgroundImage: `url(${callbackOne})` }}>
						<div className="video-button">
							<a id="video-container" data-video-id="IUN664s7N-c">
								<i className="fas fa-play" />
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="callback-inner">
						<div className="section-heading section-heading-white">
							<h5 className="dash-style">CALLBACK FOR MORE</h5>
							<h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
								ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend.
							</p>
						</div>
						<div className="callback-counter-wrap">
							<div className="counter-item">
								<div className="counter-icon">
									<img src={cbIconOne} alt="" />
								</div>
								<div className="counter-content">
									<span className="counter-no">
										<span className="counter">500</span>K+
									</span>
									<span className="counter-text">Satisfied Clients</span>
								</div>
							</div>
							<div className="counter-item">
								<div className="counter-icon">
									<img src={cbIconTwo} alt="" />
								</div>
								<div className="counter-content">
									<span className="counter-no">
										<span className="counter">250</span>K+
									</span>
									<span className="counter-text">Satisfied Clients</span>
								</div>
							</div>
							<div className="counter-item">
								<div className="counter-icon">
									<img src={cbIconThree} alt="" />
								</div>
								<div className="counter-content">
									<span className="counter-no">
										<span className="counter">15</span>K+
									</span>
									<span className="counter-text">Satisfied Clients</span>
								</div>
							</div>
							<div className="counter-item">
								<div className="counter-icon">
									<img src={cbIconFour} alt="" />
								</div>
								<div className="counter-content">
									<span className="counter-no">
										<span className="counter">10</span>K+
									</span>
									<span className="counter-text">Satisfied Clients</span>
								</div>
							</div>
						</div>
						<div className="support-area">
							<div className="support-icon">
								<img src={cbIconFive} alt="" />
							</div>
							<div className="support-content">
								<h4>Our 24/7 Emergency Phone Services</h4>
								<h3>
									<a href="#">Call: 123-456-7890</a>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Callback;
