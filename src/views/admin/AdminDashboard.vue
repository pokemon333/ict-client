<script >

</script>

<template>
<main>
  <nav class="flex bg-blue-200">
            <h1 class="w-1/3 p-3 font-mono text-4xl italic font-bold text-blue-600 hover:text-blue-800">
                  <router-link to="/">FIRST ICT</router-link>
            </h1>
            <form action="" class="w-1/3 p-1">
                  <input type="text" class="w-3/4 p-2 ml-3 border border-transparent border-none rounded h-3/4 focus:outline-none" placeholder="search">
                  <button class="px-3 py-2 ml-2 bg-transparent border border-blue-500 rounded hover:text-white hover:border-transparent hover:bg-blue-500">search</button>
            </form>
            <div class="flex justify-end w-1/3 ">
                  <div class="w-1/2 my-auto h-1/2">
                        <a href="" class="ml-6 mr-6 text-2xl text-blue-50 hover:text-blue-500"><i class="fa-solid fa-envelope"></i></a>
                        <a href="" class="mr-6 text-2xl text-blue-50 hover:text-blue-500"><i class="fa-solid fa-bell"></i></a>
                        <a href="" class="mr-6 text-2xl text-blue-50 hover:text-blue-500"><i class="fa-solid fa-comments"></i></a>

                  </div>
            </div>

      </nav>
      <main class="flex bg-blue-300">
            <div class="flex flex-col w-1/5 side-bar">
                  <div class="flex w-full p-3">
                        <img src="../../../public/images/wallpaperflare.com_wallpaper.jpg" class="w-1/5 my-auto ml-3 rounded-full h-2/5" alt="">
                        <h1 class="py-6 pl-1 mt-0.5 text-2xl hover:text-gray-200">
                              <router-link to="/admin">Vaddshah Raduv</router-link>
                        </h1>
                  </div>
                  <div class="w-full control-pannel">
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin"><i class="fa-solid fa-house"></i> Dashboard</router-link>
                        </div>
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin/Messages"><i class="fa-solid fa-house"></i> Messages</router-link>
                        </div>
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin/roles"><i class="fa-solid fa-user"></i> Roles</router-link>
                        </div>
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin/customers"><i class="fa-solid fa-user-group"></i> Customers</router-link>
                        </div>
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin/categories"><i class="fa-solid fa-tag"></i> Categories</router-link>
                        </div>
                        <div class="p-5 text-xl hover:text-gray-200">
                              <router-link to="/admin/contents"><i class="fa-solid fa-pen"></i> Contents</router-link>
                        </div>
                        <div class="px-5 pt-5 pb-6 text-xl hover:text-red-500">
                              <a href=""><i class="fa-solid fa-right-from-bracket"></i> Log out</a>
                        </div>
                  </div>
            </div>
           
            
            <div class="w-4/5 bg-green-600">
                  <RouterView />
            </div>
      </main>
</main>
</template>
