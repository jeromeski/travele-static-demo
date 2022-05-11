import React, { useEffect, useState } from "react";
import $ from "jquery";
import bannerOne from "assets/images/slider-banner-1.jpg";
import bannerTwo from "assets/images/slider-banner-2.jpg";
import { initSlick } from "assets/vendor/slick/slick";
import { Button } from "components/buttons/button.style";

function Slider() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initSlick();
		setInit(true);
	}, []);

	useEffect(() => {
		if (init) {
			$(".home-slider").slick({
				dots: false,
				infinite: true,
				autoplay: false,
				speed: 1200,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: false
			});
		}
	}, [init]);

	return (
		<div className="home-slider">
			<div className="home-banner-items">
				<div
					className="banner-inner-wrap"
					style={{
						backgroundImage: `url(${bannerOne})`
					}}
				/>
				<div className="banner-content-wrap">
					<div className="container">
						<div className="banner-content text-center">
							<h2 className="banner-title">TRAVELLING AROUND THE WORLD</h2>
							<p>
								Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque
								donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit.
								Minus exercitationem wisi.
							</p>
							<Button to="/" className="button-primary">
								CONTINUE READING
							</Button>
						</div>
					</div>
				</div>
				<div className="overlay" />
			</div>
			<div className="home-banner-items">
				<div
					className="banner-inner-wrap"
					style={{
						backgroundImage: `url(${bannerTwo})`
					}}
				/>
				<div className="banner-content-wrap">
					<div className="container">
						<div className="banner-content text-center">
							<h2 className="banner-title">EXPERIENCE THE NATURE'S BEAUTY</h2>
							<p>
								Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque
								donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit.
								Minus exercitationem wisi.
							</p>
							<Button to="/" className="button-primary">
								CONTINUE READING
							</Button>
						</div>
					</div>
				</div>
				<div className="overlay" />
			</div>
		</div>
	);
}

export default Slider;
