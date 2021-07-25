<template>
    <div class="w-screen h-8 relative">
        <div class="absolute left-1/2 top-6">
            <button class="logo py-2 px-4 border rounded-lg text-white text-md sm:text-2xl font-medium transform -translate-x-1/2 cursor-default">
                TechTok Polska
            </button>
        </div>
        <div class="absolute right-1/2 sm:right-16 top-20 sm:top-8">
            <a href="https://discord.gg/WAsrXSeJez" target="_blank">
                <button class="px-3 border rounded-lg text-white text-sm sm:text-lg font-normal transform translate-x-1/2 sm:translate-x-0">
                    Dołącz do nas
                </button>
            </a>
        </div>
    </div>
</template>

<script>
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
</style>