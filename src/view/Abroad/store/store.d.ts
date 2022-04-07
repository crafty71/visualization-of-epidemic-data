import store from "@/store";

// Redux 应用的状态
export type defaultState = ReturnType<typeof store.getIn>;
