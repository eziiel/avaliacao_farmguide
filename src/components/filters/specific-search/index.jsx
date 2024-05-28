import React from 'react';
import { SearchPokemonContext } from '../../../context/especific-search';

export default function SpecificSearch() {
  const { 
    listOfAbilities, 
    listOfType, 
    typeOfSearch, 
    handleTypeOfsearch, 
    handleHitsPoint 
  
  } = React.useContext(SearchPokemonContext);

  const [openType, setOpenType] = React.useState(false);
  const [openAbilities, setOpenAbilities] = React.useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'type') {
      setOpenType(!openType);
      if (openAbilities) setOpenAbilities(false);
    } else if (dropdown === 'abilities') {
      setOpenAbilities(!openAbilities);
      if (openType) setOpenType(false);
    }
  };

  const handleSelection = (type, item) => {
    handleTypeOfsearch({ [type]: item });
    setOpenType(false);
    setOpenAbilities(false);
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <div
        className="flex justify-center items-center bg-slate-300 rounded-xl cursor-pointer relative shadow-component-sw"
        onClick={() => toggleDropdown('type')}
      >
        <button 
          type="button"
          className={`${typeOfSearch?.type ? 'bg-blue-400' : 'bg-slate-300'} w-full py-2 px-12 rounded-xl`}

        >
          {typeOfSearch?.type || 'Tipo'}
        </button>
        {openType && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="max-h-60 overflow-y-auto">
              {listOfType.map((item) => (
                <button
                  type="button"
                  onClick={() => {
                    handleSelection('type', item)
                  }}
                  className={`p-2 w-full text-left ${typeOfSearch?.type === item ? 'bg-blue-300' : ''}`}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        className="flex justify-center items-center bg-slate-300 rounded-xl cursor-pointer 
          relative shadow-component-sw-"
        onClick={() => toggleDropdown('abilities')}
      >
        <button 
          type="button"
          className={`${typeOfSearch?.abilities ? 'bg-blue-400' : 'bg-slate-300'} w-full py-2 px-12 rounded-xl`}

        >{typeOfSearch?.abilities || 'Habilidade'}</button>
        {openAbilities && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="max-h-60 overflow-y-auto">
              {listOfAbilities.map((item) => (
                <button
                  type="button"
                  onClick={() => handleSelection('abilities', item)}
                  className={`p-2 w-full text-left ${typeOfSearch?.abilities === item ? 'bg-blue-400' : ''}`}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        className="py-2 px-12 flex justify-center items-center bg-slate-300 rounded-xl cursor-pointer relative shadow-component-sw"
        onClick={() => {
          setOpenType(false);
          setOpenAbilities(false);
          handleHitsPoint();
        }}
      >
        Hitpoint
      </button>
    </div>
  );
}
