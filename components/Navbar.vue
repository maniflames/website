<template>
    <header>
      <nav>
        <ul>
          <li><h4>Imani</h4></li>
          <li>projects</li>
          <li>about</li>
          <li>writing</li>
        </ul>
      </nav>
    </header>
</template>

<style lang="scss" >
@import "~/assets/_variables.scss";

ul {
  display: flex;
  flex-direction: row; 
  align-items: baseline;
  justify-content: flex-end;
  margin-right: 32px; 

  h4 {
    margin: 0;
  }

  li {
    font-family: $font-family-heading;
    padding: 16px;
    color: $broken-white; 

    &:first-child {
      padding-left: 64px;
      padding-top: 32px; 
      margin-right: auto;
    }
  }

  
}
</style>
