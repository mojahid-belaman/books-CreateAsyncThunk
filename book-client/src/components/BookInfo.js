import React from 'react'

const BookInfo = () => {
  return (
    <div className='w-1/2'>
        <fieldset className='border-2 p-5 relative'>
            <legend className='p-2'>Book Info:</legend>
            <div className='bg-gray-300 text-center py-2'>
                There is No Book Selected yet!.
            </div>
        </fieldset>
    </div>
  )
}

export default BookInfo