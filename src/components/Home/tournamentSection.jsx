import React, { Component } from "react";
import { Link } from "react-router-dom";
// component
import TournamentComponent from "./tournamentComponent";

// css
import "../../style/homePage/tournamentSection.scss";

// images
import Fortnite from "../../assets/Tournaments/fortnite.png";
import Fifa from "../../assets/Tournaments/fifa.png";
import Warzone from "../../assets/Tournaments/warzone.png";

import CupLogo from "../../assets/Nav/Tournaments.svg";

class TournamentSection extends Component {
  state = {
    tournament: [
      {
        image: Fortnite,
        date: "03/05/20",
        time: "36:31:28",
        prize: "£600",
        prizeColor: "Green",
        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.6), rgba(18, 239, 44, 0.6) )",
      },
      {
        image: Fifa,
        date: "02/05/20",
        time: "36:31:28",
        prize: "£1600",
        prizeColor: "orange",
        gradient:
          "linear-gradient( rgba(252, 126, 0, 0.6), rgba(248, 191, 0, 0.6) )",
      },
      {
        image: Warzone,
        date: "18/04/20",
        time: "36:31:28",
        prize: "£700",
        prizeColor: "purple",
        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.7), rgba(179, 18, 239, 0.75))",
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
        <div className='tournament_background'></div>
        <h1 className='tournament_title'>TOURNAMENTS</h1>

        <div className='tournament_content'>
          {this.state.tournament.map((tournament, index) => (
            <div className='container' key={index}>
              <TournamentComponent
                image={tournament.image}
                date={tournament.date}
                time={tournament.time}
                prize={tournament.prize}
                prizeColor={tournament.prizeColor}
                gradient={tournament.gradient}
              />
            </div>
          ))}
        </div>

        <div className='tournament_seemore'>
          <Link to='./tournaments'>
            <span className='title'>SEE MORE TOURNAMENTS</span>
          </Link>
          <img className='cup' src={CupLogo} alt='torn' />
          <span className='heading'>TOURNAMENTS</span>
        </div>
      </div>
    );
  }
}

export default TournamentSection;
