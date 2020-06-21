import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-types"

export default {
  //mutations唯一的目的就是修改state中状态
  //mutation中的每个方法尽可能完成的事情比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  },
  checkClick(state, payload) {
    payload.checked = !payload.checked;
  }

}