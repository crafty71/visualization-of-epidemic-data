import store from "@/store";
import { getIn } from "immutable";

// Redux 应用的状态
export type RootState = ReturnType<typeof store.getIn>;
