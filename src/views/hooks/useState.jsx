import React, { useState } from 'react'
import { Button } from 'antd'
function HooksPractice() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>click {count} times</p>
      <Button
        onClick={() =>
          setCount(() => {
            return count + 2
          })
        }
      >
        click
      </Button>
    </div>
  )
}
export default HooksPractice
