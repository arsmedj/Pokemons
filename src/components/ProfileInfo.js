import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Stats from "./Stats";
import Moves from "./Moves";
const ProfileInfo = ({ profile }) => {
  const { moves, stats, sprites } = profile;

  const getPokePhotos = (sourceObj, result) => {
    Object.keys(sourceObj).forEach((key) => {
      if (key == "front_default") {
        result.push(sourceObj[key]);
      }
      if (typeof sourceObj[key] == "object" && sourceObj[key] !== null) {
        getPokePhotos(sourceObj[key], result);
      }
    });
    return result;
  };

  const isPhotos = profile && getPokePhotos(sprites, []).some((i) => i != null);

  return (
    <div className="profile-info">
      <Tabs>
        <TabList>
          <Tab>Moves</Tab>
          <Tab>Stats</Tab>
          <Tab>Photos</Tab>
        </TabList>
        <TabPanel>
          <Moves moves={moves} />
        </TabPanel>
        <TabPanel>
          <Stats stats={stats} />
        </TabPanel>
        <TabPanel>
          {isPhotos ? (
            <Carousel
              centerMode
              emulateTouch
              showArrows
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="prevBtn"
                  >
                    &larr;
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="nextBtn"
                  >
                    &rarr;
                  </button>
                )
              }
            >
              {getPokePhotos(sprites, []).map((img, idx) => (
                <div className="pokemonImg" key={idx}>
                  <img src={img} />
                </div>
              ))}
            </Carousel>
          ) : (
            <h1>This pokemon has no photos</h1>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProfileInfo;
