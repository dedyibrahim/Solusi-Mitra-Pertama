<template>
  <v-app id="inspire">
    <v-system-bar class="bg-grey-darken-4 px-16" height="35">
      <SliderText />
      <v-spacer></v-spacer>

      <v-icon color="primary" @click="OpenSocialMedia('https://www.facebook.com/profile.php?id=100071218411647')" size="30" class="mx-2">mdi-facebook</v-icon>
      <v-icon color="primary" @click="OpenSocialMedia('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsolusimitrapertama%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3ygl8fgGdMyeMRS3F4qvAtOX94-zk9CmBwoC6YoV_gRXjeVmXrukhBXW0_aem_ATuP4qtwhQ27_W8I4q3m0j5BqtxVFS-NqIAoB1FdnHS2q70AORxWaNpiZhRADBlmfJXVqWcxQhRlXXCT1qZXLNdF&h=AT2FU_Zhcru01mhbNimJ2y23hybNdYQZAKmBoSD0x1q0Ip3mF3WRjifkKZdvqUBFLxagya_iLztRyc4z3OAFH86u0OCdv1Ds3Y8fCTLknTc293b6x50BoSDu1iQCZVgAzkXg')" size="30" class="mx-2">mdi-instagram</v-icon>
      <v-icon color="primary" @click="OpenSocialMedia('https://twitter.com/solusimitraper1')" size="30" class="mx-2">mdi-twitter</v-icon>
    </v-system-bar>

    <v-app-bar height="80" elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-container class="pa-0 fill-height">
        <v-img height="auto" max-width="190" src="/images/logo.png" />

        <v-tabs v-model="tab" class="ml-7 d-sm-none d-md-flex d-none d-sm-flex d-md-none d-lg-flex" border="10"
          density="compact" color="primary">
          <v-tab v-for="n in menus" :to="n.link" slider-color="primary" class="font-weight-bold text-capitalize">{{
          n.name
        }}</v-tab>

        </v-tabs>
        <v-spacer class="d-sm-none d-md-flex d-none d-sm-flex"></v-spacer>
        <v-text-field density="compact" class="mt-5 mx-3" placeholder="Cari Disini" variant="solo">
          <template v-slot:append-inner>
            <v-icon color="primary">mdi-magnify</v-icon>
          </template>
        </v-text-field>

        <v-btn @click="UploadCV()" class="bg-primary text-capitalize d-sm-none d-md-flex d-none d-sm-flex">Submit CV

          <template v-slot:append>
            <v-icon>mdi-upload</v-icon>
          </template>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list color="primary">
        <v-list-item v-for="n in menus" :to="n.link" :title="n.name"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="UploadCV()" class="bg-primary text-capitalize" block>Submit CV

            <template v-slot:append>
              <v-icon>mdi-upload</v-icon>
            </template>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-6">
      <Banner />
      <NuxtPage />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({
    drawer: null,
    tab: null,
    menus: [
      {
        name: "Beranda",
        link: "/",
      },
      {
        name: "Profil",
        link: "/profil",
      },
      {
        name: "Layanan",
        link: "/layanan",
      },

      {
        name: "Kontak",
        link: "/kontak",
      },
    ],
  }),
  methods: {
    UploadCV() {
      const link = "https://docs.google.com/forms/d/e/1FAIpQLSeMU0MKB_D5HX1ocrTD3QxT-pBoW_abChVkGjXOq96AdzUdfg/viewform?usp=sf_link"
      window.open(link, '_blank');
    },
    OpenSocialMedia(link){
        window.open(link, '_blank');
      }
  }
};
</script>
