import React from 'react'
import { useDispatch } from 'react-redux';

import '../sass/components/table/index.scss'


function Table({ className, menu, tableItems }) {

  const dispatch = useDispatch();
  const isEmpty = !Object.keys(tableItems).length > 0


  const handleDelete = (id) => {
    const tempTableItems = { ...tableItems }
    delete tempTableItems[id]
    dispatch({
      type: 'UPDATE_CARTLIST',
      payload: { ...tempTableItems }
    })
  }

  const handleCheckout = () => {
    dispatch({ type: 'SHOW_CHECKOUT', payload: true })
  }

  return (
    <div className={className}>
      <div className="table">
        <h1 className="table_header">
          Table
        </h1>

        <div className="table_body">
          <ul className="table_list">

            { isEmpty &&
              <p className="table_list_empty">
                There's no food on the table
              </p>
            }
            {Object.keys(tableItems).map((tablekey) => (
              <TableItem 
                menu={menu}
                tablekey={tablekey} 
                qty={tableItems[tablekey]} 
                onHandleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>

        <CalculateTotal 
          tableItems={tableItems}
          menu={menu}
        />

        <button 
          className="table_checkoutBtn btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  )

}

function TableItem({ menu, tablekey, qty, onHandleDelete }) {
  // find item in menu
  const itemDetails = menu.find( item => item.id === parseInt(tablekey))


  // retriev item keys
  const { id, name, photo , price } = itemDetails
  // get total price
  const totalPrice = (price * qty).toFixed(2)

  return (
    <div className="table_list_item">
      <div className="img">
        <img src={photo} alt=""/>
      </div>
      <div className="info">
        <h1 className="info_name">{name}</h1>
        <p className="info_qty">
          Qty: {qty}
        </p>
      </div>
      <div className="price">
        Php {totalPrice}
      </div>

      <div className="delete" onClick={() => { onHandleDelete(id) }}>
        <i className="wtfs wtf-times"/>
      </div>
    </div>
  )
}

function CalculateTotal({ tableItems, menu }) {

  let total = 0

  Object.keys(tableItems).map((tablekey) => {
    const { price } = menu.find( item => item.id === parseInt(tablekey))
    const qty = tableItems[tablekey]

    total += price * qty
  })

  return (
    <div className="table_footer">
      <div className="total">
        <h3 className="label">Total</h3>
        <h1 className="value">Php {total.toFixed(2)}</h1>
      </div>
    </div>
  )
}



export default Table