<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6" @transition-enter="onEnter" @transition-leave="onLeave">
          <p class="text-h6 font-weight-bold text-black">Why Chose Us</p>
          <p class="text-h4 font-weight-bold text-black">
            PT Solusi Mitra Pertama
          </p>
          <v-list lines="two">
            <v-list-item style="min-height: 6px; padding-left: 0px;">
              <v-list-item-title class="text-wrap text-h6 text-justify">1. Kami Mengembangkan Kerjasama yang saling
                menguntungkan</v-list-item-title>
            </v-list-item>
            <v-list-item style="min-height: 6px; padding-left: 0px;">
              <v-list-item-title class="text-wrap text-h6 text-justify">2. Tim Kami Profesional di bidangnya.Kami
                Menekankan pentingnya Berorientasi Pada Hasil yang efekti dan efisien. dan tim kami berkomitmen penuh
                terhadap klien </v-list-item-title>
            </v-list-item>
            <v-list-item style="min-height: 6px; padding-left: 0px;">
              <v-list-item-title class="text-wrap text-h6 text-justify">3. Mengembankan Karyawan Melalui Training
                Reguler agar dapat memotivasi diri sendiri untuk bekerja dengan Baik</v-list-item-title>
            </v-list-item>
            <v-list-item style="min-height: 6px; padding-left: 0px; ">
              <v-list-item-title class="text-wrap text-h6 text-justify">4. Manajemen HRD Berpedoman pada peraturan
                ketenagakerjaan dan peraturan perundang-undangan yang berlaku di Indonesia</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img height="auto" class="rounded-lg" src="../public/images/about.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-grey-lighten-2">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-black">
            Industri dan Pekerjaan yang kami Salurkan
          </p>
          <p class="text-h6 text-center text-grey-darken-3">
            Pilih pekerjaan sesuai bakat dan minat anda. Temukan pekerjaan di
            sekitar anda di PT Solusi Mitra Pertama
          </p>
        </v-col>
        <v-col v-for="n in dataPekerjaan" cols="12" md="3" sm="4" xs="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="elevation-3 rounded-md" v-bind="props" :elevation="isHovering ? 12 : 2" :class="{
          'text-black on-hover  animate__animated animate__pulse':
            isHovering,
        }">
              <template v-slot:prepend>
                <v-avatar size="100" width="auto" rounded="0" :image="n.icon"></v-avatar>
              </template>
              <v-card-title class="text-black text-h6 font-weight-bold">
                {{ n.title }}</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item style="min-height: 0px" class="font-weight-bold" v-for="(item, n) in n.listWork"
                    :key="item.name">
                    <v-list-item-title class="text-grey-darken-3">{{ n + 1 }}. {{ item.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <p class="text-center text-h6 font-weight-bold text-grey-darken-4">
        Dan masih banyak lagi pekerjaan yang kami salurkan
      </p>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-transparent">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-black">
            Kami seleksi dan sesuaikan dengan kebutuhan bisnis Anda
          </p>
          <p class="text-h6 text-center">
            Dalam Proses Perekrutan Karyawan Kami Melakukan dengan Baik dan Profesional yang mengacu pada SOP di
            Perusahaan Kami dengan menerapakn 5 Steps Recruitment Process Untuk bisa mendapatkan The Right Person For
            The
            Right Job Yaitu
          </p>
        </v-col>

        <v-col cols="12" sm="1" xs="1" md="2" class="mx-auto text-center" v-for="(n,i) in steps">
          <v-hover v-slot="{ isHovering, props }" class="text-center">
            <v-avatar  size="100" v-bind="props" :elevation="isHovering ? 12 : 2" :class="{
          'text-black on-hover  animate__animated animate__pulse':
            isHovering,
        }" class="mx-auto" width="auto" rounded="10" :image="n.icon"></v-avatar><br>
            <p class="text-center mt-3 font-weight-bold text-black">{{ n.name }}</p>
              
           
          </v-hover>
        </v-col>
      </v-row>
    </v-container></v-sheet>



  <v-sheet class="bg-grey-lighten-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-black">
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
          'text-black on-hover  animate__animated animate__pulse':
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

      steps: [{
        name: 'Job Identification',
        icon: "/images/step1.png",
         }, {
        name: 'Searching Channel Process',
        icon: "/images/step2.png",
         }, {
        name: 'Searching Aplication',
        icon: "/images/step3.png",
         }, {
        name: 'Interview Process',
        icon: "/images/step4.png",
         }, {
        name: 'Placement',
        icon: "/images/step5.png",
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
