import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class CartList extends Component {
    renderCart(){
        return(
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Categoory Id</th>
                        <th>Product Name</th>
                        <th>Unit Price0</th>
                        <th>Unit In Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem=>(
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitInStock}</td>
                                <td>{cartItem.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    )
  }
}
