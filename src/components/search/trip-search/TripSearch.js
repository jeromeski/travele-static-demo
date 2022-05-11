import React from "react";
import DatePicker from "react-datepicker";
import sliderPattern from "assets/images/slider-pattern.png";
import "react-datepicker/dist/react-datepicker.css";

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
						<DatePicker
							customInput={
								<div>
									<i className="far fa-calendar" style={{ top: 19 }} />
									<input
										className="input-date-picker"
										type="text"
										name="s"
										placeholder="MM / DD / YY"
										autoComplete="off"
										readOnly="readonly"
									/>
								</div>
							}
						/>
					</div>
					<div className="input-group width-col-3">
						<DatePicker
							customInput={
								<div>
									<i className="far fa-calendar" style={{ top: 19 }} />
									<input
										className="input-date-picker"
										type="text"
										name="s"
										placeholder="MM / DD / YY"
										autoComplete="off"
										readOnly="readonly"
									/>
								</div>
							}
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
