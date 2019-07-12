<template>
  <div>
    <main>
      <Trail />
      <h1>{{ $store.state.layouts.staticMessage.title }}</h1>
      <p>{{ $store.state.layouts.staticMessage.subtitle }}</p>
      <nuxt/>
    </main>
  </div>
</template>
<script>
import Trail from '~/components/Trail.vue'

export default {
  components: {
    Trail,
  }
}
</script>
<style lang="css" scoped>
main {
    margin: 0px;
    height: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a; 
    color: #ffffff;
}

h1, p {
    text-transform: uppercase;
    margin: 0px;
    z-index: 100;
}

h1 {
    font-family: 'Campton-BoldDEMO', 'Helvetica';
    font-size: 1.5em;
}

p {
    font-family: 'Campton-LightDEMO', 'Helvetica';
    font-size: 0.8em; 
}
</style>
