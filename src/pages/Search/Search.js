import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../utility/Spinner/Spinner";
import Activities from "../../components/Activities/Activities";
import Cities from "../../components/Cities/Cities";
import Venues from "../../components/Venues/Venues";
import "./Search.css";

const Search = (props) => {
    const [activities, setActivities] = useState([]);
    const [cities, setCities] = useState([]);
    const [venues, setVenues] = useState([]);
    const [apiResponse, setApiResponse] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const searchTerm = props.match.params.searchTerm;
            const url = `${process.env.REACT_APP_API_URL}/search/${searchTerm}`;
            const response = await axios.get(url);

            setActivities(response.data.activities);
            setCities(response.data.cities);
            setVenues(response.data.venues);
            setApiResponse(true);
        };
        fetchData();
    }, []);

    if (!apiResponse) {
        return <Spinner />;
    }

    return (
        <div className="container-fluid lower-fold">
            <div className="row">
                <div className="col s12">
                    <Cities
                        cities={cities}
                        header="Cities Matching Your Search"
                    />
                </div>
                <div className="col s12">
                    <Activities
                        activities={activities}
                        header="Activities Matching Your Search"
                    />
                </div>
                <div className="col s12">
                    <Venues
                        venues={venues}
                        header="Venues Matching Your Search"
                    />
                </div>
            </div>
        </div>
    );
};

// class Search extends Component {
//     state = {
//         activities: [],
//         cities: [],
//         venues: [],
//         apiResponse: false,
//     };

//     async componentDidMount() {
//         const searchTerm = this.props.match.params.searchTerm;
//         const url = `${process.env.REACT_APP_API_URL}/search/${searchTerm}`;
//         const response = await axios.get(url);

//         this.setState({
//             activities: response.data.activities,
//             cities: response.data.cities,
//             venues: response.data.venues,
//             apiResponse: true,
//         });
//     }

//     render() {
//         if (!this.state.apiResponse) {
//             return <Spinner />;
//         }
//         return (
//             <div className="container-fluid lower-fold">
//                 <div className="row">
//                     <div className="col s12">
//                         <Cities
//                             cities={this.state.cities}
//                             header="Cities Matching Your Search"
//                         />
//                     </div>
//                     <div className="col s12">
//                         <Activities
//                             activities={this.state.activities}
//                             header="Activities Matching Your Search"
//                         />
//                     </div>
//                     <div className="col s12">
//                         <Venues
//                             venues={this.state.venues}
//                             header="Venues Matching Your Search"
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Search;
