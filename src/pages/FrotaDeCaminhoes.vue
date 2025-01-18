<template>
  <v-app>
    <NavBar />
    <v-container
      fluid
      fill-height
      class="container-img"
    >
      <section class="module parallax parallax-1" />


      <section class="module parallax ">
        <h1 class="text-center text-h5 font-weight-bold mt-16 mb-8">
          Explore todo a nossa Frota de Caminhões Volvo
        </h1>
        <p class="text-center font-weight-regular mb-10 mr-16 ml-16">
          Com uma ampla variedade de opções de motorização e uma seleção ainda maior de modelos, existe um caminhão Volvo ideal para as necessidades do seu negócio. Descubra todas as soluções que oferecemos e encontre o caminhão perfeito para impulsionar sua operação.
        </p>
        <v-row
          class="mb-16"
        >
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              class="mx-auto no-border"
              max-width="350"
              elevation="5"
              height="360"
              style="padding: 30px 20px"
            >
              <v-img
                src="@/assets/VolvoFh.png"
                class="mb-2 imagem-card-sobre"
                width="auto"
                contain
                style="display: block; margin: 0 auto;"
              />
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  color="primary"
                  text
                  :to="{ name: 'CaminhaoDetalhes', params: { id: 1 } }"
                >
                  Volvo FH
                  <v-icon
                    class="ml-2"
                    color="primary"
                    style="font-size: 25px"
                  >
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title
                class="text-center text-subtitle-2"
                style="white-space: normal;"
              >
                Líder em longas distâncias, o Volvo FH proporciona ao motorista conforto, segurança e economia inigualáveis.
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              class="mx-auto no-border"
              max-width="350"
              elevation="5"
              height="360"
              style="padding: 30px 20px"
            >
              <v-img
                src="@/assets/VolvoFM.png"
                class="mb-2 imagem-card-sobre"
                width="auto"
                contain
                style="display: block; margin: 0 auto;"
              />
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  color="primary"
                  text
                  :to="{ name: 'CaminhaoDetalhes', params: { id: 2 } }"
                >
                  Volvo FM
                  <v-icon
                    class="ml-2"
                    color="primary"
                    style="font-size: 25px"
                  >
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title
                class="text-center text-subtitle-2"
                style="white-space: normal;"
              >
                Nosso caminhão mais versátil. Design surpreendente, manuseio fantástico e excelente economia operacional.
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              class="mx-auto no-border"
              max-width="350"
              elevation="5"
              height="360"
              style="padding: 30px 20px"
            >
              <v-img
                src="@/assets/VolvoFMX.png"
                class="mb-2 imagem-card-sobre"
                width="auto"
                contain
                style="display: block; margin: 0 auto;"
              />
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  color="primary"
                  text
                  :to="{ name: 'CaminhaoDetalhes', params: { id: 3 } }"
                >
                  Volvo FMX
                  <v-icon
                    class="ml-2"
                    color="primary"
                    style="font-size: 25px"
                  >
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title
                class="text-center text-subtitle-2"
                style="white-space: normal;"
              >
                O moderno caminhão de construção. Forte, resistente e repleto de recursos incríveis.
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #242424;
  font-family: sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.container-img {
  width: 100%;
}

section.module.parallax {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}


section.module.parallax-1 {
  background-image: url("/src/assets/ImgVolvoInicio.png");
}

.no-border {
  box-shadow: none !important;
  transition: border 0.3s ease;
}




</style>
