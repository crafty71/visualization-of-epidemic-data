import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getchinaDayAddListAvtion } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  const { chinaDayAddList } = useSelector(
    (defaultState: any) => ({
      chinaDayAddList: defaultState.getIn(["demestic", "chinaDayAddList"]),
    }),
    shallowEqual
  );
  // console.log(chinaDayList);

  const ChinaDayList = chinaDayAddList.length === 0 ? [] : chinaDayAddList;

  const ChinaDayListTemp: any = [];

  for (const item of ChinaDayList) {
    const Temp = {
      date: item.date,
      现有确诊: item.Confirm,
      新增确诊: item.localConfirmadd,
      新增康复: item.heal,
      新增无症状感染者: item.infect,
      新增境外输入: item.importedCase,
      康复率: item.healRate,
      累计死亡: item.dead,
    };
    ChinaDayListTemp.push(Temp);
  }

  console.log(ChinaDayListTemp);

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getchinaDayAddListAvtion());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "30px" }}>
      <LineCharts dataList={ChinaDayListTemp} />
    </div>
  );
});

export default AddedLocally;
