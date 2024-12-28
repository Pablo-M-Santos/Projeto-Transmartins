<template>
  <v-app-bar
    app
    color="white"
    dark
    flat
    class="px-12"
  >
    <!-- Logo -->
    <a href="#home">
      <v-img
        alt="Logo Transmartins"
        :width="210"
        src="@/assets/Logo.png"
      />
    </a>
    <v-spacer />

    <!-- Home -->
    <a
      href="#home"
      class="nav-link font-weight-regular"
      @click.prevent="scroll('home')"
    >
      Home
    </a>

    <!-- Sobre -->
    <a
      href="#sobre"
      class="nav-link font-weight-regular"
      @click.prevent="scroll('sobre')"
    >
      Sobre
    </a>

    <!-- Unidades -->
    <a
      href="#unidades"
      class="nav-link font-weight-regular"
      @click.prevent="scroll('unidades')"
    >
      Unidades
    </a>

    <!-- Serviços -->
    <a
      href="#servicos"
      class="nav-link font-weight-regular"
      @click.prevent="scroll('servicos')"
    >
      Serviços
    </a>

    <!-- Objetivo -->
    <a
      href="#objetivo"
      class="nav-link font-weight-regular"
      @click.prevent="scroll('objetivo')"
    >
      Objetivo
    </a>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({behavior: "smooth"});
    }
  }
};
</script>

<style scoped>
.nav-link {
  margin: 0 15px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  font-size: 16px;
  text-decoration: none; /* Remove sublinhado */

  transition: color 0.3s ease;
}

.nav-link:hover{
  color: #E9500E;
}

.nav-link-button {
  padding: 10px 15px;
  font-size: 12px;
  margin-left: 40px;
  color: white;
  background-color: #E9500E;
}
</style>
