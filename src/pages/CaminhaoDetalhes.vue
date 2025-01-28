<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container
    fluid
    fill-height
    class="mt-10"
  >
    <a
      class="ml-14 pl-10 p-1"
      href="/frota"
      style="text-decoration: none; color: black"
    >
      Caminhões
      <v-icon
        class="ml-2"
        color="gray"
        style="color:
        black"
      >
        mdi-chevron-right
      </v-icon>
    </a>
    <a
      class="ml-5 p-1"
      style="text-decoration: none; color: blue"
    >
      {{ caminhao.marca }}
    </a>
    <v-row class="mt-10 ml-14 mr-14 pl-10 pr-10">
      <v-col cols="6">
        <h1
          class="text-h3 font-weight-bold"
          style="max-width: 800px"
        >
          {{ caminhao.titulo1 }}
        </h1>
      </v-col>
      <v-col cols="6">
        <p>
          {{ caminhao.subTitulo1 }}
        </p>
      </v-col>
    </v-row>
    <div class="image-container mb-16 pt-16">
      <img
        :src="caminhao.image1"
        alt="Imagem de exemplo"
        class="responsive-image"
      >
    </div>
    <v-row
      justify="center"
      dense
      class="ml-16 mr-16 mt-16"
      style="color: #53565a; background-color: black"
    >
      <v-col class="ml-16 mr-16">
        <h1 class="font-weight-bold text-h4 ml-10 text-left">
          {{ caminhao.marca }}
        </h1>
        <p
          class="text-h6 text-left ml-10 mt-10"
          v-html="caminhao.titulo2"
        />
      </v-col>
      <v-col class="mt-10">
        <v-img
          :src="caminhao.image2"
          class="mb-4"
          style="margin: 0 auto"
          contain
        />
      </v-col>
    </v-row>
    <v-row
      class="mr-16 ml-16 pl-16 pr-16"
      style="margin-top: 200px"
    >
      <v-col cols="6">
        <h1
          class="text-h4 font-weight-bold"
          style="max-width: 600px"
        >
          {{ caminhao.titulo3 }}
        </h1>
      </v-col>
      <v-col cols="6">
        <p>
          {{ caminhao.subTitulo2 }}
        </p>
      </v-col>
      <video
        controls
        muted
        autoplay
        loop
        class="mt-16 rounded-xl elevation-30"
        :src="caminhao.video"
        width="1400px"
        style="display: block; margin: 0 auto; margin-bottom: 200px"
      >
        Seu navegador não suporta o formato de vídeo.
      </video>
    </v-row>

    <vue-lottie
      :options="defaultOptions"
      height="200px"
      width="400px"
    />
    <v-row
      justify="center"
      align="center"
      class="mt-16 pt-16"
    >
      <v-col class="mt-10">
        <v-img
          :src="caminhao.image3"
          class="mb-4 rounded-e-xl elevation-30"
          contain
        />
      </v-col>
      <v-col class="mr-16 mt-10">
        <h1 class="font-weight-bold text-h4 ml-10 text-left">
          {{ caminhao.titulo4 }}
        </h1>
        <p class="text-h6 text-left ml-10 mt-10 mr-16 pr-16">
          {{ caminhao.subTitulo3 }}
        </p>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="mt-16 pt-16"
    >
      <v-col class="r-16 mt-10">
        <h1 class="font-weight-bold text-h4 ml-10 text-right">
          {{ caminhao.titulo5 }}
        </h1>
        <p class="text-h6 text-right mt-10 ml-16 pl-16">
          {{ caminhao.subTitulo4 }}
        </p>
      </v-col>
      <v-col class="mt-10">
        <v-img
          :src="caminhao.imagem4"
          class="mb-4 rounded-s-xl elevation-30"
          contain
        />
      </v-col>
    </v-row>
    <div class="image-container mt-16 pt-16">
      <img
        :src="caminhao.imagem5"
        alt="Imagem de exemplo"
        class="responsive-image"
      >
    </div>
  </v-container>
</template>

