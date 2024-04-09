<template>
    <div class="marquee-container">
      <div class="marquee-text">
        <span class="highlight">Perusahaan Outsourcing</span> On Demand - Solusi <span class="highlight">Terbaik</span> untuk Kebutuhan <span class="highlight">Personel</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
  };
  </script>
  
  <style>
  .marquee-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px;
  }
  
  .marquee-text {
    display: inline-block;
    font-size: 16px;
    color: #fff;
    animation: marqueeAnimation 20s linear infinite;
  }
  
  .highlight {
    color: #FDD835; /* Warna teks yang ditonjolkan */
  }
  
  @keyframes marqueeAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  