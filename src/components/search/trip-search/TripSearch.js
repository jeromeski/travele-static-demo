import React from "react";
import sliderPattern from "assets/images/slider-pattern.png";

function TripSearch() {
	return (
		<React.Fragment>
			<div className="slider-shape" style={{ backgroundImage: `url(${sliderPattern})` }} />
			<div className="container">
				<div className="trip-search-inner white-bg d-flex">
					<div className="input-group">
						<label> Search Destination* </label>
						<input type="text" name="s" placeholder="Enter Destination" />
					</div>
					<div className="input-group">
						<label> Pax Number* </label>
						<input type="text" name="s" placeholder="No.of People" />
					</div>
					<div className="input-group width-col-3">
						<label> Checkin Date* </label>
						<i className="far fa-calendar" />
						<input
							className="input-date-picker"
							type="text"
							name="s"
							placeholder="MM / DD / YY"
							autoComplete="off"
							readOnly="readonly"
						/>
					</div>
					<div className="input-group width-col-3">
						<label> Checkout Date* </label>
						<i className="far fa-calendar" />
						<input
							className="input-date-picker"
							type="text"
							name="s"
							placeholder="MM / DD / YY"
							autoComplete="off"
							readOnly="readonly"
						/>
					</div>
					<div className="input-group width-col-3">
						<label className="screen-reader-text"> Search </label>
						<input type="submit" name="travel-search" defaultValue="INQUIRE NOW" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TripSearch;
