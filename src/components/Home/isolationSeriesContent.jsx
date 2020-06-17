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
          "wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan..",
      },
      {
        icon: Badge,
        title: "Big Prizes",
        text:
          "wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan..",
      },
      {
        icon: Stars,
        title: "Top Titles",
        text:
          "wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan..",
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
          {this.state.content.map((content) => (
            <div className='content-block'>
              <img className='icon' src={content.icon}></img>

              <h1 className='title'>{content.title}</h1>
              <p className='text'>{content.text}</p>
            </div>
          ))}
        </div>
        <div className='video-container'>
          <Video />
        </div>
      </div>
    );
  }
}

export default IsolationContent;
