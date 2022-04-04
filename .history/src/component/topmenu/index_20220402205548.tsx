import React, { memo, useState } from "react";

import { TopTaBbarWapper } from "./indexStyls";

const TaBbar = memo((props) => {
  // state
  const [currentIndex, setcurrentIndex] = useState(0);
  const { TaBbarConfig } = props;

  //redux

  // other hock

  const TabClick = (index: number) => {
    setcurrentIndex(index);
  };
  return (
    <TopTaBbarWapper>
      <div className="top_Tabbar">
        {TaBbarConfig.map((item: any, index: number) => {
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
