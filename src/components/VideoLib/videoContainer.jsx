import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../style/videoLibary/videoContainer.scss";

// components
import Video from "./video";
import VideoFeature from "./videoFeature";

class VideoContainer extends Component {
  state = {
    video: [],
    featured: {},
    showLight: false,
    lightUrl: " ",
  };

  componentDidMount() {
    this.fetchVideos();
  }

  fetchVideos = () => {
    let object = {};
    let currentArray = [];
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL4cp5cthhKaUfA4zKCuVcgUdBGOPV2nce&key=AIzaSyB26uyH-MplPGcr2_b2nuuXbYwf7kO7t_k",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        this.setState({
          video: JSON.parse(result).items,
          featured: {
            id: JSON.parse(result).items[6].snippet.resourceId.videoId,
            title: JSON.parse(result).items[6].snippet.title,
            subHeading:
              JSON.parse(result).items[6].snippet.description.split("!")[0],
            date: JSON.parse(result).items[6].snippet.publishedAt.split("T")[0],
          },
        })
      )
      .catch((error) => console.log("error", error));
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
    console.log(this.state.featured);
    return (
      <>
        <div className='video-section'>
          <VideoFeature
            showLight={this.showLight}
            thumbnail={`http://img.youtube.com/vi/${this.state.featured.id}/0.jpg`}
            heading={this.state.featured.title}
            subHeading={this.state.featured.subHeading}
            date={this.state.featured.date}
            url={`https://www.youtube.com/watch?v=${this.state.featured.id}`}
          ></VideoFeature>
          <div className='content'>
            {Object.keys(this.state.video)
              .reverse()
              .map(
                (video, index) =>
                  this.state.video[video].snippet.title !== "Deleted video" &&
                  this.state.video[video].snippet.title !== "Private video" && (
                    <Video
                      key={index}
                      showLight={this.showLight}
                      url={`https://www.youtube.com/watch?v=${this.state.video[video].snippet.resourceId.videoId}`}
                      thumbnail={`http://img.youtube.com/vi/${this.state.video[video].snippet.resourceId.videoId}/0.jpg`}
                      text={this.state.video[video].snippet.title}
                    />
                  )
              )}
          </div>
        </div>
        <div
          className='lightBox'
          style={{ display: lightBox }}
          onClick={this.showLight}
        >
          <ReactPlayer className='reactplayer-c' url={this.state.lightUrl} />
        </div>
      </>
    );
  }
}

export default VideoContainer;
