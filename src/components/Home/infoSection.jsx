import React, { Component } from "react";

// CSS
import "../../style/homePage/info.scss";

// icons
import Intuative from "../../assets/homePage/intuative-icon.svg";
import Bootcamp from "../../assets/homePage/Bootcamp-icon.svg";
import Torn from "../../assets/homePage/torn-icon.svg";
import LeaderBoard from "../../assets/homePage/leaderboard-icon.svg";
import Prizes from "../../assets/homePage/prizes-icon.svg";
import Team from "../../assets/homePage/team-icon.svg";
import Live from "../../assets/homePage/LiveEvent-icon.svg";
import Pad from "../../assets/homePage/pad-icon.svg";
class InfoSection extends Component {
  state = {
    stats: [
      {
        icon: Intuative,
        title: "INTUATIVE PLATFORM",
        text:
          "Our intuitive platform makes it easy for gamers to play their favourite games, win prizes and become part of a thriving global community. ",
      },
      {
        icon: Pad,
        title: "ADRENALINE-FUELED LEAGUES",
        text:
          "Become a gaming legend by competing in our global Ultimo Amateur Gaming League and stake your claim for the top of our leader boards. History awaits. ",
      },
      {
        icon: Torn,
        title: "WEEKLY TOURNAMENTS",
        text:
          "Prove your skill in combat in our weekly tournaments, featuring all the biggest and best titles in gaming.  ",
      },
      {
        icon: Bootcamp,
        title: "BOOTCAMP",
        text:
          "Ultimo’s leader boards make it easy for gamers to chart their progress and taste esports glory by seeing their name in lights. ",
      },
      {
        icon: Prizes,
        title: "KILLER PRIZES",
        text:
          "Live to events replicate the rush of adrenaline found in our online tournaments.",
      },
      {
        icon: LeaderBoard,
        title: "LEADERBOARD",
        text:
          "Ultimo’s leader boards make it easy for gamers to chart their progress and taste esports glory by seeing their name in lights.",
      },

      {
        icon: Team,
        title: "NEWS AND CONTENT",
        text:
          "All the best gaming news from around the world, the latest reviews and awesome content.",
      },
      {
        icon: Live,
        title: "LIVE EVENTS",
        text:
          "Live to events replicate the rush of adrenaline found in our online tournaments.",
      },
    ],
  };
  render() {
    return (
      <div className='info'>
        <div className='info-container'>
          {this.state.stats.map((stat, index) => (
            <div key={index} className='info_content'>
              <div className='info_content-image'>
                <img src={stat.icon} alt='intuative'></img>
              </div>
              <div className='info_content-title'>
                <span>{stat.title}</span>
              </div>
              <div className='info_content-text'>
                <span>{stat.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default InfoSection;
