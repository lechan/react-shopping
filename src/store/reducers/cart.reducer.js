import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCarts } from '../actions/cart.actions'

const initialState = []

// 将商品添加到本地的购物车中
const handleAddProductToLocalCart = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  if (product) { // 1. 要添加的商品已经在购物车中，将商品的数量 + 1
    product.count = Number(product.count) + 1
  } else { // 2. 要添加的商品没有在购物车中，直接添加
    newState.push(action.payload)
  }
  return newState
}

// 将服务端返回的购物车列表数据同步到本地的购物车中
const handleSaveCarts = (state, action) => action.payload

// 删除本地购物车中的商品
const handleDeleteProductFromLocalCart = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const index = action.payload
  newState.splice(index, 1)
  return newState
}

// 更新购物车中的数量
const handleChangeLocalProductNumber = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer({
  // 将商品添加到本地的购物车中
  [addProductToLocalCart]: handleAddProductToLocalCart,
  // 将服务端返回的购物车列表数据同步到本地的购物车中
  [saveCarts]: handleSaveCarts,
  // 删除本地购物车中的商品
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  // 更新购物车中的数量
  [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)