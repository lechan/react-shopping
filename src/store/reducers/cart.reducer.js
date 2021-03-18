import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart } from '../actions/cart.actions'

const initialState = []

// 将商品添加到本地的购物车中
const handleAddProductToLocalCart = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  if (product) { // 1. 要添加的商品已经在购物车中，将商品的数量 + 1
    product.count = product.count + 1
  } else { // 2. 要添加的商品没有在购物车中，直接添加
    newState.push(action.payload)
  }
  return newState
}

export default createReducer({
  // 将商品添加到本地的购物车中
  [addProductToLocalCart]: handleAddProductToLocalCart
}, initialState)