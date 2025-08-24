import React from 'react'

const Credits = ({onChangeScreen}) => {
  return (
    <div className="flex flex-col gap-2 ">
    Creadtes
    <button onClick={() => onChangeScreen("Menu")}>Menu</button>
  </div>
  )
}

export default Credits