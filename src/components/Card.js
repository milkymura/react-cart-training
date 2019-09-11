import React, {useState} from 'react'
import '../sass/components/card/index.scss'

function Card(props) {
  const [qty, incrementQty] = useState(1)

  const {
    id, name ,  photo ,
    price , type ,
    onHandleAddTable
  } = props

  const count = parseInt(qty)
  const totalPrice = (count * price).toFixed(2)

  const handlePriceChange = (price) => {
    if(price) { incrementQty(price) }
  }

  const handleAddTable = () => {
    onHandleAddTable(id, count)
    incrementQty(1)
  }

  const QtyField = () => {
    return (
      <div className="qtyField">
        <label className="qtyField_label"> Quantity </label>
        <div className="qtyField_field">
          <button 
            onClick={() => { handlePriceChange(count - 1) }}
          >
            <i className="wtfs wtf-minus"/>
          </button>
          <input 
            value={count} 
            onChange={(e) => { handlePriceChange(e.target.value) }}
          />
          <button 
            onClick={() => { handlePriceChange(count + 1) }}
          >
            <i className="wtfs wtf-plus"/>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card_media">
        <img src={photo} alt=""/>
      </div>
      <div className="card_content">

        <h1 className="card_content_name">
          {name}
        </h1>

        <div className="card_content_row">
          <QtyField/>
          <div className="card_totalPrice">
            Php {totalPrice}
          </div>
        </div>

        <button className="btn card_addToTable" onClick={handleAddTable}>
          Add To Table
        </button>
      </div>
    </div>
  )
}



export default Card