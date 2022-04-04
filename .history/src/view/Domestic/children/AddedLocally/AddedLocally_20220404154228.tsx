import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// api
import { getgetchinaDayListAction } from "../../store/actionCreators";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { chinaDayList } = useSelector(
    (defaultState: any) => ({
      demesticData: defaultState.getIn(["demestic", "chinaDayList"]),
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
