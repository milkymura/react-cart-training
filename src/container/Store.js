import React, {Component} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Table from '../components/Table'

import '../sass/pages/store.scss'

class StoreDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table : {}
    }
  }

  handleAddTable = (id,qty) => {
    const { table } = this.state

    if (table[id]) {
      table[id] +=  qty
    } else {
      table[id] = qty
    }

    this.setState({ table })
  }

  handleDeleteItem = (id) => {
    const { table } = this.state
    delete table[id]
    this.setState({ table })
  }

  render() {
    const { menu } = this.props
    const { table } = this.state

    // console.log('render table', table)

    return(
      <main className="pageStore">
        <Header/>
        <Menu 
          menu={menu}
          className='pageStore_menu' 
          onHandleAddTable={this.handleAddTable}
        />
        <Table 
          menu={menu}
          tableItems={table}
          className='pageStore_table'
          onHandleDeleteItem={this.handleDeleteItem}
        />
      </main>
    )
  }
}


function Menu({ menu, className, onHandleAddTable }) {
  return(
    <div className={className}>
      <div className="menu">
        { menu.map(( menuItemProps ) => (
          <div className="menu_item">
            <Card 
              { ...menuItemProps }
              onHandleAddTable={onHandleAddTable}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreDashboard
