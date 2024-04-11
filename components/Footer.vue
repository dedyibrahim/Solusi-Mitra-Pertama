<template>
    <v-main class="bg-white">
      <v-footer color="white" class="footer">
        <v-container>
          <v-row>
            <v-col cols="12" md="3" sm="12">
              <v-img
                class="mt-5 text-center"
                height="auto"
                width="250"
                :src="'./images/logo.png'"
              />
              <p class="text-left">
                Komplek, Jl. Bbd Barat No.69 Blok A4, RT.002/RW.003, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16453
              </p>
            </v-col>
            <v-col cols="12" md="9" sm="12">
              <v-card class="bg-primary text-center">
                <v-card-text class="white--text text-h6">
                  "Sistem Informasi Pengembangan Kompetensi Aparatur adalah
                  rangkaian informasi dan data mengenai Pengembangan Kompetensi
                  yang disususun secara sistematis, menyeluruh, dan terintegrasi
                  dengan berbasis teknologi."<br>
                  <span>" PP LAN No.10 Tahun 2018 "</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12" md="8" sm="12">
              <v-row>
                <v-col cols="12" md="3" sm="6"
                  ><v-list density="compact" class="bg-transparent">
                    <v-list-subheader class="text-primary text-h5">
                      <b>LMS PIM</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in menulmspim"
                      :to="item.link"
                      :key="i"
                      :value="item"
                      color="primary"
                    > 
                      <v-list-item-title class="text-primary" v-text="item.text"></v-list-item-title>
                    </v-list-item> </v-list
                ></v-col>
                <v-col cols="12" md="3" sm="6"
                  ><v-list density="compact" class="bg-transparent">
                    <v-list-subheader class="text-primary text-h5"
                      ><b>ASN</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in menuasn"
                      :key="i"
                      :value="item"
                      :to="item.link"
                       color="primary"
                       class="text-primary" 
                    >
                      {{ item.text }}
                    </v-list-item>
                  </v-list></v-col
                >
                <v-col cols="12" md="3" sm="6"
                  ><v-list density="compact"  class="bg-transparent">
                    <v-list-subheader class="text-primary text-h5"
                      ><b>PANDUAN</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in menupanduan"
                      :key="i"
                      :to="item.link"
                       :value="item"
                      color="primary"
                      class="text-primary" 
                    >
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item> </v-list
                ></v-col>
                <v-col cols="12" md="3" sm="6"
                  ><v-list density="compact"  class="bg-transparent">
                    <v-list-subheader class="text-primary text-h5"
                      ><b>LAINNYA</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in menulainnya"
                      :key="i"
                      :to="item.link"
                       :value="item"
                      color="primary"
                      class="text-primary" 
                    >
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item> </v-list
                ></v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="4" sm="12" class="mb-2">
              <v-card elevation="0" color="primary">
                <v-card-text >
                  <v-list class="bg-transparent">
                    <v-list-subheader class="text-white text-h6  text-center " 
                      ><b>  Contact Center LMS PIM</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in items"
                      :to="item.link"
                      :key="i"
                      :value="item"
                      color="primary"
                      rounded="xl"
                    >
                      <v-list-item-title>
                        <v-icon> {{ item.icon }}</v-icon>
                        {{ item.text }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                  <v-list class="bg-transparent">
                    <v-list-subheader class="text-white text-h6 text-center"
                      ><b> Jam Operasional</b></v-list-subheader
                    >
  
                    <v-list-item
                      v-for="(item, i) in items2"
                      :key="i"
                      :value="item"
                      color="primary"
                      rounded="xl"
                    >
                      <v-list-item-title>
                        <v-icon> {{ item.icon }}</v-icon>
                        <span v-html="item.text"></span>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <hr />
          <v-row class="text-primary">
            <v-col>&copy; <b>SIBANGKOM ASN 2023</b></v-col>
            <v-col class="text-right">
              <a style="text-decoration: none;">Kebijakan Privasi</a> &nbsp;
              &nbsp;
              <a style="text-decoration: none;"> Syarat & Katentuan</a>
            </v-col>
          </v-row>
        </v-container>
     
      </v-footer>
    </v-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { text: "Formulir Pengaduan", icon: "mdi-note" },
          { text: "Live Chat", icon: "mdi-forum-outline" }
        ],
        items2: [
          { text: "Senin-Minggu <br> Pukul 08:00 - 20:00 WIB", icon: "mdi-clock" }
        ],
        menulmspim: [
          {
            text: "Beranda",
            link:'/'
          },
          {
            text: "Tentang LMS PIM",
            link:'/'
          }
        ],
        menuasn: [
          {
            text: "Masuk",
            link:'/login'
          },
          {
            text: "Tanya Jawab",
            link:'/'
          },
          {
            text: "Dasar Hukum",
            link:'/'
          }
        ],
        menulainnya: [
          {
            text: "Pengumuman"
          },
          {
            text: "Artikel"
          }
        ],
        menupanduan: [
          {
            text: "Mentor",
            link:"/"
          },
          {
            text: "Pembimbing",
            link:"/"
          },
          {
            text: "Peserta",
            link:"/"
          },
          {
            text: "Pengajar",
            link:"/"
          },
          {
            text: "Penguji",
            link:"/"
          }
        ],
  
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
      };
    },
    methods: {
      goTo(val) {
        this.$router.push({ name: val });
      }
    }
  };
  </script>
  <style>
  .v-footer {
    position: relative;
    top: -1%;
    bottom: 10%;
    border-radius: 57px 57px 57px 57px;
    -moz-border-radius: 57px 57px 57px 57px;
    -webkit-border-radius: 57px 57px 57px 57px;
  }
  
  </style>
  