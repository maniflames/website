<template>
<div>
  <Navbar /> 
  <main>
    <div class="projects">
      <nuxt-link v-for="project of projects" 
          :key="projects.indexOf(project)" :to="'/project/' + project.slug">
        <Polaroid
          :src="project.img" 
          :writing="project.title" 
          :alt="project.alt"
          :hasEffect="true"
        />
      </nuxt-link>
    </div>
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

  async asyncData() {
    //for some reason nuxt does not allow me to use the filesystem API, i might need to create some middelware but for now this quickfix will do
    let projectSlugs = ['sid', 'ssv', 'bladmuziek', 'virtuvis']
    let projects = []

    for(let slug of projectSlugs) {
      let file = await import('~/content/projects/' + slug + '.md')
      let projectData = file.default.attributes
      projectData.slug = slug
      projects.push(projectData)
    }

    return {
      projects: projects
    }
  }
}
</script>

<style>
.projects {
  display: flex; 
  /* overflow-x: scroll; */
  margin-top: 128px;
  /* scroll-snap-type: x mandatory; */
  /* scrollbar-width: none; */
  justify-content: space-around;
  flex-wrap: wrap;
}

.projects > a {
  margin: 16px;
  scroll-snap-align: center;
  text-decoration: none;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

@media (max-width: 52em) {
  .projects {
    margin-top: 0; 
  }
}

@media (max-width: 63em) {
  .projects {
    flex-direction: column; 
    align-items: center;
  }
}

@media (min-width: 119em) {
  .projects {
    justify-content: center;
  }
}
</style>
