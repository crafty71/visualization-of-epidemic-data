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

  const ChinaDayList = chinaDayList.length === 0 ? [] : chinaDayList;

  const ChinaDayListTemp: any = [];

  for (const item of ChinaDayList) {
    const Temp = {
      date: item.date,
      现有新增确诊: item.nowConfirm,
      新增累计康复: item.heal,
      新增无症状感染者: item.noInfect,
      累计确诊: item.confirm,
      康复率: item.healRate,
      累计死亡: item.dead,
    };
    ChinaDayListTemp.push(Temp);
  }

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getgetchinaDayListAction());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "30px" }}>
      <LineCharts dataList={ChinaDayListTemp} />
    </div>
  );
});

export default AddedLocally;