import React from 'react'

const Title = ({text}) => {
  return (
      <div>
          <h2 className="text-center font-bold text-gray-800 text-2xl uppercase underline underline-offset-4 decoration-[#ff0336] ">
              {text}
          </h2>
    </div>
  )
}

export default Title