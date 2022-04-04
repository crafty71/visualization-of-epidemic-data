import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

import { TopTaBbarWapper } from "./indexStyls";

import topTabbarconfig from "@/config/topTabbarconfig";

const TaBbar = memo(() => {
  // state
  const [currentIndex, setcurrentIndex] = useState(0);

  //redux

  // other hock

  const TabClick = (index: number) => {
    setcurrentIndex(index);
  };
  return (
    <TopTaBbarWapper>
      <div className="top_Tabbar">
        {topTabbarconfig.map((item: any, index: number) => {
          return (
            <NavLink to={item.link} key={index}>
              <div className="TabbarItem " onClick={(e) => TabClick(index)}>
                <div>
                  <span className={index === currentIndex ? "active" : ""}>
                    {item.title}
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </TopTaBbarWapper>
  );
});

export default TaBbar;
