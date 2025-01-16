<template>
  <v-container
    fluid
    fill-height
  >
    <a
      class="ml-14  "
      href="/frota"
    >
      Caminhões
    </a>
    <v-row
      class="mt-14 mb-10 ml-14 mr-14"
      style="background-color: aqua;">
      <v-col cols="6">
        <h1 class="text-h3 font-weight-bold">
          {{ caminhao.tituloPagina }}
        </h1>
      </v-col>
      <v-col cols="6">
        <p>
          {{ caminhao.subitulo }}
        </p>
      </v-col>
    </v-row>
    <v-img
      class="container-img"
      src="@/assets/FH_capa.png"
      style="width: 100%; object-fit: cover;"
    />
    <v-btn
      to="/frota"
      text
      color="primary"
    >
      Voltar
    </v-btn>
    <v-img
      :src="caminhao.image"
      class="mb-4"
      max-width="600"
      style="margin: 0 auto;"
      contain
    />
    <h1 class="text-h4 text-center">
      {{ caminhao.title }}
    </h1>
    <p class="text-center">
      {{ caminhao.description }}
    </p>
    <video
      controls
      class="mt-4"
      :src="caminhao.video"
      style="max-width: 600px; display: block; margin: 0 auto;"
    >
      Seu navegador não suporta o formato de vídeo.
    </video>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const caminhao = ref({});

const caminhoes = [
  {
    id: 1,
    title: 'Volvo FH',
    description: 'Detalhes sobre o Volvo FH.',
    image: new URL('@/assets/VolvoFh.png', import.meta.url).href,
    video: new URL('@/assets/volvo-fh.mp4', import.meta.url).href,
    tituloPagina: 'Volvo FH 2025. A evolução do ícone das estradas.',
    subitulo: 'O Volvo FH é o icônico caminhão de longa distância, construído para ser confortável e seguro nos trechos mais desafiadores. Carregado com tecnologia para aumentar sua produtividade, enquanto economiza combustível, ele está pronto para ir além e fazer o que ninguém mais consegue.',
  },
  {
    id: 2,
    title: 'Volvo FM',
    description: 'Detalhes sobre o Volvo FM.',
    image: new URL('@/assets/VolvoFM.png', import.meta.url).href,
    video: new URL('@/assets/volvo-fm.mp4', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Volvo FMX',
    description: 'Detalhes sobre o Volvo FMX.',
    image: new URL('@/assets/VolvoFMX.png', import.meta.url).href,
    video: new URL('@/assets/volvo-fmx.mp4', import.meta.url).href,
  },
];

onMounted(() => {
  const caminhaoId = Number(route.params.id);
  caminhao.value = caminhoes.find((c) => c.id === caminhaoId);
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.text-center {
  text-align: center;
}
</style>
