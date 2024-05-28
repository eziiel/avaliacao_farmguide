// eslint-disable-next-line react/prop-types
export const CardPokemon = ({key, pokemon, type, image_url}) => {
  return (
    <div 
      className='bg-green-600 min-h-[250px] rounded-3xl p-4 flex flex-col
        overflow-y-hidden relative overflow-x-hidden
      '
      key={key}
    >
      <div className="flex flex-1 justify-around items-center">
        <div className="flex flex-col">
          <span>type</span>
          <span>{type}</span>

        </div>
        <img 
          src={image_url}
          alt="" 
          className="w-[200px] h-[200px] 
            hover:scale-150
          "
        />
      </div>
       <footer className="absolute h-1/4 w-full bottom-0 left-0 bg-red-700
        flex justify-center items-center
       ">
        <h1>
          {pokemon}
        </h1>
       </footer>
    </div>
  )
}
