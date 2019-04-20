<template id="">
<div class="create">
<vue-header v-bind:title="title"></vue-header>
<vue-listStu></vue-listStu>

</div>
</template>

<script type="text/javascript">
import Heading from "../components/Header.vue"
import SearchList from "../components/ListSearchedProfile.vue"

export default({
  components:{
    'vue-header':Heading,
    'vue-listStu': SearchList,
  },
  data(){
    return {
      title: "Search Student Profile", 
    }
  }


});


</script>
