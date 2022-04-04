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

  ChinaDayList.map((item: any, index: number) => {
    console.log(item);

    return [
      {
        date: item.date,
        目前确诊: item.confirm,
      },
    ];
  });

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getgetchinaDayListAction());
  }, [dispatch]);

  return (
    <div>
      <LineCharts />
    </div>
  );
});

export default AddedLocally;
