import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Feed() {
  const { theme }=useContext(ThemeContext);
  return (

    <div className={`feed-div ${theme}`}>
        <h1>FEED</h1>
        <div className='divs'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse veniam eaque autem, voluptatibus dolorum aut, nam asperiores inventore excepturi laudantium amet! Consequatur similique maiores excepturi saepe aperiam necessitatibus id explicabo deleniti!</span>
            <button>READ MORE</button>
        </div>
        <div className='divs'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam eligendi voluptatem quod, quo libero numquam nesciunt dolor! Magnam consequatur debitis illum. Vitae, maiores omnis! Excepturi laudantium sapiente expedita sequi.</span>
            <button>READ MORE</button>
        </div>
        <div className='divs'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, hic facilis neque voluptas error rem ipsam omnis nobis!</span>
            <button>READ MORE</button>
        </div>

    </div>
  )
}

export default Feed