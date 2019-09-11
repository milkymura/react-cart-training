import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

function CheckoutDialog({ globalCartList }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: 'SHOW_CHECKOUT', payload: false })
    dispatch({ type: 'UPDATE_CARTLIST', payload: {}})
  }

  const message = Object.keys(globalCartList).length 
    ? 'Thanks for eating in foodhouse'
    : 'Please Order a food'

  return (
    <div className="dialog checkoutDialog">
      <div className="dialog_container">
        <div className="dialog_header">
          <div className="dialog_header_title">
            Checkout
          </div>
          <button
            onClick={handleClose}
            className="dialog_header_close"
          >
            <i className="wtfs wtf-times"/>
          </button>
        </div>
        <div className="dialog_body">
          <h1> {message} </h1>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDialog