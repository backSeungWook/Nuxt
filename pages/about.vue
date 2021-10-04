<template>
  <section class="about">
    <div>
      <h2>백 승 욱</h2>
      <h2>tmxk3856@gmail.com</h2>
      <h2>010.1234.5678</h2>
    </div>
  </section>
</template>

<script>
export default {
  head(){
    return{
      meta:[
        {hid:'og:type',property:'og:type',content:'website'},
        {hid:'og:site_name',property:'og:site_name',content:'Vue2 Movie App'},
        {hid:'og:title',property:'og:title',content:'홍길동'},
        {hid:'og:description',property:'og:description',content:'email@gmial.com'},
        {hid:'og:image',property:'og:image',content:'https://heropy.blog/css/images/logo.png'},
        {hid:'og:url',property:'og:title',content:`${process.env.CLIENT_URL}${this.$route.fullPath}`}
      ]
    }
  }
}
</script>
