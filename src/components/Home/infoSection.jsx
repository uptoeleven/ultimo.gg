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
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Bootcamp,
        title: "BOOTCAMP",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Torn,
        title: "TOURNAMENTS",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: LeaderBoard,
        title: "LEADERBOARD",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Prizes,
        title: "PRIZES",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Team,
        title: "OFFICIAL ESPORTS TEAM",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Live,
        title: "LIVE EVENTS",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
      },
      {
        icon: Pad,
        title: "TOURNAMENT PLATFORM",
        text: "Lorum Ipsum dolor sit amet, cpmsecletir",
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
