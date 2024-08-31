import React from 'react'
import LineChart from './LineChart'
import '../App.css'
import PieCharts from './PieChart'


const ContentSection = (props) => {
  const {selectedOption} = props
  return (
    <div className='rightContentSection'>
        <div className='selectedOption'>{selectedOption}</div>
        {selectedOption === 'Dashboard' ? (<div className='charts-container'>
          <div className='linechartContainer'>
              <p>Sales vs Orders</p>
              <hr className='line'/>
              <LineChart />
          </div>
          <div className='linechartCircle'>
              <p>Portion of Sales</p>
              <hr className='line'/>

              <PieCharts />

              <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'sans-serif', marginTop: '-80px'}}> 
                <div style={{marginRight: '24px' , display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#1CD6CD', marginRight: '12px'}}></div>
                  <label>WooCommerce Store</label>
                </div>
                <div style={{marginRight: '24px' , display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FF8282', marginRight: '12px'}}></div>
                  <label>Shopify Store</label>
                </div>
              </div>
              
          </div>
        </div>) : null}
        <div className='comingsoon'>
          <h1>Coming Soon....</h1>
        </div>
    </div>
  )
}

export default ContentSection