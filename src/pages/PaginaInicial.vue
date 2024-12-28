<template>
  <v-app style="background-color: #f8f9fa;">
    <!-- Nav Bar -->
    <NavBar />

    <!-- Home -->
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

    <!-- Sobre -->
    <v-container
      id="sobre"
      class="mt-9"
    >
      <div
        class="text-center titulo-sobre text-h4 font-weight-medium mt-2 mb-5"
      >
        SOBRE
      </div>
      <div
        class="text-center subtitulo-sobre font-weight-regular mb-5"
        style="color: #4D4D4D"
      >
        A Transmartins foi fundada pelo Sr. Sávio Pereira Martins em 02 de fevereiro de 1953 e mais tarde teria como sócio seu cunhado José Antônio Cruz. Empresa criada <br> para oferecer prestação de serviços em transporte de carga industrial (M.R.O). Com mais de sete décadas no mercado e muita determinação a Transmartins continua <br> prestando serviços de qualidade, com as mais diversas tecnologias e uma equipe de profissionais qualificados para controlar todo o processo logístico, buscando <br> sempre a evolução.
      </div>
      <div
        class="text-center subtitulo-sobre font-weight-regular mb-10"
        style="color: #4D4D4D"
      >
        Entregar serviços de transporte rodoviário de cargas, com segurança e melhoria contínua dos processos, desenvolvendo <br> ações para o meio ambiente e sociedade e, gerando valor aos clientes, colaboradores, agregados e sócios. <br> Ser uma empresa que cumpre o acordado com os clientes, de forma segura e eficiente até 2024.
      </div>

      <!-- carrosel -->
      <v-carousel
        height="400"
        show-arrows="hover"
        cycle
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(image, i) in slides"
          :key="i"
        >
          <v-img
            :src="image"
            height="100%"
            :contain="true"
          />
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <!-- Unidades -->
    <v-container
      id="unidades"
      class="mt-16 mb-16"
    >
      <div class="text-center titulo-sobre text-h4 font-weight-medium mt-10 mb-10">
        Unidades
      </div>
      <v-row
        class="justify-center"
      >
        <v-col
          v-for="(unidade, index) in unidades"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="mx-auto d-flex flex-column"
            max-width="400"
            height="260px"
          >
            <v-card-title
              class="text-white d-flex justify-center"
              style="background-color: #05032f;"
            >
              <h5 class="text-center m-0 font-weight-regular">
                {{ unidade.cidade }}
              </h5>
            </v-card-title>
            <v-card-text class="bg-surface-light pt-4">
              <div class="d-flex align-left">
                <v-icon
                  style="color: #E9500E;"
                  class="mr-2"
                >
                  mdi-map-marker-outline
                </v-icon>
                <div>
                  <span class="font-weight-bold">End:</span> {{ unidade.endereco }}
                </div>
              </div>
              <div class="pl-5 ml-2">
                <span class="font-weight-bold">Bairro:</span> {{ unidade.bairro }}
              </div>
              <div class="pl-5 ml-2 mb-2">
                <span class="font-weight-bold">CEP:</span> {{ unidade.cep }}
              </div>
              <div class="pl-5 ml-2 mb-2">
                <span class="font-weight-bold">Tel:</span> {{ unidade.telefone }}
              </div>
              <div class="pl-5 ml-2 mb-2">
                <span class="font-weight-bold">E-mail:</span> {{ unidade.email }}
              </div>
              <div class="pl-5 ml-2 mb-2">
                <span class="font-weight-bold">CNPJ:</span> {{ unidade.cnpj }}
              </div>
              <div class="pl-5 ml-2 mb-2">
                <span class="font-weight-bold">I.EST:</span> {{ unidade.iest }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Serviços -->
    <v-container id="servicos">
      <div
        class="text-center titulo-sobre text-h4 font-weight-medium mt-2"
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

      <!-- Cards -->
      <div
        class="text-center titulo-sobre-2 text-h5 font-weight-bold mt-12"
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

    <!-- Objetos da Qualidade -->
    <v-container
      id="objetivos"
    >
      <div
        class="text-center titulo-sobre-2 font-weight-bold mt-12"
      >
        OBJETIVOS DA QUALIDADE
      </div>
      <v-row
        class="mt-10"
      >
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-card
            class="pt-4"
            elevation="5"
          >
            <v-row
              align="center"
              no-gutters
            >
              <v-col
                class="d-flex"
                cols="auto"
              >
                <v-img
                  src="@/assets/database.png"
                  class="ma-3  imagem-card-sobre"
                  width="auto"
                />
              </v-col>
              <v-col>
                <div>
                  Buscar equilíbrio financeiro viabilizando a utilização de recursos para o desenvolvimento da nossa força de trabalho e sustentabilidade do negócio.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-card
            class="pt-4"
            elevation="5"
          >
            <v-row
              align="center"
              no-gutters
            >
              <v-col
                class="d-flex"
                cols="auto"
              >
                <v-img
                  src="@/assets/planilha.png"
                  class="ma-3  imagem-card-sobre"
                  width="auto"
                />
              </v-col>
              <v-col>
                <div>
                  Buscar eficiência operacional em nossos processos, mantendo o compromisso com a segurança.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-card
            class="pt-4"
            elevation="5"
          >
            <v-row
              align="center"
              no-gutters
            >
              <v-col
                class="d-flex"
                cols="auto"
              >
                <v-img
                  src="@/assets/cartao.png"
                  class="ma-3  imagem-card-sobre"
                  width="auto"
                />
              </v-col>
              <v-col>
                <div>
                  Fazer do nosso cliente um parceiro, buscando sua fidelização atendendo os compromissos assumidos.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-card
            class="pt-4"
            elevation="5"
          >
            <v-row
              align="center"
              no-gutters
            >
              <v-col
                class="d-flex"
                cols="auto"
              >
                <v-img
                  src="@/assets/luz.png"
                  class="ma-3 imagem-card-sobre"
                  width="auto"
                />
              </v-col>
              <v-col>
                <div>
                  Contribuir com a preservação do Meio Ambiente e com a responsabilidade social junto à comunidade.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Decadas de Experiencia -->
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
            <v-row
              class="d-flex align-center"
              no-gutters
            >
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner">
                  5.628
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">
                  clientes <br> atendidos
                </h4>
              </v-col>
            </v-row>
            <v-row
              class="d-flex align-center"
              no-gutters
            >
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner">
                  4,07Bi
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">
                  bilhões em valor de <br> mercadorias transportadas
                </h4>
              </v-col>
            </v-row>
            <v-row
              class="d-flex align-center"
              no-gutters
            >
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner">
                  8,3M
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">
                  milhões de quilômetros percorridos, que são<br> equivalentes a 199 viagens de volta ao mundo
                </h4>
              </v-col>
            </v-row>
            <v-row
              class="d-flex align-center"
              no-gutters
            >
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner">
                  217
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">
                  Mil toneladas de<br> cargas transportadas
                </h4>
              </v-col>
            </v-row>
            <v-row
              class="d-flex align-center"
              no-gutters
            >
              <v-col
                cols="auto"
                class="text-left"
              >
                <h3 class="numero-banner">
                  39.067
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="text-left"
              >
                <h4 class="texto-banner">
                  viagens<br> realizadas
                </h4>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

const slides = [
  new URL('@/assets/Frame 1.png', import.meta.url).href,
  new URL('@/assets/Frame 2.png', import.meta.url).href,
  new URL('@/assets/Frame 3.png', import.meta.url).href,
  new URL('@/assets/Frame 4.png', import.meta.url).href,
  new URL('@/assets/Frame 5.png', import.meta.url).href,
  new URL('@/assets/Frame 6.png', import.meta.url).href,
  new URL('@/assets/Frame 7.png', import.meta.url).href,
  new URL('@/assets/Frame 8.png', import.meta.url).href,
  new URL('@/assets/Frame 9.png', import.meta.url).href,
  new URL('@/assets/Frame 10.png', import.meta.url).href,
];

const unidades = [
  {
    cidade: "Belo Horizonte - MG",
    endereco: "Rua Romualdo Cançado Netto, 198",
    bairro: "Califórnia",
    cep: "30.855-420",
    telefone: "(31) 3479-4600",
    email: "comercialetm@transmartins.com.br",
    cnpj: "17.191.172/0001-92",
    iest: "062.609135.0047",
  },
  {
    cidade: "Coronel Fabriciano - MG",
    endereco: "Av. Presidente Tancredo de Almeida Neves, 431",
    bairro: "Todos os Santos",
    cep: "35.170-054",
    telefone: "(31) 3865-1050",
    email: "comercialcrf@transmartins.com.br",
    cnpj: "17.191.172/0002-73",
    iest: "194.609135.0219",
  },
  {
    cidade: "Duque de Caxias - RJ",
    endereco: "Rodovia Washington Luiz, 2.569",
    bairro: "Terminal de Cargas do Rio - Vila São Luiz",
    cep: "25.080-000",
    telefone: "(21) 3266-4555",
    email: "comercialrio@transmartins.com.br",
    cnpj: "17.191.172/0005-16",
    iest: "84.089.109",
  },
  {
    cidade: "João Monlevade - MG",
    endereco: "Av. Armando Fajardo, 2109",
    bairro: "Loanda",
    cep: "35.931-000",
    telefone: "(31) 3851-1150",
    email: "comercialjmn@transmartins.com.br",
    cnpj: "17.191.172/0003-54",
    iest: "362.609.135.0359",
  },
  {
    cidade: "São Paulo - SP",
    endereco: "Avenida Bandeirantes Sul, 771",
    bairro: "Vila Maria",
    cep: "02165-000",
    telefone: "(11) 2588-9200",
    email: "comercialspa@transmartins.com.br",
    cnpj: "17.191.172/0004-35",
    iest: "141.756.110.116",
  },
  {
    cidade: "Serra - ES",
    endereco: "Rua 3b, S/N",
    bairro: "Civit II",
    cep: "29.168-069",
    telefone: "(27) 3138-8212",
    email: "comercialserra@transmartins.com.br",
    cnpj: "17.191.172/0010-83",
    iest: "08.270.776-6",
  },
  {
    cidade: "Sumaré - SP",
    endereco: "Rua Joaquim Ignácio Valente, 291",
    bairro: "Jardim Bela Vista",
    cep: "13175-900",
    telefone: "(19) 2038-2400",
    email: "comercialsum@transmartins.com.br",
    cnpj: "17.191.172/0014-07",
    iest: "671.655.770.110",
  },
];
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

.subtitulo-sobre{
  font-size: 15px;
}
</style>
