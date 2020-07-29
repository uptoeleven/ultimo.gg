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
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
        date: "2 August 2020",
        heading:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        subHeading:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
      },
      {
        thumbnail: "http://img.youtube.com/vi/N93bfRcptcQ/0.jpg",
        url: "https://www.youtube.com/watch?time_continue=1&v=N93bfRcptcQ",
        text: "lorum ipsum ",
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
