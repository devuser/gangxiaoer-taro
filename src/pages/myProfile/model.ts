// import Taro from '@tarojs/taro';
// import * as myApi from './service';

export default {
namespace : "myProfile",
  state: {
data : [],
dummy : "gangxiaoer-h5",
key : "72eed010c976e448971655b56fc2324e",
v : "1.0",

  },

  effects: {},

  reducers: {
updateState(state, {payload: data}) {
  return {
    ...state,
    ...data,
  };
},

  },

};
