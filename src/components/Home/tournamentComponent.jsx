import React, { Component } from "react";

// css
import "../../style/homePage/tournamentComponent.scss";
class TournamentComponent extends Component {
  state = {};

  openTournament = (url) => {
    window.open(url);
  };
  render() {
    let closed = this.props.closed === true ? "gradient closed" : "gradient";
    return (
      <div className='tournament_component'>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${this.props.image})` }}>
          <div
            className={closed}
            style={{
              backgroundImage: this.props.gradient,
            }}>
            <div className='start-time'>
              {/* <div className='start-time_header'>
                <span className='title'>Start Time</span>
                <span className='time'>{this.props.time}</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className='text-content'>
          <div className='wrap'>
            <div className='text-content_info'>
              <span>Prize Pool</span>
              <h1 style={{ color: this.props.prizeColor }}>
                {this.props.prize}
              </h1>
            </div>
            <div className='text-content_date'>
              <span className='date'>Date</span>
              <h2>{this.props.date}</h2>
            </div>
          </div>
          <div
            onClick={() => this.openTournament(this.props.link)}
            className='sign-up_button'></div>
        </div>
      </div>
    );
  }
}

export default TournamentComponent;
