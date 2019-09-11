import React, { PureComponent, Fragment } from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import Table from '../components/Table'
import CheckoutDialog from '../components/CheckoutDialog'


import '../sass/pages/store.scss'

class StoreDashboard extends PureComponent {
  handleDeleteItem = (id) => {
    const { table } = this.state
    delete table[id]
    this.setState({ table })
  }

  render() {
    const { menu, globalState } = this.props
    const {
      cartList: globalCartList,
      isCheckout
    } = globalState



    return(
      <Fragment>
        {isCheckout && (
          <CheckoutDialog globalCartList={globalCartList}/>
        )}
        <main className="pageStore">
          <Header/>
          <Menu 
            menu={menu}
            className='pageStore_menu' 
            globalCartList={globalCartList}
          />
          <Table 
            menu={menu}
            tableItems={globalCartList}
            className='pageStore_table'
          />
        </main>
      </Fragment>
    )
  }
}


function Menu({ menu, className, onHandleAddTable, globalCartList }) {
  return(
    <div className={className}>
      <div className="menu">
        { menu.map(( menuItemProps ) => (
          <div className="menu_item">
            <Card 
              { ...menuItemProps }
              onHandleAddTable={onHandleAddTable}
              globalCartList={globalCartList}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreDashboard
