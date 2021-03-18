import { createAction } from 'redux-actions'

// 1. 向服务端发送请求，需要将哪一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')
// 2.将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')