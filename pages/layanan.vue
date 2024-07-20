<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img height="auto" class="rounded-lg" src="../public/images/service.jpg" />
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6" @transition-enter="onEnter" @transition-leave="onLeave">
          <p class="text-h6 font-weight-bold text-ungu">Layanan</p>
          <p class="text-h4 font-weight-bold text-primary">
            PT Solusi Mitra Pertama
          </p>
          <br />
          <p class="text-h6 text-grey-darken-4 text-justify">
            Kami menyediakan beragam layanan yang dapat membantu bisnis Anda mencapai tujuan yang diinginkan. Dari
            pengadaan Barang dan Jasa, Khususnya Jasa Outsorcing, tim ahli kami siap membantu Anda mengoptimalkan
            operasi bisnis dan meningkatkan efisiensi. Layanan kami mencakup analisis data mendalam untuk memberikan
            wawasan yang berharga, serta dukungan teknis yang
            responsif dan profesional. Dengan pendekatan yang berorientasi pada solusi dan inovasi terbaru, kami
            berkomitmen untuk menjadi mitra terpercaya Anda dalam menghadapi tantangan dan mencapai kesuksesan jangka
            panjang.
          </p>
        </v-col>
        
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-grey-lighten-2">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-primary">
            Berikut Daftar Layanan yang Kami Berikan
          </p>
          <p class="text-h6 text-center">
            Kami dengan senang hati menyediakan rangkaian layanan yang komprehensif untuk mendukung kebutuhan bisnis
            Anda.
          </p>
        </v-col>

        <v-col cols="12" sm="1" xs="1" md="4" class="mx-auto text-center" v-for="(n,i) in layanans">
          <v-hover v-slot="{ isHovering, props }" class="text-center">
            <v-avatar  size="100" v-bind="props" :elevation="isHovering ? 12 : 2" :class="{
          'text-primary on-hover  animate__animated animate__pulse':
            isHovering,
        }" class="mx-auto" width="auto" rounded="10" :image="n.icon"></v-avatar><br>
            <p class="text-center text-h6 mt-3 font-weight-bold text-ungu">{{ n.name }}</p>
              
           
          </v-hover>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>

  <v-parallax height="300px" src="/images/indobuild.png">
    <v-sheet class="bg-transparent">
      <v-container>
        <v-row class="my-16">
          <v-col cols="12" md="12" sm="12" xs="12">
            <p class="text-h5 text-center font-weight-bold text-white">
              Kami tidak hanya menyediakan layanan; kami menciptakan solusi yang mengubah cara Anda berbisnis, mendorong inovasi, dan mencapai kesuksesan bersama.
            </p>

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
                  <v-img width="120px"cover class="rounded-lg my-auto" :src="'/images/client/' + n + '.png'" />
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
      alert("Asdsad")
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
      layanans: [{
        name: 'Jasa Multimedia Lainnya',
        icon:'/images/layanan1.png'
      },
      {
        name: 'Aktifitas Konsultasi Manajemen Lainnya',
        icon:'/images/layanan2.png'
      },
      {
        name: 'Periklanan',
        icon:'/images/layanan3.png'
      },
      {
        name: 'Aktifitas Penyewaan dan Sewa Guna Usaha Tanpa Hak Opsi Mobil, Bus, Truk dan Sejenisnya',
        icon:'/images/layanan4.png'
      }, {
        name: 'Aktifitas Penyediaan Tenaga Kerja Paruh Waktu Tertentu',
        icon:'/images/layanan5.png'
      }, {
        name: 'Penyediaan Sumber Daya Manusia dan Manajemen Fungsi Sumber Daya Manusia',
        icon:'/images/layanan6.png'
      }, {
        name: 'Aktifitas Biro Perjalanan Wisata',
        icon:'/images/layanan7.png'
      }, {
        name: 'Aktifitas Jasa Sistem Keamanan',
        icon:'/images/layanan8.png'
      }, {
        name: 'Event Organizer',
        icon:'/images/layanan9.png'
      }],
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
