import store from "@/store";

// Redux 应用的状态
export type DefaultRootState = ReturnType<typeof store.getIn>;
