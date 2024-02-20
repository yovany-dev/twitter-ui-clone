const Image = ({ url, description }) => {
  return (
    <div className='rounded-2xl overflow-hidden relative border border-very-dark-gray'>
      <img src={url} alt={description} />
      <div className='h-5 px-1 rounded absolute left-3 bottom-3 font-bold text-[13px] bg-[#0000004d]'>ALT</div>
    </div>
  )
}

export { Image };
