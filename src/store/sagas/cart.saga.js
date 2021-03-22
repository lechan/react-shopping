import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import {
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  changeSeviceProductNumber,
  changeLocalProductNumber
} from '../actions/cart.actions'

function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts(action) {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart(action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  })
  yield put(deleteProductFromLocalCart(data.index))
}

function* handleChangeSeviceProductNumber(action) {
  const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  yield put(changeLocalProductNumber(data))
}

export default function* cartSaga () {
  // 将商品添加到购物车
  yield takeEvery(addProductToCart, handleAddProductToCart)
  // 向服务端发送请求，获取购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts)
  // 向服务端发送请求，需要删除哪一个商品
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  // 向服务端发送请求，将哪一个商品更新数量
  yield takeEvery(changeSeviceProductNumber, handleChangeSeviceProductNumber)
}