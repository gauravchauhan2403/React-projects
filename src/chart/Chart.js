import React from 'react'
import Bar from './Bar'
import Line from './Line'
import Pie from './Pie'

const Chart = () => {
  return (
    <div className='container' 
    style={{display:'flex',
            align:'center',
            flexDirection:'column',
            justifyContent:'space-around',
            padding:16
            }}>
      <h1> Types of chart using chartjs</h1>
      <Bar />
      <Line />
      <div style={{ width:600 }}>
      <Pie />
      </div>
    </div>
  )
}

export default Chart
