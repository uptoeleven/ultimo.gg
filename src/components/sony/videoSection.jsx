import React, { Component } from "react";
import ReactPlayer from "react-player";

// css
import "../../style/sony/videoContainer.scss";

class VideoSection extends Component {
  state = {};
  render() {
    return (
      <div className='sony_video_container'>
        <div className='video'>
          <ReactPlayer
            className='react-player'
            controls={false}
            url='https://www.youtube.com/watch?v=U1EketBgL0s'
            width='100%'
          />
        </div>

        <div className='video_content'>
          <p className='text-block'>
            Ultimo GG x RGB Presents The Sony Xperia CoDM Exhibition. The Solos
            Battle Royale exhibition game commences 22nd August at TIME TBC.
            Enter now and play for your chance to win a Sony Xperia 1 II
            handset! Have you got what it takes?
          </p>
          <div className='sign_up_container'>
            <h3>CLICK HERE TO ENTER NOW</h3>
            <div className='sign-up_button'></div>
          </div>
        </div>
        <div className='background-one'></div>
      </div>
    );
  }
}

export default VideoSection;
