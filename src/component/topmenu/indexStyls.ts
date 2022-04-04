import styled from "styled-components";

export const TopTaBbarWapper = styled.div`
  a {
    &:hover,
    &.active {
      text-decoration: none;
    }
  }
  .top_Tabbar {
    height: 51px;
    line-height: 51px;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
  }

  .top_Tabbar .TabbarItem .active {
    color: pink;
    padding-bottom: 10px;
    border-bottom: 2px solid pink;
  }

  .Tabbar .TabbarItem span {
    text-align: center;
    vertical-align: middle;
  }
`;
