import React from 'react';

const Button = ({ children, height='36px', color='#fff', bg='#1d9bf0' }) => {
  const style = {
    height: height,
    color: color,
    background: bg
  }

  return (
    <button style={style} className={'px-4 t-text-m font-bold t-rounded'}>{children}</button>
  )
}

export { Button };
