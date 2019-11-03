<template>
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/"><h4>Imani</h4></nuxt-link></li>
          <li><nuxt-link to="/">projects</nuxt-link></li>
          <li><nuxt-link to="/about">about</nuxt-link></li>
          <li><nuxt-link to="/writing">writing</nuxt-link></li>
        </ul>
      </nav>
    </header>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

ul {
  display: flex;
  flex-direction: row; 
  align-items: baseline;
  justify-content: flex-end;
  margin-right: 32px; 
  flex-wrap: wrap; 

  h4 {
    margin: 0;
  }

  li {
    padding: 16px;
    color: $broken-white; 

    a {
      text-decoration: none; 
      color: $broken-white; 
      font-family: $font-family-heading;
      
      &:hover, &:hover * {
        color: $primary; 
      }
    }

    &:first-child {
      padding-left: 64px;
      padding-top: 32px; 
      margin-right: auto;
    }
  }
}

@media (max-width: 30em) {
    ul {
      justify-content: center; 
      text-align: center;
      margin-right: 0;

      li:first-child {
          padding: 0;
          padding-top: 32px; 
          flex-basis: 100%;
      }
    }
  }
</style>
