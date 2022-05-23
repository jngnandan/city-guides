import React, { Component } from 'react'

export class Tab extends Component {

  render(props) {
    const {tabList, changeTab, isActive} = this.props
    const {tabId, tabName, category} = tabList

    const buttonChange = () => {
      changeTab(category)
    }

    return (
      <div>
        {isActive ?
          <div className='w-24 text-center'>
            <button className='font-bold text-red-500' value={category} onClick={buttonChange}>{tabName}</button>
          </div> :
          <div className='w-24 text-center'>
            <button value={category} onClick={buttonChange}>{tabName}</button>
          </div>
      }
        
      </div>
      
    )
  }
}

export default Tab