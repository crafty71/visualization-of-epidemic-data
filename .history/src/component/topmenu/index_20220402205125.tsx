import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";

import { TopTaBbarWapper } from "./TaBbarStyle";

import {
  changeGoodListTypeAction,
  getGoodListAction,
} from "@/views/home/store/actionCreators";

const TaBbar = memo((props) => {
  // state
  const [currentIndex, setcurrentIndex] = useState(0);
  const { TaBbarConfig } = props;

  //redux

  // other hock
  const dispatch = useDispatch();

  const TabClick = (index) => {
    setcurrentIndex(index);
    if (index === 0) {
      dispatch(getGoodListAction("pop", 1));
      dispatch(changeGoodListTypeAction("pop"));
    } else if (index === 1) {
      dispatch(getGoodListAction("sell", 1));
      dispatch(changeGoodListTypeAction("sell"));
    } else if (index === 2) {
      dispatch(changeGoodListTypeAction("new"));
    }
  };
  return (
    <TopTaBbarWapper>
      <div className="top_Tabbar">
        {TaBbarConfig.map((item, index) => {
          return (
            <div
              className="TabbarItem "
              onClick={(e) => TabClick(index)}
              key={index}
            >
              <div>
                <span className={index === currentIndex ? "active" : ""}>
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </TopTaBbarWapper>
  );
});

export default TaBbar;
