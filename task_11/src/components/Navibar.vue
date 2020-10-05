<template>
  <div class="Navi">
        <b-navbar toggleable="lg" type="dark" variant="success">
          <b-container>
              <b-navbar-brand href="#">Vue js</b-navbar-brand>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav></b-collapse>
          </b-container>
        </b-navbar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: '',
  props: {},
}
</script>


<style scoped>

</style>
