import React from 'react'

export default function navbar() {
  return (
    <>
    <header class= "text-zinc-50 body-font bg-slate-600">
  <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      <span class="ml-3 text-xl text-zinc-50">Web/k-Abhi1</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
  </div>
</header>
    </>
  )
}
