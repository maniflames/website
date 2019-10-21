<template>
<div>
  <Navbar /> 
  <main class="projects">
    <Polaroid v-for="project of projects" 
        :key="projects.indexOf(project)"
        :src="project.img" 
        :writing="project.title" 
        :alt="project.alt"
        />
  </main>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Polaroid from '~/components/Polaroid.vue'

export default {
  components: {
    Navbar,
    Polaroid,
  },

  asyncData() {
    return {
      projects: [
        {
          title: 'testing',
          alt: 'a project pure so I can test this stuff',
          img: '/img/arduino.jpg'
        },
        {
          title: 'testing 2',
          alt: 'testing 2',
          img: '/img/fish.jpg'
        },
        {
          title: 'testing 3',
          alt: 'testing 3',
          img: '/img/RAM.jpg'
        },
        {
          title: 'testing 4',
          alt: ' hello',
          img: '/img/sport-kid.jpg'
        },
        {
          title: 'testing 5',
          alt: 'kfsknekjs',
          img: '/img/circuit.jpg'
        }
      ]
    }
  }
}
</script>

<style>
main.projects {
  display: flex; 
  overflow: scroll;
  margin-top: 128px;
  /* TODO: add scroll snap behaviour */
}

main > .polaroid {
  margin: 32px;
}
</style>
