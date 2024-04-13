<template>
  <v-carousel  show-arrows="hover" :hide-delimiter-background="true">
    <v-carousel-item v-for="(item, i) in items" :key="i" cover height="500">
      <v-sheet height="100%" :color="item.color" class="py-16">
         <v-container>
            <v-row>
               <v-col>
                 <span class="text-h4 font-weight-bold">{{ item.title }}</span> <br> <br>
                 <span class="text-h6">{{ item.description }}</span> <br>
                  
              </v-col>
               <v-col>
                <v-img
        height="auto"
        class="rounded-lg"
        :src="item.src"
      />
               </v-col>
            </v-row>
         </v-container>  
      </v-sheet
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "primary",
          title: "Perusahaan Outsourcing & BPO On-Demand Indonesia",
          description:
            "Solusi Mitra Utama perusahaan outsorcing penyalur tenaga kerja on-demand, kami menyediakan tenaga kerja fleksibel, berpengalaman dan terpercayaa",
          src: "./images/banner2.jpg",
        },
        {
          color: "ungu",
          title: "Empowering Enterprises, Transforming Lives with BetterPlace",
          description:
            "BetterPlace merupakan perusahan penyedia platform human capital SaaS terbesar di Asia yang membantu perusahaan dalam hal manajemen tenaga kerja. Melalui teknologi HR yang komprehensif dan terintegrasi, BetterPlace telah membantu 1500 bisnis yang tersebar di 500 lokasi di wilayah Asia Pasifik, India, dan GCC.",
            src: "./images/banner1.jpg",
         },
      ],
    };
  },
};
</script>
