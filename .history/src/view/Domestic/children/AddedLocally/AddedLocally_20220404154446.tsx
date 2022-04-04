import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getgetchinaDayListAction } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  const { chinaDayList } = useSelector(
    (state: any) => ({
      demesticData: state.getIn(["demestic", "chinaDayList"]),
    }),
    shallowEqual
  );

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
