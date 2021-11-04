import React, { Component } from "react";
import TournamentComponent from "../Home/tournamentComponent";
//  css
import "../../style/homePage/tournamentSection.scss";

import ULTGGseries from "../../assets/Tournaments/series-featured.jpg"
import WarzoneFeature from "../../assets/Tournaments/warzone.jpeg";
import Rocket from "../../assets/Tournaments/rocket.jpg";
import FortniteNew from "../../assets/Tournaments/fortnite.jpeg";
import Fortnite from "../../assets/Tournaments/fortnite.png";
import Fifa from "../../assets/Tournaments/fifa.png";
import Warzone from "../../assets/Tournaments/warzone.png";
import WarefairW from "../../assets/Tournaments/WarefareWednesday.png";
import Sony from "../../assets/sony/xperiacodTourn.jpg";
import warZoneMonth from "../../assets/Tournaments/warzone-monthly-league.png";
import RocketNew from "../../assets/Tournaments/rocket-league-n.png";
import AFC from "../../assets/Tournaments/e-Ultimo-Thumbnail.jpg";
import BTOB from "../../assets/Tournaments/btob-thumbnail.png";
// winner image
import FifaWinner from "../../assets/winners/iso-fifa.png";
import IsoWarzone from "../../assets/winners/iso-warzone.png";
import IsoFortnite from "../../assets/winners/iso-fortnite.png";
import WarzoneTrio from "../../assets/winners/warzone-trio.png";
import IsoRocket from "../../assets/winners/rocket-league.png";
import SonyWinner from "../../assets/winners/mrjuicy.png";
import FortniteWinner from "../../assets/winners/Over.png";
import WarzoneMonthly from "../../assets/winners/Ali123.png";
import WarfairWed from "../../assets/winners/AliSheikhn159.png";
import RocketLeague from "../../assets/winners/Smashy.png";
import FifaWinnerTwo from "../../assets/winners/HarryJH.png";
class Tournaments extends Component {
  state = {
    tournament: [
      {
        image: ULTGGseries,
        date: "13th Nov '21 - 17th Apr '22",
        time: "01:00:00",
        prize: "Total Prize Pool: £50,000",
        prizeColor: "#9005E3",
        smaller: true,
        link: "https://www.challengermode.com/s/ultimogg",
      },
      {
        image: BTOB,
        date: "16th - 17th Oct",
        time: "01:00:00",
        prize: "£1750",
        prizeColor: "#9005E3",
        smaller: true,
        link: "https://www.challengermode.com/invite/9pDFLw",
      },
      {
        image: AFC,
        date: "14th - 15th Nov",
        time: "01:00:00",
        prize: "AFCB Signed Merch",
        prizeColor: "#9005E3",
        smaller: true,
        winner: FifaWinnerTwo,
        link: "https://www.challengermode.com/s/TheWeekendClash",
      },
      {
        image: warZoneMonth,
        date: "Every Weekend",
        time: "01:00:00",
        prize: "2400CP",
        prizeColor: "#9005E3",
        winner: WarzoneMonthly,
        link: "https://discord.com/invite/e9p5YZE",
      },
      {
        image: RocketNew,
        date: "Every Monday",
        time: "Monday",
        prize: "3000 Credits",
        prizeColor: "#9005E3",
        winner: RocketLeague,
        smaller: true,
        link: "https://ultimogg.challonge.com/tournaments",
      },
      {
        image: WarefairW,
        date: "Every Wednesday",
        time: "01:00:00",
        prize: "£80",
        prizeColor: "#5FF5F9",
        winner: WarfairWed,
        link: "https://ultimogg.challonge.com/tournaments",
      },

      {
        image: Sony,
        date: "05/09/20",
        time: "01:00:00",
        prize: "Sony Xperia 1 II",
        prizeColor: "#9005E3",
        winner: SonyWinner,
        link: "https://acgl.co.za/ultimogg",
        smaller: true,
      },
      {
        image: FortniteNew,
        date: "28/08/20",
        time: "01:00:00",
        prize: "£50",
        prizeColor: "#9005E3",
        winner: FortniteWinner,
        link: "https://www.toornament.com/en_GB/tournaments/3787726097955209216/information",
      },
      {
        image: WarzoneFeature,
        date: "14/08/20",
        time: "01:00:00",
        prize: "£90",
        prizeColor: "#5FF5F9",
        link: "https://www.toornament.com/en_GB/tournaments/3788523690568450048/information",
        winner: WarzoneTrio,
      },
      {
        image: Rocket,
        date: "15/08/20",
        time: "01:00:00",
        prize: "£50",
        prizeColor: "#9005E3",

        link: "https://www.toornament.com/en_GB/tournaments/3787723761044373504/information",
        winner: IsoRocket,
      },
      {
        image: Fortnite,
        date: "03/05/20",
        time: "01:00:00",
        prize: "£600",
        prizeColor: "#5FF5F9",

        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.6), rgba(18, 239, 44, 0.6) )",
        winner: IsoFortnite,
      },
      {
        image: Fifa,
        date: "02/05/20",
        time: "00:00:00",
        prize: "£1600",
        prizeColor: "#5FF5F9",

        gradient:
          "linear-gradient( rgba(252, 126, 0, 0.6), rgba(248, 191, 0, 0.6) )",
        winner: FifaWinner,
      },
      {
        image: Warzone,
        date: "18/04/20",
        time: "00:00:00",
        prize: "£700",
        prizeColor: "#9005E3",
        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.7), rgba(179, 18, 239, 0.75))",

        winner: IsoWarzone,
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
                gradient={tournament.gradient}
                closed={tournament.closed}
                link={tournament.link}
                smaller={tournament.smaller}
                winner={tournament.winner}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tournaments;
