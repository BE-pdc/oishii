import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { images } from "../constants"

const DownloadApp = () => {
  return (
    <Layout>
      <DownloadAppContainer>
        <DownloadAppWrapper>
          <DownloadAppContent>
            <img src={images.BLANK_PHONE} alt="black phone" />
            <img
              className="bp_oishii_app"
              src={images.OISHII_APP}
              alt="oishii app"
            />
            <DownloadAppTextContainer>
              <DownloadAppP>
                Reserveer uw tafel en
                <br />
                bestel op voorhand met de oishii app
              </DownloadAppP>
              <img
                src={images.APP_STORE_BADGE}
                width="300"
                height="89"
                alt="download button"
              />
              <img
                src={images.GOOGLE_PLAY_BADGE}
                width="300"
                height="89"
                alt="download button"
              />
            </DownloadAppTextContainer>
          </DownloadAppContent>
        </DownloadAppWrapper>
      </DownloadAppContainer>
    </Layout>
  )
}

const DownloadAppContainer = styled.div`
  background: url(${images.HERO_OISHII}), rgba(0, 0, 0, 0.3);
  background-blend-mode: overlay;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const DownloadAppWrapper = styled.div`
  width: ${`${window.outerWidth}px`};
  margin: 0 auto;
`

const DownloadAppContent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 80px;
  width: 1500px;
  margin: 0 auto;
  height: 100vh;

  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & .bp_oishii_app {
    left: 305px;
    bottom: 285px;
  }
`

const DownloadAppTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-top: 10px;
  }
`

const DownloadAppP = styled.p`
  display: flex;
  font-size: 1.4em;
  font-family: "Neucha";
  text-align: center;
  color: #fff;
  font-size: 6em;
  margin: 150px 0;
`

export default DownloadApp
