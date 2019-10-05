<template>
    <div>
        <img :src="src" :alt="alt">
        <p>{{ writing }}</p>
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        alt: String,
        writing: String,
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

div {
    background: #ffffff;
    padding: 24px;
    padding-bottom: 0;
    height: fit-content;
    box-shadow: 0px 8px 25px $broken-black;
    max-width: fit-content;
}

p {
    font-family: $font-family-marker;
    font-size: 1.35em; 
    color: $broken-black; 
    margin-top: 8px; 
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
}

img {
    max-height: 375px; 
    margin-right: auto;
    margin-left: auto;  
}
</style>