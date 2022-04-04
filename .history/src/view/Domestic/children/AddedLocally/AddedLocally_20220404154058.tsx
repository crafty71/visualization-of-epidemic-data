import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getDomesticDataAction } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  const { chinaDayList } = useSelector(
    (defaultState: any) => ({
      demesticData: defaultState.getIn(["demestic", "chinaDayList"]),
    }),
    shallowEqual
  );

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDomesticDataAction());
  }, [dispatch]);
  return (
    <div>
      <LineCharts />
    </div>
  );
});

export default AddedLocally;
