import React, { Component } from 'react'

export class Tab extends Component {
  render(props) {
    const { tabList, isTabActive } = this.props
    const { id, tabName, category, changeTab } = tabList

    const buttonChange = () => {
      changeTab(id)
      console.log("cool")
    }

    return (
      <div>
        {isTabActive? 
          <button onClick={buttonChange} value={id} className='w-28 underline'>
            <p>{tabName}</p>
          </button>
          :
          <button onClick={buttonChange} value={id} className='w-28'>
            <p>{tabName}</p>
          </button>
      }
      </div>
    )
  }
}

export default Tab