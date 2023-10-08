import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
const Video = styled.video`
  height: 100%;
`;
export const DisneyBanner = () => {
  const handleVideoStop = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    if (event.currentTarget.currentTime > 8) {
      event.currentTarget.currentTime = 8;
      event.currentTarget.pause();
    }
  };
  return (
    <>
      <Wrapper>
        <Video
          onTimeUpdate={handleVideoStop}
          controls={false}
          autoPlay={true}
          key="media"
        >
          <source
            src="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056497-disney.mp4"
            type="video/mp4"
          />
        </Video>
      </Wrapper>
    </>
  );
};
