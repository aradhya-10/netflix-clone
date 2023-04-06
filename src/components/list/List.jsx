import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useState, useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (dir) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(dir);
    if (dir === "left" && slideNumber > 0) {
      // setSlideNumber = (x) => {x+1}
      setSlideNumber(slideNumber - 1);
      console.log(distance);
      listRef.current.style.transform = `translateX(${
        -230 * slideNumber + 230
      }px )`;
    } else if (dir === "right" && slideNumber < 7) {
      listRef.current.style.transform = `translateX(${
        -230 * (slideNumber + 1)
      }px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
		  style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
