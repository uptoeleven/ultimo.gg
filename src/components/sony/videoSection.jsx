import React, { Component } from "react";
import ReactPlayer from "react-player";

// css
import "../../style/sony/videoContainer.scss";

class VideoSection extends Component {
  state = {};
  openFeature = () => {
    window.open("https://acgl.co.za/ultimogg");
  };
  render() {
    return (
      <div className='sony_video_container'>
        <div className='video'>
          <ReactPlayer
            className='react-player'
            controls={false}
            url='https://www.youtube.com/watch?v=FGapuasK72o'
            width='100%'
          />
        </div>

        <div className='video_content'>
          <p className='text-block'>
            Ultimo GG x RGB Presents The Sony Xperia CoDM Exhibition. The Solos
            Battle Royale exhibition game commences 5th September at 1pm. Enter
            now and play for your chance to win a Sony Xperia 1 II handset! Have
            you got what it takes?
          </p>
          <div className='sign_up_container'>
            <h3>CLICK HERE TO ENTER NOW</h3>
            <div onClick={this.openFeature} className='sign-up_button'></div>
          </div>
        </div>
        <div className='background-one'></div>
      </div>
    );
  }
}

export default VideoSection;
