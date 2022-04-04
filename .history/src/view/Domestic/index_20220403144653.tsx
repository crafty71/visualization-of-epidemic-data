import { memo } from "react";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  //redux
  // const { demesticData } = useSelector(
  //   (defaultState: defaultState) => ({
  //     demesticData: defaultState.getIn(["demestic", "demesticData"]),
  //   }),
  //   shallowEqual
  // );

  // // hocks
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDomesticDataAction());
  // }, [dispatch]);

  // deal data

  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
    </div>
  );
});

export default Domestic;
