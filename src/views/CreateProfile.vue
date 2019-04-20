<template id="">
<div class="create">
<vue-header v-bind:title="title" id="he"></vue-header>
<vue-form></vue-form>


</div>
</template>

<script type="text/javascript">
import Heading from "../components/Header.vue"
import Form from "../components/StudentProfileForm.vue"

export default({
  components:{
    'vue-header':Heading,
    'vue-form': Form,
  },
  data(){
    return {
      title: "Create Student Profile"
    }
  },




});


</script>


<style media="screen" scoped>
#he{
text-align: left;

}

</style>
