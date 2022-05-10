import React from "react";
import { SiteLoaderWrapper } from "./site-loader.style";
import loader from "../../assets/images/loader1.gif";

function SiteLoader() {
	return (
		<SiteLoaderWrapper id="siteLoader" className="site-loader">
			<div className="preloader-content">
				<img src={loader} alt="site loader" />
			</div>
		</SiteLoaderWrapper>
	);
}

export default SiteLoader;