<script setup>
  import TruckAnimation from '@/assets/truck-animation.json'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import 'vue3-lottie/dist/style.css'

  const route = useRoute()
  const caminhao = ref({})

  const defaultOptions = ref({
    animationData: TruckAnimation,
    loop: true,
    autoplay: true,
  })

  const caminhoes = [
    {
      id: 1,
      marca: 'Volvo FH',
      titulo1: 'Volvo FH 2025. A evolução do ícone das estradas.',
      subTitulo1:
        'O Volvo FH é o icônico caminhão de longa distância, construído para ser confortável e seguro nos trechos mais desafiadores. Carregado com tecnologia para aumentar sua produtividade, enquanto economiza combustível, ele está pronto para ir além e fazer o que ninguém mais consegue.',
      image1: new URL('@/assets/FH_capa.png', import.meta.url).href,
      titulo2:
        '<strong>Aplicações:</strong> Serviços de transporte de longa distância e regional, aplicação em setores do agronegócio, transporte florestal e canavieiro, combustíveis e produtos químicos, e transporte de cargas pesadas.<br/><strong>Potência:</strong> 420–540 cv',
      image2: new URL('@/assets/VolvoFh.png', import.meta.url).href,
      titulo3:
        'Explore as funcionalidades, o conforto e a segurança do Volvo FH',
      subTitulo2:
        'Segurança é o valor fundamental da Volvo. Trabalhamos em diferentes áreas visando um futuro com zero acidentes.E a segurança realmente começa com o que podemos ver. Saber o que está acontecendo ao redor do caminhão é crucial para uma direção segura.Sistemas com radares, sensores e câmeras projetados para detectar e alertar motoristas sobre pedestres e ciclistas próximo ao caminhão, ótima visibilidade noturna ou com mal tempo, visibilidade ampliada e tecnologia aprimorada fazem com que o caminhão “veja” coisas que o motorista não vê.',
      video: new URL('@/assets/volvo-fh.mp4', import.meta.url).href,
      image3: new URL('@/assets/Volvo-fh-sobre.png', import.meta.url).href,
      titulo4: 'Mantenha-se na Faixa',
      subTitulo3:
        'Leitor de faixa otimizado, com suporte de direção ativa contínuo. A Direção Dinâmica Volvo VDS com Auxílio à Manutenção na Faixa de Rodagem existe para facilitar o movimento constante na faixa de rodagem. Se o caminhão se desviar da faixa, o sistema foi concebido para alertar o motorista e prestar assistência à direção para guiar o caminhão em direção ao centro da faixa de rodagem.',
      imagem4: new URL('@/assets/Volvo-fh-sobre2.png', import.meta.url).href,
      titulo5: 'À velocidade certa',
      subTitulo4:
        'Manter a velocidade correta é fundamental para conduzir em segurança.O Sistema de Reconhecimento de Placas de velocidade, informa o condutor sobre o limite de velocidade da estrada.',
      imagem5: new URL('@/assets/Volvo-fh-sobre3.png', import.meta.url).href,
    },
    {
      id: 2,
      marca: 'Volvo FM',
      titulo2: 'Detalhes sobre o Volvo FM.',
      image: new URL('@/assets/VolvoFM.png', import.meta.url).href,
      video: new URL('@/assets/volvo-fm.mp4', import.meta.url).href,
    },
    {
      id: 3,
      marca: 'Volvo FMX',
      titulo2: 'Detalhes sobre o Volvo FMX.',
      image: new URL('@/assets/VolvoFMX.png', import.meta.url).href,
      video: new URL('@/assets/volvo-fmx.mp4', import.meta.url).href,
    },
  ]

  onMounted(() => {
    const caminhaoId = Number(route.params.id)
    caminhao.value = caminhoes.find((c) => c.id === caminhaoId)
  })
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .text-center {
    text-align: center;
  }

  .image-container {
    width: 100%;
    height: 800px;
    overflow: hidden;
    /* margin-bottom: 100px; */
  }

  .responsive-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
