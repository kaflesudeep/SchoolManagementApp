<template id="head">
<div class="header">

  <h2 id="heading-title">{{title}}</h2>
</div>
</template>
<script type="text/javascript">

export default({
  props: ['title'],

});
</script>

<style media="screen" >
#heading-title{
  text-align: left;
  margin: 10px;
}


</style>
