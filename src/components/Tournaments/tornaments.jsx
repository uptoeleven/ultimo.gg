import React, { Component } from "react";
import TournamentComponent from "../Home/tournamentComponent";
//  css
import "../../style/homePage/tournamentSection.scss";
import Fortnite from "../../assets/homePage/fortnite-image.png";

class Tornaments extends Component {
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
      </div>
    );
  }
}

export default Tornaments;
