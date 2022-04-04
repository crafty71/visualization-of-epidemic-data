import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getgetchinaDayListAction } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  const { chinaDayList } = useSelector(
    (defaultState: any) => ({
      chinaDayList: defaultState.getIn(["demestic", "chinaDayList"]),
    }),
    shallowEqual
  );
  // console.log(chinaDayList);

  const ChinaDayList = chinaDayList.length === 0 ? [] : chinaDayList;

  // const ChinaDayListTemp = ChinaDayList.map((item: any, index: number) => {
  //   return [
  //     {
  //       date: item.date,
  //       现有确诊: item.nowConfirm,
  //       累计康复: item.heal,
  //       无症状感染者: item.noInfect,
  //       累计确诊: item.confirm,
  //       康复率: item.healRate,
  //       累计死亡: item.dead,
  //     },
  //   ];
  // });
  const ChinaDayListTemp: any = [];

  for (const item of ChinaDayList) {
    console.log(item);
  }

  console.log(ChinaDayListTemp);

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getgetchinaDayListAction());
  }, [dispatch]);

  return (
    <div>
      <LineCharts dataList={ChinaDayListTemp} />
    </div>
  );
});

export default AddedLocally;
