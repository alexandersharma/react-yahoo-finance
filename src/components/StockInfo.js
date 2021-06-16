import React from 'react'

const StockInfo = ({
  isLoaded,
  symbol, // AAPL
  companyName, // Apple Inc.
  primaryExchange, // Nasdaq Global Select
  latestPrice, // 129.48
  latestSource, // Close
  week52High, // 176.24
  week52Low, // 108.25
}) => {
  return (
    <div className="card">
      
      <div className="card-body d-flex flex-wrap">
        {isLoaded ? (<h2 className="card-title p-2"><strong>{ symbol } - { companyName }</strong></h2>) : "Loading..."}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{isLoaded ? ([<strong>{ latestSource }</strong>, <span className="text-primary">{ latestPrice }</span>]) : [<strong>Name</strong>, <span> Loading...</span>]}</li>
        <li className="list-group-item"><strong>Week 52 High</strong> <span className="text-success">{isLoaded ? week52High : "Loading..."}</span></li>
        <li className="list-group-item"><strong>Week 52 Low</strong> <span className="text-danger">{isLoaded ? week52Low: "Loading..." }</span></li>
        <li className="list-group-item"><strong>Exchange</strong> {isLoaded ? primaryExchange : "Loading..."}</li>
      </ul>
      
    </div>
  )
}

export default StockInfo
