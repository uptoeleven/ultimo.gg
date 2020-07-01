import React, { Component } from "react";

// css
import "../../style/homePage/tournamentComponent.scss";
class TournamentComponent extends Component {
  state = {};
  render() {
    return (
      <div className='tournament_component'>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${this.props.image})` }}>
          <div className='start-date'>
            <div className='start-date_header'>
              <span className='title'>Start Time</span>

              <span className='time'>{this.props.time}</span>
            </div>

            <span className='start-date_date'>{this.props.date}</span>
          </div>
        </div>
        <div className='text-content'>
          <div className='text-content_info'>
            <span>Prize Pool</span>
            <h1 style={{ color: this.props.prizeColor }}>{this.props.prize}</h1>
          </div>
          <div className='sign-up_button'></div>
        </div>
      </div>
    );
  }
}

export default TournamentComponent;
