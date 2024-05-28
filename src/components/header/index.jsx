import SpecificSearch from "../filters/specific-search"

const Header = () => {
  return (
    <div className='bg-red-500 w-[300px] flex flex-col justify-around 
      items-center fixed left-0 top-0 h-full
    '>
      <strong className="p-4">
        LOGO
      </strong>

      <div>
        pesquisas
        <SpecificSearch />
      </div>
    </div>
  )
}

export default Header