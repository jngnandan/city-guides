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
          <div className='w-40 text-center'>
            <button className='font-bold text-red-500 text-sm' value={category} onClick={buttonChange}>{tabName}</button>
          </div> :
          <div className='w-40 text-center'>
            <button className='text-sm' value={category} onClick={buttonChange}>{tabName}</button>
          </div>
      }
        
      </div>
      
    )
  }
}

export default Tab