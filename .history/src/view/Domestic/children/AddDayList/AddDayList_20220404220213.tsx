import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getchinaDayAddListAvtion } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const chinaDayAddList = memo(() => {
  const { chinaDayAddList } = useSelector(
    (defaultState: any) => ({
      chinaDayAddList: defaultState.getIn(["demestic", "chinaDayAddList"]),
    }),
    shallowEqual
  );
  console.log(chinaDayAddList);

  const chinaDayAddListTempIs =
    chinaDayAddList.length === 0 ? [] : chinaDayAddList;

  const chinaDayAddListTemp: any = [];

  for (const item of chinaDayAddListTempIs) {
    const Temp = {
      date: item.date,
      现有确诊: item.Confirm,
      新增确诊: item.localConfirmadd,
      新增康复: item.heal,
      新增无症状感染者: item.infect,
      新增境外输入: item.importedCase,
      康复率: item.healRate,
      新增死亡: item.dead,
    };
    chinaDayAddListTemp.push(Temp);
  }

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getchinaDayAddListAvtion());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "30px" }}>
      <LineCharts dataList={chinaDayAddListTemp} />
    </div>
  );
});

export default chinaDayAddList;
