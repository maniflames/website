<template>
    <main>
        <Navbar />
        <p class="message">For now I love blogging at DEV. I'll definitely post full articles on here soon, but in the meantime enjoy my writing over there! </p>
        <article v-for="article of articles"
                :key="articles.indexOf(article)"
        >
            <a :href="article.url" target="_blank" rel="noopener noreferrer">
                <h3>{{ article.title }}</h3>
                <p>{{ article.summary }}</p>
                <a>read more</a>
            </a>
        </article>
    </main>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
    components: {
        Navbar,
    },

    asyncData() {
        return {
            articles: [
                {
                    title: 'Audio Visualization with Rust',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/audio-visualization-with-rust-4nhg'
                },
                {
                    title: 'Pointcloud effect in Three.js',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/pointcloud-effect-in-three-js-3eic'
                },
                {
                    title: 'Tricks I learned to improve my communication',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/communication-tricks-i-picked-up-during-my-internship-4kdj'
                },
                {
                    title: 'Creating a custom shader in Three.js',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/creating-a-custom-shader-in-threejs-3bhi'
                },
                {
                    title: 'How conventional commits improved my git skills',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/how-conventional-commits-improved-my-git-skills-1jfk'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.message {
    width: 80vw;
    margin: auto;
    text-align: center; 
    margin-top: 64px;
    margin-bottom: 64px;
    max-width: 75ch;
}

article {
    margin: auto;
    margin-bottom: 48px; 
    max-width: 85ch;

    h3 {
        margin: 0; 
    }

    p {
        margin-top: 0; 
    }

    & > a {
        text-decoration: none; 

        a {
            text-decoration: underline;
        }
    }

    &:hover { 
        h3, p {
            color: $primary;
        }

        a {
            color: $primary-dark-1; 
        }
    }
}
</style>