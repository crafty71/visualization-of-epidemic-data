import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

// const changeDomesticDataAction = (res: any) => ({
//   type: actionTypes.CHANGE_STATIC_GRADE,
//   domesticDatas: res,
// });
// export const getDomesticDataAction = () => {
//   return (dispatch: any) => {
//     demesticDataRequest().then((res) => {
//       console.log(res.data.data);
//       dispatch(changeDomesticDataAction(res));
//     });
//   };
// };

const changeTopBannerAction = (res: { data: { data: any } }) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  topBanners: res.data.data,
});
export const getTopBannerAction = () => {
  return (dispatch: any) => {
    demesticDataRequest().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
