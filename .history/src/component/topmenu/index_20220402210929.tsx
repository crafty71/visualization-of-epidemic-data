import { memo, useState } from "react";

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
