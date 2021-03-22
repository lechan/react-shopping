import { createAction } from 'redux-actions'

// 1. 向服务端发送请求，需要将哪一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')
// 2.将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 3.向服务端发送请求，获取购物车列表数据
export const loadCarts = createAction('loadCarts')
// 4.将服务端返回的购物车列表数据同步到本地的购物车中
export const saveCarts = createAction('saveCarts')

// 5.向服务端发送请求，需要删除哪一个商品
export const deleteProductFromCart = createAction('deleteProductFromCart')
// 6.删除本地购物车中的商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 7.向服务端发送请求，将哪一个商品更新数量
export const changeSeviceProductNumber = createAction('changeSeviceProductNumber')
// 8. 更新本地购物车中的商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')
