import React, { Component } from "react";

// component
import TournamentComponent from "./tournamentComponent";

// css
import "../../style/homePage/tournamentSection.scss";

// images
import Fortnite from "../../assets/homePage/fortnite-image.png";

import CupLogo from "../../assets/Nav/Tournaments.svg";

class TournamentSection extends Component {
  state = {
    tournament: [
      {
        image: Fortnite,
        date: "07 Febuary 2020",
        time: "36:31:28",
        prize: "1000000",
        prizeColor: "yellow",
      },
      {
        image: Fortnite,
        date: "07 Febuary 2020",
        time: "36:31:28",
        prize: "1000000",
        prizeColor: "green",
      },
      {
        image: Fortnite,
        date: "07 Febuary 2020",
        time: "36:31:28",
        prize: "1000000",
        prizeColor: "yellow",
      },
      {
        image: Fortnite,
        date: "07 Febuary 2020",
        time: "36:31:28",
        prize: "1000000",
        prizeColor: "green",
      },
    ],
  };
  render() {
    return (
      <div className='tournament'>
        <h1 className='tournament_title'>TOURNAMENTS</h1>

        <div className='tournament_content'>
          {this.state.tournament.map((tournament) => (
            <div className='container'>
              <TournamentComponent
                image={tournament.image}
                date={tournament.date}
                time={tournament.time}
                prize={tournament.prize}
                prizeColor={tournament.prizeColor}
              />
            </div>
          ))}
        </div>

        <div className='tournament_seemore'>
          <span>SEE MORE TOURNAMENTS</span>
          <img className='cup' src={CupLogo} alt='torn' />
          <span>TOURNAMENTS</span>
        </div>
      </div>
    );
  }
}

export default TournamentSection;
