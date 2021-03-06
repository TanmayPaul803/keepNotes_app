import React, { useState } from "react";
import Card from "./Card";
import "./App.css";
import CreateIcon from "@material-ui/icons/Create";

const App = () => {
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [list, setLists] = useState([]);

  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getDesc = (e) => {
    setDesc(e.target.value);
  };
  const add = () => {
    if (title === "" || Desc === "") {
      alert("Please fillup input areas!");
    } else {
      setLists(() => {
        return [...list, { title: title, desc: Desc }];
      });
    }
    setTitle("");
    setDesc("");
  };
  const deleteCard = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setLists(newList);
  };

  return (
    <>
      <div className="body">
        <div className="main">
          <div className="input">
            <div className="top_img">
              <CreateIcon className="icon" />
              <h1>Note Pad</h1>
            </div>
            <div className="inputContent">
              <input
                type="text"
                className="title"
                onChange={getTitle}
                placeholder="Enter title"
                value={title}
              />

              <input
                type="text"
                className="desc"
                onChange={getDesc}
                placeholder="Enter Description"
                value={Desc}
              />
              <button className="addButton" onClick={add}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          {list.map((val, valIndex) => {
            return (
              <Card
                title={val.title}
                desc={val.desc}
                key={valIndex}
                Cdel={deleteCard.bind(this, valIndex)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
