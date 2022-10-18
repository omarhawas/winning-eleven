import React from "react";
import pitch from "./img/pitch.png";
import Player from "./Player";
import PitchSquare from "./PitchSquare";

const Pitch = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${pitch})`,
          height: 525,
          width: 900,
          position: "relative",
          backgroundRepeat: "round",
          backgroundColor: "#588f58",
        }}
      >
        {/* <PitchSquare>
          <Player />
        </PitchSquare> */}
      </div>
    </div>
  );
};

export default Pitch;
