<script>
export default {
  render() {
    return null
  },
  layout: 'StaticMessage',
  head() {
    return {
      title: 'Imani Dap | 404',
    }
  },
  beforeMount() {
    this.$store.commit('addStaticMessageLayout', { 
      slug: '404', 
      name: '404', 
      title: 'Oops', 
      subtitle: 'unable to find this page',
    })
  }
}
</script>