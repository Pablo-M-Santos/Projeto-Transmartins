<template>
  <v-app style="background-color: #f8f9fa;">
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
        class="text-center titulo-sobre font-weight-medium mt-2"
      >
        TODOS OS SERVIÇOS
      </div>
      <div
        class="text-center font-weight-regular mb-10"
        style="color: #4D4D4D"
      >
        A Transmartins faz do nosso cliente um parceiro, <br>buscando sua fidelização atendendo os compromissos assumidos.
      </div>
      <v-row class="mb-10">
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            flat
            style="background-color: #f8f9fa;"
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
            style="background-color: #f8f9fa;"
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
            style="background-color: #f8f9fa;"
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
        class="text-center titulo-sobre-2 font-weight-bold mt-12"
      >
        POR QUE ESCOLHER A TRANSMARTINS?
      </div>
      <!-- Linha 1 -->
      <v-row class="mt-8">
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-1.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Segurança e <br>
              pontualidade
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-2.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Responsabilidade <br>
              social
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-3.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Qualidade no<br>
              atendimento
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-4.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Atendimento <br>
              Personalizado
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <!-- Linha 2 -->
      <v-row class="mt-10 mb-10">
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-5.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Relacionamento<br>
              com cliente
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-6.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Gerenciamento<br>
              de risco
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-7.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Rastreabilidade<br>
              de cargas
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="5"
            height="210"
            style="padding: 30px 20px"
          >
            <v-img
              src="@/assets/card-8.png"
              class="mb-2 imagem-card-sobre"
              width="auto"
              contain
              style="display: block; margin: 0 auto;"
            />
            <v-card-title class="text-center">
              Apólice de seguro<br>
              RCTRC e RCFDC
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div
      fluid
      fill-height
      class="banner"
    >
      <v-row
        align="center"
        justify="center"
        class="fill-height"
      >
        <!-- Coluna esquerda -->
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center"
        >
          <div class="text-right ml-8">
            <h3 class="titulo-banner font-weight-bold mb-2">
              DÉCADAS DE EXPERIÊNCIA
            </h3>
            <p class=" subtitulo-banner mb-5">
              A Transmartins leva a sério o transporte de carga, para isso, a <br> empresa conta com uma frota moderna e diversificada, visando <br> sempre oferecer qualidade e segurança nos serviços prestados. <br>*Dados referentes a 2023.
            </p>
          </div>
        </v-col>

        <!-- Coluna direita -->
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-left align-left"
        >
          <div>
            <v-row class="d-flex align-center" no-gutters>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner" >5.628</h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">clientes <br> atendidos</h4>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center" no-gutters>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner" >4,07Bi</h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">bilhões em valor de <br> mercadorias transportadas</h4>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center" no-gutters>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner" >8,3M</h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">milhões de quilômetros percorridos, que são<br> equivalentes a 199 viagens de volta ao mundo</h4>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center" no-gutters>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner" >217</h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">Mil toneladas de<br> cargas transportadas</h4>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center" no-gutters>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner" >39.067</h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">viagens<br> realizadas</h4>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
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

.banner {
  background-image: url(@/assets/banner1.jpg);
  background-position: center center;
  color: white;
  display: flex;
  width: 100%;
  min-height: 450px;
  align-items: center;
  justify-content: center;
}
.titulo-banner {
  font-size: 28px;
}
.subtitulo-banner {
  font-size: 16px;
}

.numero-banner {
  font-size: 40px;
  color: #E9500E;
  margin-right: 8px;
}

.v-row {
  margin-bottom: 8px;
}

.texto-banner {
  font-size: 13px;

}
</style>
