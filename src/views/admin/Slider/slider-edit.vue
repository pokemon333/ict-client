<template>
  <div class="justify-end flex">
    <div class="w-5/6 h-screen justify-center flex">
      <div class="w-full max-w-xs mt-2">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">image</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <div class="flex justify-start">
              <input
                class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-transparent hover:bg-yellow-500 text-yellow-300 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
            >Edit Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>