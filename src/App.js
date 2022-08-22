import React, { Component } from 'react';
import './App.css';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import { MyNodeComponent } from './MyNodeComponent';
import { useDrop } from 'react-dnd';

export default function App() {

  const initechOrg = {
    id: 1,
    name: "Mahabir P.",
    children: [
      {
        id: 1,
        name: "Hemanth N",
        children: [
          {
            id: 1,
            name: "Himanshu",
            children : [
              {
                id:1,
                name: "Gaurav"
              }
            ]
          },
          {
            id: 2,
            name: "Pranav",
            children: [
              {
                id:1,
                name:"kapil"
              }
            ]
          },
        ],
      },
      // {
      //   id: 2,
      //   name: "Manager 2",
      // },
      // {
      //   id: 3,
      //   name: "Manager 3",
      // },
    ],
  };
const [{ isOver }, drop] = useDrop(() => ({
  accept: "list",
  drop: (item, monitor) => addImageToBoard(item, monitor),
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  }),
}));
  const addImageToBoard = (item, monitor) => {
    console.log(item, monitor);
    // const pictureList = PictureList.filter((picture) => id === picture.id);
    // setBoard((board) => [...board, pictureList[0]]);
  };
  return(
      <div ref={drop} className="App" id="initechOrgChart">
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
  )
}
