import { takeEvery, put} from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.actions'
import axios from 'axios'

function* handleLoadProducts () {
  // 发送异步请求
  const { data } = yield axios.get('http://localhost:3005/goods')
  // 将服务端返回的商品列表数据保存到本地的store对象中
  yield put(saveProducts(data))
}

export default function* productSaga () {
  // 加载商品列表数据
  yield takeEvery(loadProducts, handleLoadProducts)
}