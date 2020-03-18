<template>
    <div>
        <Navbar /> 
        <section id="#top" class="preview">
            <Polaroid v-for="img of previewImages"
                :key="previewImages.indexOf(img)"
                :src="img.src"
                :alt="img.alt"
                :writing="img.title"
                :isSmall="true"
            />
        </section>
        <section class="details">
            <h1>{{ title }}</h1>
            <div class="container">
                <div class="column">
                <section v-if="details.team"> 
                    <h4>Team</h4>
                    <p>
                        {{ details.team }}
                    </p>
                </section>
                <section v-if="details.client"> 
                    <h4>Client(s)</h4>
                    <p>
                        {{ details.client }}
                    </p>
                </section>
                <section v-if="details.role">
                    <h4>My Role</h4>
                    <p>
                        {{ details.role }}
                    </p>
                </section>
            </div>
            <div class="column">
                <section v-if="details.technologies">
                    <h4>Technologies</h4>
                    <p>
                        {{ details.technologies }}
                    </p>
                </section>
                <section v-if="details.ended"> 
                    <h4>Ended</h4>
                    <p>
                        {{ details.ended }}
                    </p>
                </section>
                <section v-if="details.seen">
                    <h4>As seen on</h4>
                    <ul>
                        <li v-for="publication of details.seen" :key="details.seen.indexOf(publication)">
                            <a :href="publication.url" target="_blank" rel="noopener noreferrer">{{ publication.title }}</a>
                        </li>
                    </ul>
                </section>
                <section v-if="details.urls">
                    <h4>Visit Project</h4>
                    <ul>
                        <li v-for="url of details.urls" :key="details.urls.indexOf(url)">  
                            <a :href="url.url" target="_blank" rel="noopener noreferrer"> 
                                <button> 
                                    <component :is="url.icon" :id="url.icon"></component>
                                </button>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
            </section>
        <main>
            <article v-html="html"></article>
            <a href="#top">back to top</a>
        </main>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Polaroid from '~/components/Polaroid.vue'
import GithubLogo from '~/assets/svg/github.svg'
import DevLogo from '~/assets/svg/dev.svg'
import ExternalIcon from '~/assets/svg/external.svg'
import InstagramLogo from '~/assets/svg/instagram.svg'

export default {
    components: {
        Navbar, 
        Polaroid, 
        GithubLogo,
        DevLogo,
        ExternalIcon,
        InstagramLogo
    },
    async asyncData({ params }) {
        let file = await import('~/content/projects/' + params.slug + '.md')
        let projectData = file.default.attributes
        projectData.html = file.html

        return projectData
    }
}
</script>

<style lang="scss">
.preview {
    display: flex;
    justify-content: space-around;
    height: 75vh; 
    margin: 0; 

    .polaroid {
        position: relative;
    }

    .polaroid:nth-child(1) {
        transform: rotate(3deg);
        top: 30%;
        left: 5%;
    }

    .polaroid:nth-child(2) {
        transform: rotate(-18deg); 
        top: 5%;
    }

    .polaroid:nth-child(3) {
        transform: rotate(16deg); 
        top: 45%; 
        right: 5%; 
    }
}

.details {
     h1 {
        text-align: center; 
    }

    .container {
        display: flex;
        justify-content: center;

        h4, p {
            margin: 0; 
        }

        p {
            width: 24ch; 
        }

        section {
            display: block;
            padding-bottom: 24px;
        }

        .column {
            margin-top: 0; 
            margin: 32px;
        }

        ul {
            display: flex;
            justify-content: flex-start;
            margin: 0px;
            margin-top: 8px; 

            li {
                width: fit-content;
                margin-right: 24px;
            }
        }
    }
}

main {
    padding: 32px; 
}

main article {
    max-width: 85ch;
    margin: auto;

    img,
    p img {
        width: 450px;
        max-width: 100%;
        display: block;
        margin: auto; 
        margin-top: 64px; 
    }

    ul {
        list-style: unset;
    }
}

@media (max-width: 64em) {
    .preview {
        height: fit-content;
        margin-top: 32px;
        margin-bottom: 64px;  

        .polaroid:first-child, 
        .polaroid:nth-child(3) {
            display: none;
        }

        .polaroid:nth-child(2) {
            transform: rotate(-6deg);
        }
    }
}

@media (max-width: 52em) {
    .details {
        h1 {
            word-wrap: break-word;
            font-size: 3.5em;  
        }

        .container {
            flex-direction: column; 
            
            .column { 
                margin-bottom: 0; 
                margin-top: 0; 
            }
        }
    }

    article {
        h2 {
            word-wrap: break-word;
        }

        img,
        p img {
           width: 100%; 
        }
    }
}
</style>