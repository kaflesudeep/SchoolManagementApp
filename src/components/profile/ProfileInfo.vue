<template id="">
  <div class="section">
    <h3 id="stuInfo">Student Info</h3>
    <p>
      <label for="">Grade</label> {{stu.grade}} <br>
      <label for="">Gender</label> {{stu.gender}} <br>
      <label for="">Date of birth</label> {{stu.dob}} <br>
      <label for="">SSN</label> {{stu.ssn}} <br>


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
