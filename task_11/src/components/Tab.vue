<template>
    <div class="Tab">
      <b-container>
          <b-table striped hover bordered borderless footClone noCollapse :items="allUsers"></b-table>

      </b-container>
    </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Tab',
  methods : mapActions(['getUsers']),
  computed : mapGetters(['allUsers']),
  
  async mounted(){
      this.getUsers()
  },
 
}
</script>
