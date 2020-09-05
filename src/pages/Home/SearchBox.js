import React from "react";

import useControlledInput from "../../hooks/useControlledInput";
import "./SearchBox.css";

const SearchBox = (props) => {
    // Using custom-hooks
    const where = useControlledInput(""); // where.value, where.onChange
    const checkIn = useControlledInput(""); // checkIn.value, checkIn.onChange
    const checkOut = useControlledInput(""); // checkOut.value, checkOut.onChange
    const guests = useControlledInput(1); // guests.value, guests.onChange

    const submitSearch = (e) => {
        e.preventDefault();
        props.history.push(`/search/${where.value}`);
    };

    return (
        <div className="home-search-box col m4">
            <h1>Book unique places to stay and things to do.</h1>

            <form className="search-box-form" onSubmit={submitSearch}>
                {/* Input box for location name */}
                <div className="col m12">
                    <div className="form-label">Where</div>
                    <div className="input-field" id="where">
                        <input
                            type="text"
                            className="browser-default"
                            placeholder="Anywhere"
                            {...where}
                        />
                    </div>
                </div>

                {/* Date picker for check in date */}
                <div className="col m6">
                    <div className="form-label">Check-In</div>
                    <div className="input-field" id="check-in">
                        <input
                            type="date"
                            className="browser-default"
                            {...checkIn}
                        />
                    </div>
                </div>
                {/* Date picker for check out date */}
                <div className="col m6">
                    <div className="form-label">Check-Out</div>
                    <div className="input-field" id="check-in">
                        <input
                            type="date"
                            className="browser-default"
                            {...checkOut}
                        />
                    </div>
                </div>

                {/* Number box for entering no. of guests */}
                <div className="col m12">
                    <div className="form-label">Guests</div>
                    <div className="input-field" id="where">
                        <input
                            type="number"
                            className="browser-default"
                            placeholder="Number of guests"
                            {...guests}
                        />
                    </div>
                </div>

                {/* Submit button */}
                <div className="col m12 submit-btn">
                    <div className="input-field" id="submit-btn">
                        <input
                            className="btn-large waves-effect waves-light red accent-2"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBox;
