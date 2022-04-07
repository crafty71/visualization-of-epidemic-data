import { memo } from "react";

const NewTrend: any = memo((props: any) => {
  const { chinaProvienceData } = props;

  const ProvienceData =
    chinaProvienceData.length === 0 ? [] : chinaProvienceData;

  for (let item of ProvienceData) {
    console.log(item);
  }

  return <div>NewTrend</div>;
});

export default NewTrend;
