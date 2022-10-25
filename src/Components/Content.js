import React from 'react'
import Counter from './Counter'
import HoverCounter from './HoverCounter'


const Content = () => {
  return (
    <>
      <h1>This is a Content</h1>
      <Counter>
        {(count, countIncrement) => (
          <HoverCounter count={count} countIncrement={countIncrement}/>
        )}
      </Counter>
    </>
  )
}

export default Content