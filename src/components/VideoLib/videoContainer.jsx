import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../style/videoLibary/videoContainer.scss";

// components
import Video from "./video";

class VideoContainer extends Component {
  state = {
    video: [
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
    console.log("hit");
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
          <ReactPlayer width='80%' height='60%' url={this.state.lightUrl} />
        </div>
      </>
    );
  }
}

export default VideoContainer;
