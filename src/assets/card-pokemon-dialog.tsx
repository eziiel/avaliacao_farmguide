import * as AlertDialog from '@radix-ui/react-alert-dialog';

import React from 'react'

export default function CardPokemonDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild className='cursor-pointer'>
        <button className="border-[1.5px] px-4 py-[1px] rounded-xl text-white
          cursor-pointer bg-red-500 scale-100 delay-100
        ">
        Ver mais
      </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
      <AlertDialog.Overlay className="" />
      <AlertDialog.Content className="fixed top-0 left-0 w-screen h-screen 
        z-50 backdrop-blur-md flex justify-center items-center
      ">
        {/* <AlertDialog.Title className="">info pokemon</AlertDialog.Title> */}
        {/* <AlertDialog.Description className=""> */}
          
        {/* </AlertDialog.Description> */}
          <div className='w-1/3 h-2/3 bg-red-500 rounded-xl'>

          </div>
          <AlertDialog.Cancel >
          </AlertDialog.Cancel>
          <AlertDialog.Action >
          </AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}