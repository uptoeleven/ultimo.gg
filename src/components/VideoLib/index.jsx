import React, { Component } from "react";

// components
import VideoBanner from "./videoBanner";
import VideoContainer from "./videoContainer";
import Footer from "../Footer/desktopFooter";

class VideoPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ position: "relative" }}>
          <VideoBanner />
          <VideoContainer />
          <Footer />
        </div>
      </>
    );
  }
}

export default VideoPage;
