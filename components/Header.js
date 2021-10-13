import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'

function Header() {
  const searchInputRef = useRef()
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-0 items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='Google logo'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-5 py-3 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none '
            type='text'
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className=' sm:mr-3 h-7 to-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://coaching.papareact.com/ai9' />
      </div>

      {/*Header Options*/}
      <HeaderOptions />
    </header>
  )
}

export default Header
