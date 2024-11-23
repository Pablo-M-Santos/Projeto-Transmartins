<template>
  <v-app>
    <NavBar />
    <v-container
      fluid
      fill-height
      class="landing-page"
    >
      <v-row
        align="center"
        justify="flex-start"
      >
        <v-col
          cols="12"
          md="6"
          class="text-left"
        >
          <div class="ml-8">
            <h1 class="text font-weight-bold mb-2">
              <span class="titulo">Transporte</span><br> com excelência
            </h1>
            <p class="sub-titulo mb-5">
              Comprometimento com os resultados. A Transmartins é sua <br>parceira estratégica para soluções logísticas.
            </p>
          </div>
          <v-btn
            variant="outlined"
            large
            class="ml-8 sobre text-center"
            href="#sobre"
          >
            Saiba mais
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="sobre">
      <div
        class="text-center titulo-sobre font-weight-medium mt-9"
      >
        TODOS OS SERVIÇOS
      </div>
      <div
        class="text-center font-weight-regular mb-9"
        style="color: #4D4D4D"
      >
        A Transmartins faz do nosso cliente um parceiro, <br>buscando sua fidelização atendendo os compromissos assumidos.
      </div>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            flat
          >
            <v-img
              height="auto"
              src="@/assets/sobre-1.png"
              cover
              class="mb-2 imagem-card-sobre"
            />
            <v-card-title class="text-center titulo">
              Carga Fracionada (LTL)
            </v-card-title>
            <v-card-text class="text-center subtitulo-card-sobre font-weight-medium">
              Transporte de mercadorias diversas de vários remetentes para vários destinatários, em um mesmo veículo, tendo como diferencial o baixo custo do frete para os clientes contratantes.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            flat
          >
            <v-img
              height="auto"
              src="@/assets/sobre-2.png"
              cover
              class="mb-2 imagem-card-sobre"
            />
            <v-card-title class="text-center titulo">
              Carga Lotação (FTL)
            </v-card-title>
            <v-card-text class="text-center subtitulo-card-sobre font-weight-medium">
              Indicado para transportes cujas cargas ocupam a totalidade do veículo fazendo que ele se torne exclusivo para o atendimento.
            </v-card-text>
          </v-card>
        </v-col>


        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            flat
          >
            <v-img
              height="auto"
              src="@/assets/sobre-3.png"
              cover
              class="mb-2 imagem-card-sobre"
            />
            <v-card-title class="text-center titulo">
              Carga Expressa (FTL)
            </v-card-title>
            <v-card-text class="text-center subtitulo-card-sobre font-weight-medium">
              Indicado para cargas que precisam ser entregues com urgência.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div
        class="text-center titulo-sobre-2 font-weight-bold mt-9"
      >
        POR QUE ESCOLHER A TRANSMARTINS?
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "PaginaInicial",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.landing-page {
  .text-left {
  text-align: left;
}

.white--text {
  color: white !important;
}
  background-image: url(@/assets/Home.jpg);
  background-size: cover;
  background-position: center center;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-left {
  text-align: left;
}

.white--text {
  color: white !important;
}

.titulo {
  color: #E9500E;
}

.text {
  font-size: 75px;
  line-height: 4.5rem;
}

.sub-titulo{
  line-height: 1.9rem;
  font-size: 21px;
}

.sobre {
  padding: 10px 30px;
}

.titulo-sobre{
  color: #E9500E;
  font-size: 30px;
}

.titulo-sobre-2{
  color: #05032f;
  font-size: 25px;
}

.subtitulo-card-sobre{
  font-size: 14px;
}
</style>
