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
            <h1 class="">
              Transporte com excelência
            </h1>
            <p class="subheading">
              Comprometimento com os resultados. A Transmartins é sua parceira estratégica para soluções logísticas.
            </p>
          </div>
          <v-btn
            color="yellow"
            large
            class="ml-8"
            href="#sobre"
          >
            Saiba mais
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="sobre">
      teste
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
</style>
