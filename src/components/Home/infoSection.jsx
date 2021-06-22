import React, { Component } from "react";

// CSS
import "../../style/homePage/info.scss";

// icons
import Intuative from "../../assets/homePage/intuative-icon.svg";
import Bootcamp from "../../assets/homePage/Bootcamp-icon.svg";
import Torn from "../../assets/homePage/torn-icon.svg";
import LeaderBoard from "../../assets/homePage/leaderboard-icon.svg";
import Prizes from "../../assets/homePage/prizes-icon.svg";
import Team from "../../assets/homePage/news-and-content.svg";
import Live from "../../assets/homePage/LiveEvent-icon.svg";
import Pad from "../../assets/homePage/pad-icon.svg";
import FeatureIcon from "../../assets/homePage/ULTGG-Token.svg";
import IndieDev from "../../assets/homePage/indie-devs.svg";
import AmtoPro from "../../assets/homePage/am-to-pro.svg";
import NFT from "../../assets/homePage/nfts.svg";
import StreamingPlatform from "../../assets/homePage/streaming-platform.svg";

class InfoSection extends Component {
  state = {
    stats: [
      {
        icon: Intuative,
        title: "Intuitive PLATFORM",
        text: "Our Intuitive platform makes it easy for gamers to play their favourite games, win prizes and become part of a thriving global community. ",
      },
      {
        icon: Pad,
        title: "ADRENALINE-FUELED LEAGUES",
        text: "Become a gaming legend by competing in our Adrenaline-Fueled Leagues and stake your claim for the top of our leader boards. History awaits. ",
      },
      {
        icon: AmtoPro,
        title: "AM TO PRO",
        text: "Ultimo GG’s platform is designed to unearth raw, exciting esports talent, and provides a one-of-a-kind, complete framework to enable the stars of tomorrow to shine under the Ultimo GG banner.",
      },
      {
        icon: NFT,
        title: "NFTS",
        text: "The Ultimo GG platform NFT marketplace will give creators the chance to not only sell NFTS but create new ones directly from the platform itself. Just delivered the killing blow to win a tournament? Capture that moment and sell it with Ultimo GG.",
      },
      {
        icon: StreamingPlatform,
        title: "STREAMING PLATFORM",
        text: "The Ultimo GG platform NFT marketplace will give creators the chance to not only sell NFTS but create new ones directly from the platform itself. Just delivered the killing blow to win a tournament? Capture that moment and sell it with Ultimo GG.",
      },
      {
        icon: Bootcamp,
        title: "BOOTCAMP",
        text: "Learn from player and coaches in our bootcamps, one-on-one training and tutorials.",
      },
      {
        icon: Torn,
        title: "WEEKLY TOURNAMENTS",
        text: "Prove your skill in combat in our weekly tournaments, featuring all the biggest and best titles in gaming.  ",
      },

      {
        icon: Prizes,
        title: "KILLER PRIZES",
        text: "Killer prizes from top-end hardware to big money for competing in our tournaments.",
      },
      {
        icon: LeaderBoard,
        title: "LEADERBOARDS",
        text: "Ultimo’s leader boards make it easy for gamers to chart their progress and taste esports glory by seeing their name in lights.",
      },

      {
        icon: Team,
        title: "NEWS AND CONTENT",
        text: "All the best gaming news from around the world, the latest reviews and awesome content.",
      },
      {
        icon: Live,
        title: "LIVE EVENTS",
        text: "Live events replicate the rush of adrenaline found in our online tournaments.",
      },

      {
        icon: IndieDev,
        title: "INDIE DEVS",
        text: "Ultimo GG is committed to supporting independent game devs, and will build a platform from which devs can launch careers, not just titles.",
      },
    ],
  };
  render() {
    return (
      <div className='info'>
        <div className='info-container'>
          <div class='feature-icon'>
            <img src={FeatureIcon}></img>
            <div className='feature-icon_content_title'>
              <span>ULTGG TOKEN</span>
            </div>
            <div className='feature-icon_content_text'>
              <span>
                The ULTGG token is the beating heart of Ultimo GG, a currency
                used across our entire ecosystem and can be exchanged for real
                money
              </span>
            </div>
          </div>
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
