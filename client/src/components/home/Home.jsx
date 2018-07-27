import React from 'react';
import GMap from './GMap.jsx';
import PropTypes from 'prop-types';
import VenueList from './VenueList.jsx';
import axios from 'axios';
import { withRouter } from "react-router-dom";

/**
 * @description gets the users account data, then gets nearby venues
 * and plots them on a map, also outputs a list of venues to the right of the map
 * @param toggleAuth function that is bound to parent that changes the state of loggedIn to arg[0]
 * @param userInfo object containing data on the user
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // loggedIn: this.props.location.state.userInfo,
      position : { lat: -34.397, lng: 150.644 },
      nearbyVenues : [
      {
        position : { lat: -34.197, lng: 150.644 },
        notes : 'This is a wonderful venue'
      },
      {
        position : { lat: -34.297, lng: 150.744 },
        notes : 'So is this Venue'
      },
      {
        position : { lat: -34.497, lng: 150.544 },
        notes : 'This is also a great place'
      },
      {
        position : { lat: -34.197, lng: 150.844 },
        notes : 'I really want to go here'
      },
      {
        position : { lat: -34.197, lng: 150.444 },
        notes : 'This is the best of all of them'
      }
      ]
    };
    // this.toggleAuth = props.toggleAuth ? props.toggleAuth : this.props.location.state.toggleAuth;
  }

  componentWillMount() {
    // axios.get('/venues')
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }


  /**
   * @description takes the nearby venues and the user data and generates a map centered on the users home with nearby 
   * points plotted around it
   */
  render() {
    if(this.state.position === undefined) {
      return (
      <div>
        <h1>Homepage</h1>
        <h2>Loading</h2>
      </div>
      )
    } else {
      return (
      <div className="row">
        <div className="venuemap" >
        {/**
          * A WARNING FOR ALL YE WHO ENTER HERE.  THE google-maps-react docs are poorly written and 
          * it was not fun to set this up.  Unless you wish to have first hand experience understanding why 
          * people should document code they upload for others to use I would avoid messing with the GMap component
          */}
          <GMap position={this.state.position} venues={this.state.nearbyVenues} />
        </div>
        <div><div className="venuecolumn"><VenueList venues={this.state.nearbyVenues}/></div></div>
      </div>
      )
    }
  }
}

// Home.propTypes = {
//   userInfo: PropTypes.object.isRequired,
//   toggleAuth: PropTypes.func.isRequired,
// }
export default withRouter(Home);

