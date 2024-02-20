const Avatar = ({ url, description }) => {
  return (
    <img
      className='w-full h-full'
      src={url}
      alt={description}
    />
  )
}

export { Avatar };
