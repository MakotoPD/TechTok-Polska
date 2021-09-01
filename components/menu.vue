<template>
    <div class="w-screen h-8 relative">
        <div class="absolute left-6 top-6 sm:left-16 sm:top-8">
            <a href="https://instagram.com/techtok.polska" target="_blank">
                <i class='bx bx-md bxl-instagram' style='color:#009ef3'  ></i>
            </a>
        </div>
        <div class="absolute left-1/2 top-6">
            <button class="logo py-2 px-4 border rounded-lg text-white text-md sm:text-2xl font-medium transform -translate-x-1/2 cursor-default">
                TechTok Polska
            </button>
        </div>
        <div class="absolute right-1/2 sm:right-16 top-20 sm:top-8">
            <button class="comming px-3 border rounded-lg text-white text-sm sm:text-lg font-normal transform translate-x-1/2 sm:translate-x-0 cursor-default">
                Strona w trakcie tworzenia
            </button>
        </div>
    </div>
</template>

<script>
import 'boxicons/css/boxicons.min.css'

export default {}
</script>

<style>
    button{
        background-color: #9e007940;
        border-color: #D63189;
    }

    button.logo{
        background-color: #9e00791c;
        border-color: #d631899c;
    }

    button.comming{
    background-color: #00000040;
    border-color: #695d63;
  }
</style>