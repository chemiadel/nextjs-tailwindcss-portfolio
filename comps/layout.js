import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Layout({children}) {
  const {pathname}=useRouter()
  useEffect(()=> console.log(pathname))
  return (
    <div class="container mx-auto ">
      <div class="flex flex-row space-x-7 mt-8 mb-8 font-mono mx-auto">
        {/* <div class="text-2xl py-3 px-6"><a href="/">Adel Chemi</a></div> */}
        <div class="md:flex-grow" />
        <Link href="/">
        <a class={`
        cursor-pointer font-bold text-black-500
        xs:py-1 md:py-2 lg:py-3 
        xs:px-2 md:px-4 lg:px-6 
        xs:text-base md:text-lg lg:text-2xl 
        border-b-2 ${pathname==='/'?"border-gray-500":""} hover:border-gray-500`}>Me</a>
        </Link>
        <Link href="/work">
        <a class={`cursor-pointer 
        font-bold text-black-500
        xs:py-1 md:py-2 lg:py-3 
        xs:px-2 md:px-4 lg:px-6 
        xs:text-base md:text-lg lg:text-2xl 
        border-b-2 ${pathname==='/work'?"border-gray-500":""} hover:border-gray-500`}>Work</a>
        </Link>
        <Link href="/contact">
        <a class={`
        cursor-pointer font-bold text-black-500
        xs:py-1 md:py-2 lg:py-3 
        xs:px-2 md:px-4 lg:px-6 
        xs:text-base md:text-lg lg:text-2xl 
        border-b-2 ${pathname==='/contact'?"border-gray-500":""} hover:border-gray-500`}>Contact</a>
        </Link>
        <div class="cursor-pointer 
        rounded-md	 
        py-1 md:py-2 lg:py-3 
        px-2 md:px-4 lg:px-6 
        xs:text-base md:text-lg lg:text-2xl font-medium text-black-500 border-2 hover:border-gray-500"><a >Resume 	
&#11123;
</a></div>
      </div>
      <main class="space-y-4 p-2 m-5 mt-4 lg:p-10 lg:mt-15 gap-4">
        {children}
      </main>
    </div>
  )
}

