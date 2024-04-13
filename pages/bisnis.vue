<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6">
          <p class="text-h6 font-weight-bold text-ungu">About Us</p>
          <p class="text-h4 font-weight-bold text-primary">
            PT Solusi Mitra Utama
          </p>
          <br />
          <p class="text-h6 text-grey-darken-4 text-justify">
            Perusahaan kami bergerak dibidang pengadaan Barang dan Jasa,
            Khususnya Jasa Outsorcing. <br />
            Bagi Kami Kepuasan Klien Adalah prioritas yang sangat penting dan
            kami selalu merespon semua masukan dari klien kami secara serius dan
            tidak akan ragu mengambil tindakan yang diperlukan untuk menjaga
            reputasi kami sebagai salah satu perusahaan penyedia jasa outsorcing
            di Indonesia
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img
            height="auto"
            class="rounded-lg"
            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-grey-lighten-2">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-ungu">
            Industri dan Pekerjaan yang kami Salurkan
          </p>
          <p class="text-h6 text-center font-weight-bold text-grey-darken-3">
            Pilih pekerjaan sesuai bakat dan minat anda. Temukan pekerjaan di
            sekitar anda di MyRobin
          </p>
        </v-col>
        <v-col v-for="n in dataPekerjaan" cols="12" md="3" sm="4" xs="12">
          <v-card class="elevation-3 rounded-md">
            <template v-slot:prepend>
              <v-icon size="70" color="ungu">mdi-account</v-icon>
            </template>
            <v-card-title class="text-primary text-h6 font-weight-bold">
              {{ n.title }}</v-card-title
            >
            <v-card-text>
              <v-list>
                <v-list-item
                  class="font-weight-bold"
                  v-for="(item,n) in n.listWork"
                  :key="item.name"
                >
                  <v-list-item-title
                    class="text-grey-darken-3"
                    >{{n+1}}. {{ item.name }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <p class="text-center text-h6 font-weight-bold text-grey-darken-4">
        Dan masih banyak lagi pekerjaan yang kami salurkan
      </p>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-primary">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-white">
            Kami seleksi dan sesuaikan dengan kebutuhan bisnis Anda
          </p>
          <p class="text-h6 text-center font-weight-bold text-grey-darken-3">
            Mulai terhubung dengan jaringan lebih dari 2 juta tenaga siap kerja kami
          </p>
        </v-col></v-row
      ></v-container
    ></v-sheet
  >
</template>

<script>
export default {
  data() {
    return {
      dataPekerjaan: [
        {
          title: "WareHouse",
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
