import '../styles/globals.css';


const PokemonThumbnails = ({ id, name, image, type, iconImage }: { id: number, name: string, image: string, type: string, iconImage: string }) => {
  return (
    <div className='mx-auto mt-6 max-w-sm flex flex-row justify-center items-center'>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <small>#0{id}</small>
        <img src={image} alt={name} className='w-full' />
        <img src={iconImage} alt={name} className='w-10 h-10' />
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-lg font-bold'>名前: {name}</h3>
          <h4 className='text-sm'>タイプ: {type}</h4>
        </div>
      </div>
    </div>
  )
}

export default PokemonThumbnails;
