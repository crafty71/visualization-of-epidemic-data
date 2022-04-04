import React, { memo } from "react";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
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
