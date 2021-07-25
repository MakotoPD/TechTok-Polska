<template>
  <div>
    <Menu/>

    <!-- Desktop version -->
    <div class="notmobile contain mx-auto flex items-center">
      <div class="flex-1 pt-36 sm:pt-16">
        <p class="text-white text-2xl xl:text-5xl mb-6 leading-tight">
          <span class="prim">Społeczność</span> łącząca pasjonatów informatyki i technologii.
        </p>

        <p class="text-white text-md xl:text-lg">
          Możesz tu pochwalić się swoim projektem, znaleźć rozwiązanie jakiegoś problemu, a co najważniejsze poznać wiele ciekawych osób!
        </p>

        <button class="comming mt-4 px-3 border rounded-lg text-white text-lg font-normal cursor-default">
            Strona w trakcie tworzenia
        </button>

      </div>

      <div class="flex-1 mt-24 sm:mt-1 xl:pl-96">
        <img src="../static/landingTt.png" alt="">
      </div>
    </div>


    <!-- Mobile version -->
    <div class="mobile contain mx-auto sm:flex items-center">
      <div class="flex-1 mt-24">
        <img src="../static/landingTt.png" alt="">
      </div>

      <div class="flex-1">
        <p class="text-white text-2xl mb-6 leading-tight">
          <span class="prim">Społeczność</span> łącząca pasjonatów informatyki i technologii.
        </p>

        <p class="text-white text-md xl:text-lg">
          Możesz tu pochwalić się swoim projektem, znaleźć rozwiązanie jakiegoś problemu, a co najważniejsze poznać wiele ciekawych osób!
        </p>

        <button class="comming mt-4 px-3 border rounded-lg text-white text-lg font-normal cursor-default">
            Strona w trakcie tworzenia
        </button>
      </div>
    </div>


    <!-- All version -->
    <div class="flex flex-wrap justify-center	w-10/12 mx-auto">

      <div class="flex-1 w-60 h-auto bg-darkBlue rounded-xl mx-16 my-8 p-8 text-white">
        <h4 class="text-white text-xl">
          Warsztaty
        </h4>
        <p class="text-gray-400 mt-4">
          Warsztaty dzięki którym będziesz mógł rozwinąć swoje skrzydła w branży IT
        </p>
      </div>
      <div class="flex-1 w-60 h-auto bg-darkBlue rounded-xl mx-16 my-8 p-8 text-white">
        <h4 class="text-white text-xl">
          Kursy
        </h4>
        <p class="text-gray-400 mt-4">
          Od nauki podstaw, poprzez oprogramowanie, aż po prawdziwe projekty.
        </p>
      </div>
      <div class="flex-1 w-60 h-auto bg-darkBlue rounded-xl mx-16 my-8 p-8 text-white">
        <h4 class="text-white text-xl">
          Projekty
        </h4>
        <p class="text-gray-400 mt-4">
          Projekty, które będą mogły urozmaicić i rozjebać ci psyche :)
        </p>
      </div>
      <div class="flex-1 w-60 h-auto bg-darkBlue rounded-xl mx-16 my-8 p-8 text-white">
        <h4 class="text-white text-xl">
          Twórcy
        </h4>
        <p class="text-gray-400 mt-4">
          Twórcy tak charyzmatyczni że bania siada
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style>
  body{
    background-color: #252A36;
    background-image: url('../static/landingBg.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    font-family: 'Poppins';
    overflow-x: hidden;
  }
  .prim{
    color: #D63189;
  }
  .contain{
    max-width: 80%;
    height: 750px;
  }
  .bg-darkBlue{
    background-color: #009ef326;
  }

  button.comming{
    background-color: #00000040;
    border-color: #695d63;
  }

  .notmobile{
      display: none;
    }
  .mobile{
    display: block;
  }

  @media (min-width: 640px) {
    .notmobile{
      display: flex;
    }
    .mobile{
      display: none;
    }
  }
</style>
