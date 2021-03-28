import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { images } from "./../constants"

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <h1>Contact</h1>
        <ContactContent>
          <div>
            <div>
              <ul>
                <li>
                  <img src={images.CONTACT_PHONE} alt="contact - phone" />
                  <p>333-4444-5555</p>
                </li>
                <li>
                  <img src={images.CONTACT_EMAIL} alt="contact - email" />
                  <p>info@oishiicuisine.com</p>
                </li>
                <li>
                  <img src={images.CONTACT_WEBSITE} alt="contact - website" />
                  <p>www.oishiicuisine.com</p>
                </li>
                <li>
                  <img src={images.CONTACT_LOCATION} alt="contact - location" />
                  <p>
                    177 Broadway, Lower Manhattan,
                    <br />
                    New York City, NY
                    <br />
                    Verenigde Staten
                  </p>
                </li>
              </ul>
            </div>
            <Map>
              <img
                className="contact_map"
                src={images.NY_MAP}
                alt="New York map"
              />
            </Map>
          </div>
        </ContactContent>
      </ContactContainer>
    </Layout>
  )
}

const ContactContainer = styled.div`
  padding-top: 80px;
  font-family: "Lato";
  font-weight: bold;

  & h1 {
    padding: 70px 0;
    text-align: center;
    font-size: 5em;
    text-transform: uppercase;
    background-color: #000000;
    color: #fff;
  }
`

const ContactContent = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 50px;

  & > div {
    display: flex;

    & > * {
      width: 50%;
    }
  }

  & .contact_map {
    border: 7px solid #000;
    display: block;
    margin: 0 auto;
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding-left: 50px;
    list-style-type: none;

    & li {
      display: flex;
      align-items: center;

      & p {
        margin-left: 50px;
      }
    }
  }

  & p {
    font-size: 2.2em;
  }
`

const Map = styled.div``

export default Contact
