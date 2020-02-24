<template>
<div>
    <Navbar />
    <main>
        <Polaroid src="/img/headshot.jpg" writing="October 2019, Shanghai" alt="A selfie of Imani wearing a Fairwhale coat in Shanghai. The whole scene looks quite futurisic with trees and tall buildings in the background."/>
        <p>
            Hi I'm Imani, a creative developer based in Rotterdam, The Netherlands. 
            I love exploring unique ways to mix technology and creativity. 

            For the past three years I've had the opportunity to get to know the world of software development. 
            Through building things for my bachelors in creative media and game technologies, an internship at UpReach in Berlin and a side job as student Developer at Brand New Guys, 
            I have acquired the skills and experience to help with building things for humans.
        </p>
    </main>
    <footer>
        <ul class="socials">
            <li v-for="social of socials"
                :key="socials.indexOf(social)"
            >
                <a :href="social.url" target="_blank" rel="noopener noreferrer" :data-icon="social.icon">
                    <component :is="social.icon" :id="social.icon" ></component>
                    <span>{{ social.name }}</span>
                </a>
            </li>
        </ul>
    </footer>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Polaroid from '~/components/Polaroid.vue'
import GithubLogo from '~/assets/svg/github.svg'
import DevLogo from '~/assets/svg/dev.svg'
import TwitterLogo from '~/assets/svg/twitter.svg'
import LinkedinLogo from '~/assets/svg/linkedin.svg'
import MailIcon from '~/assets/svg/mail.svg'

export default {
    components: {
        Navbar,
        Polaroid,
        GithubLogo,
        DevLogo,
        TwitterLogo,
        LinkedinLogo,
        MailIcon
    },
    asyncData() {
        return {
            socials: [
                {
                    icon: 'GithubLogo',
                    name: '@maniflames',
                    url: 'https://github.com/maniflames'
                }, 
                {
                    icon: 'DevLogo',
                    name: '@maniflames',
                    url: 'https://dev.to/maniflames'
                },
                {
                    icon: 'TwitterLogo',
                    name: '@maniflames',
                    url: 'https://twitter.com/maniflames'
                },
                {
                    icon: 'LinkedinLogo',
                    name: '/in/imani-dap',
                    url: 'https://www.linkedin.com/in/imani-dap/'
                },
                {
                    icon: 'MailIcon',
                    name: 'hi@imanidap.nl',
                    url: 'mailto:hi@imanidap.nl'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

main {
    display: flex; 
    flex-direction: row;
    justify-content: center;
    margin: 64px; 

    p {
        max-width: 50ch;
        margin: 32px; 
    }
}

.socials {
    display: flex;
    flex-direction: row; 
    justify-content: center; 
    flex-wrap: wrap; 
    max-width: 500px;
    margin: auto; 

    li {
        line-height: 3;
    }

    a {
        text-decoration: none; 
        color: $broken-white; 
        padding: 16px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 8px;
        }

        &[data-icon=LinkedinLogo] {
            align-items: flex-start;
        }

        &:hover {
            span {
                color: $primary;
            }

            #GithubLogo, #DevLogo, #LinkedinLogo {
                fill: $primary; 
                stroke-width: .2px;
            }
        
            #TwitterLogo, #MailIcon {
                stroke: $primary;
            }
        }
    }
}

@media (max-width: 52em) {
    main {
        flex-direction: column; 
        width: 100%;
        margin: auto; 
        align-items: center; 
    }
}
</style>