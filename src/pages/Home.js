import Header from "layout/header/header.style";
import Main from "layout/Main";
import React from "react";

function Home() {
	return (
		<div id="page" className="full-page">
			<Main />

			<a id="backTotop" href="#" className="to-top-icon">
				<i className="fas fa-chevron-up" />
			</a>
			{/* custom search field html */}
			<div className="header-search-form">
				<div className="container">
					<div className="header-search-container">
						<form className="search-form" role="search" method="get">
							<input type="text" name="s" placeholder="Enter your text..." />
						</form>
						<a href="#" className="search-close">
							<i className="fas fa-times" />
						</a>
					</div>
				</div>
			</div>
			{/* header html end */}
		</div>
	);
}

export default Home;
