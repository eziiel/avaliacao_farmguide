import { InputTextSearch } from "../filters/search"
import SpecificSearch from "../filters/specific-search"

const Header = () => {
  return (
    <div className=' w-[300px] flex flex-col justify-around 
      items-center fixed left-0 top-0 h-full shadow-component-sw bg-slate-800
    '>
      <strong className="p-4">
        LOGO
      </strong>

      <div className="flex flex-col gap-4">
        <InputTextSearch />
        <SpecificSearch />
      </div>
    </div>
  )
}

export default Header