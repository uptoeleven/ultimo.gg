import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../style/videoLibary/videoContainer.scss";

// components
import Video from "./video";
import VideoFeature from "./videoFeature";

class VideoContainer extends Component {
  state = {
    video: [
      {
        thumbnail: "http://img.youtube.com/vi/U1EketBgL0s/0.jpg",
        url: "https://www.youtube.com/watch?v=U1EketBgL0s",
        text: "Welcome to Ultimo GG",
        date: "30 July 2020",
        heading:
          "Welcome to Ultimo GG, a game-changing esports tournament platform",
        subHeading:
          "Thanks for watching! Be sure to subscribe and hit that notification button to make sure you're up to date with everything in Utimo's world!",
      },
      {
        thumbnail: "http://img.youtube.com/vi/tokYYeXdZ10/0.jpg",
        url: "https://www.youtube.com/watch?v=tokYYeXdZ10",
        text: "Xbox Games Showcase! Weekly Intel July Week 4",
      },
      {
        thumbnail: "http://img.youtube.com/vi/UQfK-63-twA/0.jpg",
        url: "https://www.youtube.com/watch?v=UQfK-63-twA",
        text: "Ghost of Tsushima: Review",
      },
      {
        thumbnail: "http://img.youtube.com/vi/jFwUdQdLgUE/0.jpg",
        url: "https://www.youtube.com/watch?v=jFwUdQdLgUE",
        text: "Halo 3 PC FINALLY released! - Weekly Intel July Week 3",
      },
      {
        thumbnail: "http://img.youtube.com/vi/8AC293VBSDM/0.jpg",
        url: "https://www.youtube.com/watch?v=8AC293VBSDM",
        text: "The Last of Us 2: The Review (and gameplay)",
      },
      {
        thumbnail: "http://img.youtube.com/vi/rNzTXJAIiEM/0.jpg",
        url: "https://www.youtube.com/watch?v=rNzTXJAIiEM",
        text: "Call of Duty Season 4 New Features: Review by Gus & Jay",
      },
    ],
    showLight: false,
    lightUrl: " ",
  };

  showLight = (url) => {
    if (this.state.showLight === false) {
      this.setState({
        showLight: true,
        lightUrl: url,
      });
    } else {
      this.setState({
        showLight: false,
        lightUrl: "",
      });
    }
  };
  render() {
    let lightBox = this.state.showLight === false ? "none" : "flex";

    return (
      <>
        <div className='video-section'>
          <VideoFeature
            showLight={this.showLight}
            thumbnail={this.state.video[0].thumbnail}
            heading={this.state.video[0].heading}
            subHeading={this.state.video[0].subHeading}
            date={this.state.video[0].date}
            url={this.state.video[0].url}></VideoFeature>
          <div className='content'>
            {this.state.video.map((video) => (
              <Video
                showLight={this.showLight}
                url={video.url}
                thumbnail={video.thumbnail}
                text={video.text}
              />
            ))}
          </div>
        </div>
        <div
          className='lightBox'
          style={{ display: lightBox }}
          onClick={this.showLight}>
          <ReactPlayer className='reactplayer-c' url={this.state.lightUrl} />
        </div>
      </>
    );
  }
}

export default VideoContainer;
