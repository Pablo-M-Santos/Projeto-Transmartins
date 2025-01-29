<!-- eslint-disable vue/no-v-html -->
<template>
  <NavBar />
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
    <div
      ref="animationContainer"
      class="truck-animation"
    />
    <v-row
      justify="center"
      dense
      class="ml-16 mr-16 mt-16"
      style="color: #53565a; background-color: #F7F7F7;"
    >
      <v-col class="ml-16 mr-16 mt-16">
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
        style="display: block; margin: 0 auto; margin-bottom: 100px"
      >
        Seu navegador não suporta o formato de vídeo.
      </video>
    </v-row>
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
        <h1 class="font-weight-bold text-h4 mr-10 text-right">
          {{ caminhao.titulo5 }}
        </h1>
        <p class="text-h6 text-right mt-10 mr-10 pl-16">
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
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'


  const route = useRoute()
  const caminhao = ref({})



  const caminhoes = [
    {
      id: 1,
      marca: 'Volvo FH',
      titulo1: 'Volvo FH 2025. A evolução do ícone das estradas.',
      subTitulo1:
        'O Volvo FH é o icônico caminhão de longa distância, construído para ser confortável e seguro nos trechos mais desafiadores. Carregado com tecnologia para aumentar sua produtividade, enquanto economiza combustível, ele está pronto para ir além e fazer o que ninguém mais consegue.',
      image1: new URL('@/assets/FH/FH_capa.png', import.meta.url).href,
      titulo2:
        '<strong>Aplicações:</strong> Serviços de transporte de longa distância e regional, aplicação em setores do agronegócio, transporte florestal e canavieiro, combustíveis e produtos químicos, e transporte de cargas pesadas.<br/><strong>Potência:</strong> 420–540 cv',
      image2: new URL('@/assets/FH/volvo-fh1.png', import.meta.url).href,
      titulo3:
        'Explore as funcionalidades, o conforto e a segurança do Volvo FH',
      subTitulo2:
        'Segurança é o valor fundamental da Volvo. Trabalhamos em diferentes áreas visando um futuro com zero acidentes.E a segurança realmente começa com o que podemos ver. Saber o que está acontecendo ao redor do caminhão é crucial para uma direção segura.Sistemas com radares, sensores e câmeras projetados para detectar e alertar motoristas sobre pedestres e ciclistas próximo ao caminhão, ótima visibilidade noturna ou com mal tempo, visibilidade ampliada e tecnologia aprimorada fazem com que o caminhão “veja” coisas que o motorista não vê.',
      video: new URL('@/assets/FH/volvo-fh.mp4', import.meta.url).href,
      image3: new URL('@/assets/FH/Volvo-fh-sobre.png', import.meta.url).href,
      titulo4: 'Mantenha-se na Faixa',
      subTitulo3:
        'Leitor de faixa otimizado, com suporte de direção ativa contínuo. A Direção Dinâmica Volvo VDS com Auxílio à Manutenção na Faixa de Rodagem existe para facilitar o movimento constante na faixa de rodagem. Se o caminhão se desviar da faixa, o sistema foi concebido para alertar o motorista e prestar assistência à direção para guiar o caminhão em direção ao centro da faixa de rodagem.',
      imagem4: new URL('@/assets/FH/Volvo-fh-sobre2.png', import.meta.url).href,
      titulo5: 'À velocidade certa',
      subTitulo4:
        'Manter a velocidade correta é fundamental para conduzir em segurança.O Sistema de Reconhecimento de Placas de velocidade, informa o condutor sobre o limite de velocidade da estrada.',
      imagem5: new URL('@/assets/FH/Volvo-fh-sobre3.png', import.meta.url).href,
    },
    {
      id: 2,
      marca: 'Volvo FM',
      titulo1: 'Volvo FM, versátil para rodar por tudo',
      subTitulo1:'A versatilidade que você precisa para ir além. Agora, os serviços personalizados do Volvo FM vêm acompanhados de muita conectividade e conforto. Amplo espaço interno e ferramentas que garantem segurança e te deixam preparados para o dia a dia nas estradas. É produtividade que não tem fim. Não importa onde, ele estará lá do jeito que você precisar. Feito para se adaptar às suas necessidades.Versátil para rodar por tudo',
      image1: new URL('@/assets/FM/FM_capa.png', import.meta.url).href,
      titulo2:
        '<strong>Aplicações:</strong> Serviços de transporte regional, transporte de produtos químicos e petrolíferos, transporte de entregas, transporte de resíduos e reciclagem, transportes de serviços públicos<br/><strong>Potência:</strong> 380 cv',
      image2: new URL('@/assets/FM/volvo-fm1.png', import.meta.url).href,
      titulo3:
        'Uma cabine projetada sua produtividade e conforto',
      subTitulo2:
        'Versátil e conectado, o Volvo FM está sempre pronto para cumprir todos os trajetos e realizar todas as entregas. E para ir cada vez mais longe e entregar mais, sempre com segurança, conte com o Plano de Manutenção Ouro, que associa a inteligência do caminhão com a conectividade avançada para garantir as manutenções preventivas e evitar paradas não planejadas. ',
      video: new URL('@/assets/FM/volvo-fm.mp4', import.meta.url).href,
      image3: new URL('@/assets/FM/Volvo-fm-sobre.png', import.meta.url).href,
      titulo4: 'Economia de Combustível',
      subTitulo3:
        'O Volvo FM agora possui o consagrado motor D13K Euro 6, possui o sistema de injeção Common Rail Volvo e seus injetores de altíssima pressão e precisão e, associado a este sistema, a exclusiva tecnologia de combustão WAVE, que possibilita maiores pressões de funcionamento do motor, resultando em uma queima mais rápida, completa e eficiente do combustível. O turbocompressor e aumenta a eficiência no motor e permite gerar máximo torque em rotações ainda menores. O Volvo FM conta com a 7ª geração da renomada caixa de cambio I-Shift.',
      imagem4: new URL('@/assets/FM/Volvo-fm-sobre2.png', import.meta.url).href,
      titulo5: 'Sistemas de suporte ao motorista',
      subTitulo4:
        'Se houver um certo risco de colisão à frente, o alerta de colisão com frenagem de emergência está disponível para alertá-lo e acionar os freios, se necessário. O suporte para evitar colisão lateral e o aviso de abertura da porta cobrem ambos os lados. Utilizam sensores de radar para reduzir o risco de colisões com veículos e outros usuários da estrada.',
      imagem5: new URL('@/assets/FM/Volvo-fm-sobre3.png', import.meta.url).href,
    },
    {
      id: 3,
      marca: 'Volvo FMX',
      titulo1: 'Pronto para qualquer desafio',
      subTitulo1:'O Volvo FMX foi projetado para transportar cargas pesadas e entregar mais produtividade, disponibilidade e economia para o seu negócio.Com maior capacidade de carga, conectividade avançada, força, precisão, conforto e robustez, o Volvo FMX apresenta soluções que fazem dele o caminhão certo para atuar em tarefas extremas e superar limites.',
      image1: new URL('@/assets/FMX/FMX_capa.png', import.meta.url).href,
      titulo2:
        '<strong>Aplicações:</strong> Atividades de mineração, construção, operações florestais e setor canavieiro.<br/><strong>Potência:</strong> 380-540cv',
      image2: new URL('@/assets/FMX/volvo-fmx1.png', import.meta.url).href,
      titulo3:
        'Construído para o trabalho pesado',
      subTitulo2:
        'Robusto, resistente e conectado, o Volvo FMX está sempre pronto para encarar os desafios mais extremos. E para manter sempre a maior produtividade, conte com o Plano de Manutenção Ouro, que associa a inteligência do caminhão com a conectividade avançada para garantir as manutenções preventivas e evitar paradas não planejadas. Agora, o plano que já era o mais completo do mercado ficou ainda melhor com a nova modalidade de pagamento Flex, que se adapta ao perfil e às variações do seu negócio através de custos baseados na quilometragem rodada.',
      video: new URL('@/assets/FMX/volvo-fmx.mp4', import.meta.url).href,
      image3: new URL('@/assets/FMX/Volvo-fmx-sobre.png', import.meta.url).href,
      titulo4: 'Direção Dinâmica Volvo',
      subTitulo3:
        'Estabilidade perfeita, controle total em baixas velocidades e menos esforço dos seus músculos. A Direção Dinâmica Volvo filtra a maioria dos chutes e solavancos do volante ao dirigir em superfícies irregulares. O sistema também ajuda a evitar derrapagens e saídas de pista acidentais, permite o ajuste das preferências de volante e oferece até mesmo controle remoto de direção.',
      imagem4: new URL('@/assets/FMX/Volvo-fmx-sobre2.png', import.meta.url).href,
      titulo5: 'Caixa I-Shift',
      subTitulo4:
        'Para cada missão, uma nova evolução da inteligência. Máxima economia de combustível. Temos agora novos modos de condução desenvolvidos para facilitar a condução dos motoristas conforme o objetivo que ele quer. Se o objetivo é economia, o modo de condução econômico, já ajusta todos os parâmetros do caminhão para trazer o máximo de economia. Para os demais Modos de condução, o ajuste também irá seguir a mesma lógica.',
      imagem5: new URL('@/assets/FMX/Volvo-fmx-sobre3.png', import.meta.url).href,
    },
  ]


  onMounted(() => {
    const caminhaoId = Number(route.params.id)
    caminhao.value = caminhoes.find((c) => c.id === caminhaoId)

  });
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
