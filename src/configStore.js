import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import * as api from "./src/utils/apiRequest";
import { persistStore } from "redux-persist";

const middleWare = [thunk.withExtraArgument(api)];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default (configureStore = onComplete => {
  const store = createStoreWithMiddleware(rootReducer);
  persistStore(store, onComplete);
  return store;
});
