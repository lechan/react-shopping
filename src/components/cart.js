import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../store/actions/product.actions'
import * as cartActions from '../store/actions/cart.actions'

class Cart extends Component {
  componentDidMount() {
    // 向服务端发送请求，获取购物车列表数据
    const { loadCarts } = this.props
    loadCarts()
  }
  chageProductNumber(cid, event) {
    const { changeSeviceProductNumber } = this.props
    const count = event.target.value
    // 向服务端发送请求，将哪一个商品更新数量
    changeSeviceProductNumber({
      cid,
      count
    })
  }
  render() {
    const { carts, deleteProductFromCart } = this.props
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {
            carts.map(product => (
              <div className="cart-row" key={product.id}>
                <div className="cart-item cart-column">
                  <img className="cart-item-image" src={`http://localhost:3005${product.thumbnail}`} width="100" height="100" alt="" />
                  <span className="cart-item-title">{product.title}</span>
                </div>
                <span className="cart-price cart-column">￥{product.price}</span>
                <div className="cart-quantity cart-column">
                  <input className="cart-quantity-input" type="number" value={product.count} onChange={e => this.chageProductNumber(product.id, e)} />
                  <button className="btn btn-danger" type="button" onClick={() => deleteProductFromCart(product.id)}>删除</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥39.97</span>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  carts: state.carts
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)