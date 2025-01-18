<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container
    fluid
    fill-height
    class="mt-10"
  >
    <a
      class="ml-14 pl-10  p-1"
      href="/frota"
      style="text-decoration: none; color: black;"
    >
      Caminhões
      <v-icon
        class="ml-2"
        color="gray"
        style="color: black;"
      >
        mdi-chevron-right
      </v-icon>
    </a>
    <a
      class="ml-5 p-1"
      style="text-decoration: none; color: black;"
    >
      {{ caminhao.title }}
    </a>
    <v-row
      class="mt-10 mb-10 ml-14 mr-14 pl-10 pr-10"
    >
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
    <v-row
      justify="center"
      dense
      class="ml-16 mr-16 mt-10"
      style="color: #53565A; background-color: #F7F7F7;"
    >
      <v-col
        class="ml-16 mr-16 mt-10"
      >
        <h1 class="font-weight-bold text-h4 ml-10 text-left">
          {{ caminhao.title }}
        </h1>
        <p
          class="text-h6 text-left ml-10 mt-10 "
          v-html="caminhao.description"
        />
      </v-col>
      <v-col
        class="mt-10"
      >
        <v-img
          :src="caminhao.image"
          class="mb-4"
          style="margin: 0 auto;"
          contain
        />
      </v-col>
    </v-row>
    <v-row
      class="pt-16 mt-16 ml-16 mr-16 pl-5 pr-5"
    >
      <v-col cols="6">
        <h1 class="text-h4 font-weight-bold mr-10">
          {{ caminhao.conforto }}
        </h1>
      </v-col>
      <v-col cols="6">
        <p>
          {{ caminhao.sobreConforto }}
        </p>
      </v-col>
      <video
        controls
        class="mt-16"
        :src="caminhao.video"
        width="100%"
        style="display: block; margin: 0 auto;"
      >
        Seu navegador não suporta o formato de vídeo.
      </video>
    </v-row>
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
    description: '<strong>Aplicações:</strong> Serviços de transporte de longa distância e regional, aplicação em setores do agronegócio, transporte florestal e canavieiro, combustíveis e produtos químicos, e transporte de cargas pesadas.<br/><strong>Potência:</strong> 420–540 cv',
    image: new URL('@/assets/VolvoFh.png', import.meta.url).href,
    video: new URL('@/assets/volvo-fh.mp4', import.meta.url).href,
    tituloPagina: 'Volvo FH 2025. A evolução do ícone das estradas.',
    subitulo: 'O Volvo FH é o icônico caminhão de longa distância, construído para ser confortável e seguro nos trechos mais desafiadores. Carregado com tecnologia para aumentar sua produtividade, enquanto economiza combustível, ele está pronto para ir além e fazer o que ninguém mais consegue.',
    conforto:'Explore as funcionalidades, o conforto e a segurança do Volvo FH',
    sobreConforto:'Segurança é o valor fundamental da Volvo. Trabalhamos em diferentes áreas visando um futuro com zero acidentes.E a segurança realmente começa com o que podemos ver. Saber o que está acontecendo ao redor do caminhão é crucial para uma direção segura.Sistemas com radares, sensores e câmeras projetados para detectar e alertar motoristas sobre pedestres e ciclistas próximo ao caminhão, ótima visibilidade noturna ou com mal tempo, visibilidade ampliada e tecnologia aprimorada fazem com que o caminhão “veja” coisas que o motorista não vê.'
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
