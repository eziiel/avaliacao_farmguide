
// eslint-disable-next-line react/prop-types
export const CardPokemon = ({ pokemon, type, image_url, hitpoints}) => {
  return (
    <section 
      className='max-h-[300px] min-h-[300px] rounded-3xl flex flex-col
        relative border-[4px]  shadow-component-sw
        hover:scale-110 group
        border-red-700 bg-red-700
      '
    >
      <div className="flex flex-1 justify-around rounded-3xl items-center bg-white peer">
        <div className="flex flex-col">
          <span>type</span>
          <span>{type}</span>

        </div>
        <img 
          src={image_url}
          alt="" 
          className="w-[200px] h-[200px] 
            group-hover:scale-125
            group-hover:z-40
            
          "
        />
      </div>
       <aside className="p-2 text-white z-40 bg-red-700 absolute w-[150px]
        -left-3 -top-4 rounded-full flex gap-4 justify-center items-center
      ">
        <img 
          src="/img/hp.png" 
          alt="" 
          className="w-[40px] h-[40px]"
        />
        <strong>{hitpoints}</strong>
       </aside>
       <footer className="absolute h-1/4 w-full bottom-0 left-0 bg-red-700
        flex justify-center items-center rounded-b-xl p-4

        group-hover:justify-start
       ">
        <h1 className="font-bold text-white">
          {pokemon}
        </h1>
       </footer>
    </section>
  )
}
