import { memo } from "react";

const NewTrend: any = memo((props: any) => {
  const { chinaProvienceData } = props;

  const ProvienceData =
    chinaProvienceData.length === 0 ? [] : chinaProvienceData;

  return <div>NewTrend</div>;
});

export default NewTrend;
