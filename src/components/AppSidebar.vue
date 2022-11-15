<template>
  <nav class="w-72 flex-none grid grid-rows-[1fr_auto] bg-primary-l text-stone-50">
    <div class="flex flex-col justify-around gap-8 px-8 py-8">
      <h1 class="font-display font-bold text-4xl uppercase">
        Portal de empleo
      </h1>
      <div class="flex items-center">
        <app-steps />
      </div>
    </div>
    <div class="bg-primary-d flex flex-col gap-2 px-8 py-8">
      <p class="font-medium text-sm">
        Ya estas registrado?
      </p>
      <a href="#" class="flex justify-center items-center rounded-lg font-display font-medium text-xs px-6 py-3 common-bg">
        Actualiza o verifica tus datos
      </a>
    </div>
  </nav>
</template>
