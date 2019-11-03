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
            <h1>interesting title</h1>
            <div class="container">
                <div class="column">
                <section v-if="details.team"> 
                    <h4>Team</h4>
                    <p>
                        {{ details.team }}
                    </p>
                </section>
                <section v-if="details.client"> 
                    <h4>Client</h4>
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
                <section v-if="details.seen"> <!-- TODO: v-if -->
                    <h4>As seen in</h4>
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
            <article>
                <h2>Background</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque laudantium aliquid accusantium? Nemo quod sequi at iure sed asperiores nisi alias. Illo tempore perspiciatis, ipsum porro molestias minus veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum obcaecati adipisci quo beatae harum id provident suscipit perspiciatis ex eaque distinctio cupiditate nisi quae, fuga, fugit architecto, totam ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est error voluptatem ipsum quis voluptatum id reiciendis amet tempora illo magnam hic dolorem excepturi velit, fugit nihil praesentium iusto molestiae fuga.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ad quos numquam autem nisi animi veniam in tenetur excepturi aliquid! Ullam, consequuntur quos possimus ipsum hic facere delectus alias in.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus obcaecati beatae tempora perferendis deleniti saepe corporis necessitatibus id facere! Repellat quisquam quaerat quasi incidunt praesentium eligendi illo provident, perferendis iusto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati officiis animi, earum magni praesentium nam id alias voluptatem sapiente excepturi illum nemo. Sequi vel consequuntur dicta cupiditate assumenda, facere quas!</p>
                <h2>Challanges</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo laborum mollitia cum aperiam id aliquid iure corporis impedit atque cupiditate totam hic nisi, voluptas sequi labore doloremque libero! Illo.</p>
                <img src="/img/webdev.jpg" alt="" srcset="">
            </article>
            <a href="#top">back to top</a>
        </main>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Polaroid from '~/components/Polaroid.vue'
import GithubLogo from '~/assets/svg/github.svg'
import DevLogo from '~/assets/svg/dev.svg'

export default {
    components: {
        Navbar, 
        Polaroid, 
        GithubLogo,
        DevLogo,
    },
    asyncData() {
        return {
          title: 'testing',
          alt: 'a project pure so I can test this stuff',
          img: '/img/arduino.jpg',
          details: {
              team: 'Cye Wong-Loi Sing, Natasha van Meerkeren, David Law, Imani Dap',
              client: 'Gemeente Rotterdam',
              role: 'Web Developer', 
              technologies: 'vue, nuxt, the internet',
              ended: 'October 2019',
              seen: [
                {
                    title: 'Profielen',
                    url: 'profielen.nl', 
                },
                {
                    title: 'Profielen',
                    url: 'profielen.nl', 
                }
              ],
              urls: [
                  {
                      icon: 'GithubLogo',
                      url: 'github.com'
                  },
              ],
          },
          previewImages: [
              {
                  src: '/img/arduino.jpg',
                  alt: 'a picture of an arduino',
                  title: 'yaaay'
              },
              {
                  src: '/img/RAM.jpg',
                  alt: 'a picture of RAM',
                  title: 'gotta remember something'
              },
              {
                  src: '/img/webdev.jpg',
                  alt: 'a picture of webdev',
                  title: 'yooooo'
              }
          ]
        }
    } 
}
</script>

<style lang="scss" scoped>
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
            margin: 0px; 
        }
    }
}

main {
    padding: 32px; 
}

article {
    max-width: 85ch;
    margin: auto;

    img {
        width: 450px;
        display: block;
        margin: auto; 
        margin-top: 64px;
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

        img {
           width: 100%; 
        }
    }
}
</style>