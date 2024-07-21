<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6" @transition-enter="onEnter" @transition-leave="onLeave">
          <p class="text-h6 font-weight-bold text-black">Contact Us</p>
          <p class="text-h4 font-weight-bold text-primary">
            PT Solusi Mitra Pertama
          </p>
          <br />
          <p class="text-h6 text-grey-darken-4 text-justify">
            Kami sangat senang mendengar dari Anda! Untuk pertanyaan, penawaran, atau informasi lebih lanjut tentang
            layanan kami, jangan ragu untuk menghubungi tim kami. Kami siap membantu dan menjawab setiap pertanyaan Anda
            dengan cepat dan profesional.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img height="auto" class="rounded-lg" src="../public/images/kontak.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-primary">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6">
          <p class="text-h5 font-weight-bold text-darken">
            Anda Dapat Mengunjungi Kami di
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6775381415773!2d106.8237917740994!3d-6.435447862929286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed6c3bd7b677%3A0x8064175886b5b8e3!2sPT.%20SOLUSI%20MITRA%20PERTAMA!5e0!3m2!1sen!2sid!4v1721564454712!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="pr-11 rounded-lg" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <p class="text-h5 font-weight-bold test-daken">
            Atau Menghubungi Kami di
          </p>
          <v-list class="bg-transparent">
            <v-list-item v-for="(item, i) in items" :to="item.link" :key="i" :value="item" color="primary" rounded="xl">
              <v-list-item-title>
                <v-icon> {{ item.icon }}</v-icon>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <p class="text-h5 font-weight-bold">Head Office</p><br>
          <p class="text-h6">   PERUMAHAN GDC, RUKO WARNA ORANGE LANTAI 2, Jl. Kav Bri No.MOR 12B BLOK D9, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16414
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>




  <v-parallax height="300px" src="/images/indobuild.png">
    <v-sheet class="bg-transparent">
      <v-container>
        <v-row class="my-16">
          <v-col cols="12" md="12" sm="12" xs="12">
            <p class="text-h5 text-center font-weight-bold test-daken">
              Kami siap mendengarkan dan merespons setiap pertanyaan Anda dengan cepat dan profesional. Hubungi kami
              sekarang untuk memulai percakapan yang berarti dan menginspirasi. </p>

          </v-col></v-row></v-container></v-sheet>
  </v-parallax>

  <v-sheet class="bg-grey-lighten-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-primary">
            Klien Kami
          </p>
          <p class="text-h6 text-center text-grey-darken-3">
            PT Solusi Mitra Pertama telah dipercaya berbagai bisnis lintas
            industri
          </p>

          <v-row>
            <v-col cols="12" sm="1" xs="1" md="2" v-for="n in 16">
              <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto mt-5 elevation-0 bg-transparent" v-bind="props" :elevation="isHovering ? 12 : 2" :class="{
          'text-primary on-hover  animate__animated animate__pulse':
            isHovering,
        }">
                  <v-img width="120px" cover class="rounded-lg my-auto" :src="'/images/client/' + n + '.png'" />
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col></v-row></v-container></v-sheet>
</template>

<script>
export default {
  methods: {
    onEnter(el, done) {
      this.animateClass = true;
      setTimeout(done, 1000); // Mengatur durasi animasi (1 detik)
    },
    onLeave(el, done) {
      this.animateClass = false;
      setTimeout(done, 1000); // Mengatur durasi animasi (1 detik)
    },
  },
  data() {
    return {
      items: [
          { text: "(021) 87351197 ", icon: "mdi-phone" },
          { text: "Solusimitrapertama@gmail.com", icon: "mdi-mail" }
        ],
      dataPekerjaan: [
        {
          title: "WareHouse",
          icon: "/images/warehouse.png",
          listWork: [
            { name: "Staf Gudang" },
            { name: "Operator Warehouse" },
            { name: "Admin Gudang" },
            { name: "Kepala Gudang" },
            { name: "Packer" },
          ],
        },
        {
          title: "Logistik",
          icon: "/images/logistik.png",
          listWork: [
            { name: "Kurir" },
            { name: "Delivery" },
            { name: "Driver" },
            { name: "Kurir Event" },
            { name: "Kurir Harian" },
          ],
        },
        {
          title: "Penjualan & Pelayanan",
          icon: "/images/penjualan.png",
          listWork: [
            { name: "Field Sales" },
            { name: "Telemarketer" },
            { name: "Business Development" },
            { name: "Customer Service" },
            { name: "SPG/SPB" },
          ],
        },
        {
          title: "Manufaktur",
          icon: "/images/manufaktur.png",
          listWork: [
            { name: "Security" },
            { name: "Pekerja Lepas" },
            { name: "Operator Produksi" },
            { name: "Teknisi" },
            { name: "Helper Produksi" },
          ],
        },
        {
          title: "Konstruksi & Bangunan",
          icon: "/images/kontruksi.png",
          listWork: [
            { name: "Surveyor" },
            { name: "Pekerja Konstruksi" },
            { name: "Tenaga ahli" },
            { name: "Estimator" },
            { name: "Dll" },
          ],
        },
        {
          title: "Dapur & Pantri",
          icon: "/images/chef.png",
          listWork: [
            { name: "Chef" },
            { name: "Cook Helper" },
            { name: "Kitchen Crew" },
            { name: "Head Chef" },
            { name: "Dll" },
          ],
        },
        {
          title: "Hotel & Restaurant",
          icon: "/images/hotel.png",
          listWork: [
            { name: "Waiter & Waiters" },
            { name: "Operator Warehouse" },
            { name: "Front Office" },
            { name: "Resepsionis" },
            { name: "Room Service" },
          ],
        },
        {
          title: "Kebersihan",
          icon: "/images/kebersihan.png",
          listWork: [
            { name: "Cleaning Service" },
            { name: "Office Boy" },
            { name: "Graderner" },
            { name: "Sky Service" },
            { name: "House Keeping" },
          ],
        },
      ],
    };
  },
};
</script>
