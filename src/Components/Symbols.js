import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay)
  return (
    <div className='symbols'>
        <div className='stack'><img src={currentDisplay.flags.png} alt="" /></div>
        <div className='stack'></div>
    </div>
  )
}

export default Symbols