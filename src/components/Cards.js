import React from 'react'
import Packages from './Packages'
import '../Cards.css'

export default function Cards() {
	const packages = [
		{
			"duration": "1 workout",
			"price": "₹100"
		},
		{
			"duration": "1 month",
			"price": "₹2000"
		},
		{
			"duration": "3 months",
			"price": "₹4000"
		},
		{
			"duration": "6 months",
			"price": "₹5500"
		},
		{
			"duration": "1 year",
			"price": "₹7500"
		}
	]
  return (
	<div className='card-div'>
		{packages.map((pack, i) => (<Packages duration={pack.duration} price={pack.price} key={i}/>))}
	</div>
	
  )
}
