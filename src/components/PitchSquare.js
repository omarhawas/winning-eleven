import React from "react";
import { useDrop } from "react-dnd";

const PitchSquare = (children) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "PLAYER",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div
      ref={drop}
      role="Space"
      style={{ backgroundColor: isOver ? "red" : "white" }}
    >
      {children}
    </div>
  );
};

export default PitchSquare;
