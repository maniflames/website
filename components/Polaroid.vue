<template>
    <div class="polaroid" :class="{small: isSmall}">
        <div class="polaroid-clip" :class="{develop: hasEffect}">
            <img :src="src" :alt="alt">
        </div>
        <p>{{ writing }}</p>
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        alt: String,
        writing: String,
        isSmall: {
            type: Boolean,
            default: false,
        },
        hasEffect: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.polaroid {
    background: #ffffff;
    padding: 24px;
    padding-bottom: 0;
    height: fit-content;
    box-shadow: 0px 8px 25px $broken-black;
    max-width: fit-content;
}

.polaroid-clip {
    width: 270px;
    overflow: hidden;
    display: flex;
    justify-content: center; 
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
    height: 375px; 
    margin-right: auto;
    margin-left: auto;  
}

.polaroid.small {
    box-shadow: 0px 4px 12px $broken-black;

    img {
        height: 250px;
    }

    .polaroid-clip {
        width: 200px 
    }
}

.develop {
    background-color: $primary-dark-2;

    img {
        transition: opacity 1.5s;
        mix-blend-mode: luminosity;
        opacity: 0.7;
    }

    &:hover {

        img {
            transition: opacity 1.5s;
            mix-blend-mode: normal; 
            opacity: 1;
        }
    }
}

@media (max-width: 30em) {
    .polaroid-clip {
        width: 210px;
    }

    img {
        height: 300px; 
    }
}

@media (max-width: 25em) {
    .polaroid p {
        max-width: 210px;
    }
}
</style>