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
                // {
                //     title: 'Ego is the enemy: overcoming your own thoughts',
                //     summary: 'There was one book that I had laying around that has always been interesting to me but I didn\'t finish until now. I\'m glad I picked it up and read it all.',
                //     url: 'https://dev.to/maniflames/the-book-that-will-drag-me-through-final-stage-of-my-bachelor-190b'
                // },
                {
                    title: 'From web to embedded: exploring a different sub-field within tech',
                    summary: 'For the past few years I have had the pleasure of learing software development. Like a lot of others, I initially focused on the web. Over time however I realized that, although I love the web, I wanted to build something that wouldn\'t disappear once you close your laptop.',
                    url: 'https://dev.to/maniflames/from-web-to-embedded-exploring-a-different-sub-field-within-tech-4g0l'
                },
                {
                    title: 'Audio Visualization with Rust',
                    summary: 'Since the start of this year I have been very determined to learn more about rust. I knew I wanted to do something with audio but had no idea where to start.',
                    url: 'https://dev.to/maniflames/audio-visualization-with-rust-4nhg'
                },
                {
                    title: 'Pointcloud effect in Three.js',
                    summary: 'Not too long ago I built a site that served as a submission for a small competition. To spice it up, I decided to add some Three.js.',
                    url: 'https://dev.to/maniflames/pointcloud-effect-in-three-js-3eic'
                },
                {
                    title: 'Tricks I learned to improve my communication',
                    summary: 'There are four tricks that improved my communication towards my co-workers and I would really like to share them with you.',
                    url: 'https://dev.to/maniflames/communication-tricks-i-picked-up-during-my-internship-4kdj'
                },
                {
                    title: 'Creating a custom shader in Three.js',
                    summary: 'From today on I can finally say that I have created a shader and used it within threejs.',
                    url: 'https://dev.to/maniflames/creating-a-custom-shader-in-threejs-3bhi'
                },
                {
                    title: 'How conventional commits improved my git skills',
                    summary: 'I am slowly realising how much I have learned in the past few months. But of all the things I have learned, a better understanding and usage of git is one of the thing that had the biggest impact.',
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
    padding-left: 32px; 
    padding-right: 32px; 

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