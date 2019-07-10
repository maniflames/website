<template>
  <div>
    <main>
      <h1>{{ $store.state.layouts.staticMessage.title }}</h1>
      <p>{{ $store.state.layouts.staticMessage.subtitle }}</p>
      <nuxt/>
    </main>
  </div>
</template>

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
