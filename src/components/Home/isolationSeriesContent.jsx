import React, { Component } from "react";

// css
import "../../style/homePage/isolationContent.scss";

// component
import Video from "./videoComponent.jsx";

// icon
import Torn from "../../assets/homePage/torn-icon.svg";
import Stars from "../../assets/homePage/starsIcon.svg";
import Badge from "../../assets/homePage/badgeIcon.svg";

class IsolationContent extends Component {
  state = {
    content: [
      {
        icon: Torn,
        title: "Weekly Tournaments",
        text:
          "Weekly elimination tournaments designed to fight the boredom of self-isolation and giving players a chance to compete around the globe across all skill levels. Game modes & tournament structures will rotate weekly to keep things fresh and keep you on your A-game.",
      },
      {
        icon: Badge,
        title: "Big Prizes",
        text:
          "The Isolation Series prize pool consists of huge cash prizes and top spec hardware provided by some of the biggest brands in the industry. We aim to provide the largest prize pools outside of the professional esports circuits.",
      },
      {
        icon: Stars,
        title: "Top Titles",
        text:
          "The Isolation Series will feature the biggest esports titles over a range of genres to make sure everybody has something to play. From Battle Royales and classic fighting games to MOBAs and AAA racing titles, there’s something for everyone and their friends, from 1v1s to 5v5s and more.",
      },
    ],
  };
  render() {
    return (
      <div className='isolation-content'>
        <p className='covid'>
          While everyone is doing their part in the fight against COVID-19 and
          self isolating, we’ve got your back. Online tournaments featuring the
          biggest games and the best prizes.
        </p>
        <div className='isolation-content-info'>
          {this.state.content.map((content, index) => (
            <div key={index} className='content-block'>
              <img className='icon' src={content.icon}></img>

              <h1 className='title'>{content.title}</h1>
              <p className='text'>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default IsolationContent;
