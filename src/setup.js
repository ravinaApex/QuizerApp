/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppScreen } from "./route";
import Sugar from "sugar";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { handleChanges, restoreState } from "./services/persistHandler";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

const Setup = (props) => {
   Sugar.extend();
   restoreState(store);
   handleChanges(store);
   return (
       <Provider store={store}>
         <AppScreen />
       </Provider>
   );
};

export default Setup;

//
// import React from "react";
// import  { AppScreen }  from './route';
// import Sugar from "sugar";
// import thunk from "redux-thunk";
// import reducer from "./reducer";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { handleChanges, restoreState } from "./services/persistHandler";
//
//
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer);
//
// const Setup = (props) => {
//    Sugar.extend();
//    restoreState(store);
//    handleChanges(store);
//    return (
//        <Provider store={store}>
//          <AppScreen />
//        </Provider>
//    );
// };
//
// export default Setup;
