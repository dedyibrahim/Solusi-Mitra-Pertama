<template>
  <div>
    <v-btn
      v-show="showScrollButton"
      class="scroll-to-top-btn bg-primary"
      :class="{ 'bg-ungu': isBottomReached }"
      icon
      @click="scrollToTop"
    >
     
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <!-- Tombol Chat WhatsApp -->
    <v-btn v-bind="props" class="whatsapp-btn" icon @click="openWhatsAppChat">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.scroll-to-top-btn {
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: opacity 0.3s;
}

.whatsapp-btn {
  z-index: 1000;
  position: fixed;
  bottom: 90px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      showScrollButton: false,
      show: true,
      isBottomReached: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openWhatsAppChat() {
      const phoneNumber = "6281280318042";

      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text= Halo ! Saya tertarik untuk berbicara mengenai layanan PT Solusi Mitra Pertama.`
      );
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Menentukan kapan tombol harus ditampilkan atau disembunyikan berdasarkan persentase scroll
      const scrollPercentage = (scrollY / pageHeight) * 100;
      this.showScrollButton = scrollPercentage > 10; // Ubah persentase sesuai kebutuhan

      // Menentukan kapan pengguna telah mencapai bagian paling bawah halaman
      this.isBottomReached = scrollY + window.innerHeight >= pageHeight;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
