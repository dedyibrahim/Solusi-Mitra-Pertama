<template>
  <v-app id="inspire">
    <v-system-bar class="bg-primary" height="35">
      <v-spacer></v-spacer>

      <v-icon color="grey-darken-4" size="30" class="mx-2">mdi-facebook</v-icon>
      <v-icon color="grey-darken-4" size="30" class="mx-2"
        >mdi-instagram</v-icon
      >
      <v-icon color="grey-darken-4" size="30" class="mx-2">mdi-twitter</v-icon>
    </v-system-bar>

    <v-app-bar height="80" class="px-16">
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-img
        height="auto"
        max-width="190"
        class="rounded-lg"
        src="/images/logo.png"
      />

      <v-tabs v-model="tab" class="ml-7" density="compact" color="primary">
        <v-tab
          slider-color="primary"
          class="font-weight-bold text-capitalize"
          :value="1"
          >Bisnis</v-tab
        >
        <v-tab
          slider-color="primary"
          class="font-weight-bold text-capitalize"
          :value="2"
          >Mitra Kami</v-tab
        >
      </v-tabs>
      <v-spacer></v-spacer>
      <v-text-field
        density="compact"
        class="mt-5 mx-3"
        placeholder="Cari Disini"
        variant="solo"
      >
        <template v-slot:append-inner>
            <v-icon color="primary">mdi-magnify</v-icon>
        </template>
      </v-text-field>

      <template v-slot:append>
        <v-btn class="bg-primary text-capitalize"
          >Lamar Kerja

          <template v-slot:append>
            <v-icon>mdi-pen</v-icon>
          </template>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in 4" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({ drawer: null, tab: null }),
};
</script>
