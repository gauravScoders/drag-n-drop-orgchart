import React from 'react'
import { useDrag } from 'react-dnd';

export const MyNodeComponent = ({node }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "list",
    item: node,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="initechNode"
      //   onClick={() => alert("Hi my real name is: " + node.actor)}
    >
      {node.name}
    </div>
  );
};
