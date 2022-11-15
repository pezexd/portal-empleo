<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2 content-between h-full px-8 py-8">
    <div class="flex justify-between items-start">
      <img src="/assets/bienvenido-ilus.svg" alt="">
      <div class="common-bg flex flex-col max-w-md px-4 py-2">
        <h2 class="font-display font-bold uppercase">
          Observacion
        </h2>
        <p class="font-medium">
          La informacion que usted proporciona no es el inicio de un proceso de seleccion, unicamente formara parte de un banco de datos.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-14">
      <div class="flex gap-2">
        <p class="text-2xl font-bold">
          Encantados de tenerte por aqui
        </p>
        <input type="text" class="bg-transparent text-2xl border-b-2 border-black outline-none" placeholder="Nombres y Apellidos">
        <iframe width="560" height="315" src="https://test-roth.vercel.app/embed/ba217e12-f39f-4498-9e22-84519ff0bbad" title="RodeoNow VideoPlayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <a href="#" class="flex justify-center items-center gap-2 rounded-full py-3 px-8 text-lg bg-primary-l text-stone-50">
          <span>
            Empecemos
          </span>
          <div class="i-carbon-arrow-right" />
        </a>
      </div>
    </div>
  </div>
</template>
