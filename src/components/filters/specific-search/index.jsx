import React from "react"
import { SearchPokemonContext } from "../../../context/especific-search"

export default function SpecificSearch() {
  const { 
    listOfAbilities,
    listOfType, 
    typeOfsearch, 
    handleHitsPoint, 
    handleTypeOfsearch 
  } = React.useContext(SearchPokemonContext)
  const [openType, setOpenType] = React.useState(false)
  const [openAbilities, setOpenAbilities] = React.useState(false)




  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="py-2 px-12 flex justify-center items-center 
          bg-slate-300 rounded-xl cursor-pointer relative 
          shadow-component-sw
        "
        onClick={() => {
          setOpenType(!openType)
          if (openAbilities) {
            setOpenAbilities(!openAbilities)
          }
        }}
      >
        {typeOfsearch?.type || <span>tipo</span>}
        {openType && (
          <div className="flex flex-col absolute -right-[180px]
            -top-[680%] h-[520px] overflow-scroll overflow-x-hidden
            w-[150px] justify-center items-center rounded-lg
            shadow-component-sw bg-slate-800 gap-2 p-4
          ">
          {listOfType.map(item => (
            <span 
              onClick={() => handleTypeOfsearch({type: item})}
              className="p-2 bg-slate-200 w-full rounded-md"
              key={item}
            >{item}</span>
          ))}
          </div>

        )
        }
      </div>
      <div className="py-2 px-12 flex justify-center items-center rounded-xl
          cursor-pointer relative bg-slate-300 shadow-component-sw
        "
        onClick={() => {
          setOpenAbilities(!openAbilities)
          if (openType){
            setOpenType(!openType)
          }
        }}
      >
        {typeOfsearch?.abilities || <span>Habilidade</span>}
        {openAbilities && (
          <div className="flex flex-col absolute -right-[180px] rounded-lg
            -top-[1700%] h-[1000px] w-[150px] overflow-scroll overflow-x-hidden 
            justify-center items-center shadow-component-sw bg-slate-800 
            gap-2 p-2
          ">
          {listOfAbilities.map(item => (
            <span 

              onClick={() => handleTypeOfsearch({abilities: item})}
              className="p-2 bg-slate-200 w-full rounded-md"
              key={item}
            >{item}</span>
          ))}
          </div>

        )
        }
      </div>
      <div className="py-2 px-12 flex justify-center items-center 
        bg-slate-300 rounded-xl cursor-pointer relative 
        shadow-component-sw
        "
        onClick={() => {
          setOpenType(false)
          setOpenAbilities(false)
          handleHitsPoint()
        }}
      >
        hitpoint
      </div>
    </div>
  )
}


