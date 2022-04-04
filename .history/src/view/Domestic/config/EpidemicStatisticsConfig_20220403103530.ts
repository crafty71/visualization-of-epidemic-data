import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getDomesticDataAction } from "../store/actionCreators";
