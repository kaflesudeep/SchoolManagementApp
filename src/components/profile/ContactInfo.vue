<template id="">
  <div class="section">
    <h3>Contact Info</h3>
    <p>
      <label for="">Phone Number</label> {{stu.ph}} <br>
      <label for="">Email</label> {{stu.email}} <br>
      <label for="">Address</label> {{stu.address}}
    </p>
  </div>
</template>
<script>
export default({
  props: ['stu'],
  data(){
    return {

    }
  },
})

</script>
