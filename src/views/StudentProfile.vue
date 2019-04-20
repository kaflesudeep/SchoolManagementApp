<template id="">
<div class="stuProfile">
  <h2 id="name">Account Name : {{student.StudentInfo.name}}</h2>

  <vue-profileInfo v-bind:stu='student.StudentInfo'></vue-profileInfo>
  <vue-contactInfo v-bind:stu='student.ContactInfo'></vue-contactInfo>
  <vue-performanceInfo v-bind:stu='student'> </vue-performanceInfo>


</div>
</template>
<script type="text/javascript">
import ProfileInfo from "../components/profile/ProfileInfo.vue"
import ContactInfo from "../components/profile/ContactInfo.vue"
import PerformanceInfo from "../components/profile/PerformanceInfo.vue"
export default ({
  components:{
    'vue-profileInfo': ProfileInfo,
    'vue-contactInfo': ContactInfo,
    'vue-performanceInfo': PerformanceInfo,

  },
  data() {
    return {
      id: this.$route.params.id,
      grade: this.$route.params.grade,
      student: {},

    }
  },

  created() {
    this.$http.get("https://schoolrecord-73fe2.firebaseio.com/grade" + this.grade + "/" + this.id + ".json").then(function(data) {
      return data.json();
    }).then(function(data) {
      this.student = data;
      this.student.id=this.id;


    })
  }
})
</script>
<style media="screen">



.stuProfile {
  text-align: left;
  margin: 10px;
}

.section {
  background-color: #eee;
  margin: 5px;

}

.section>p {
  margin-left: 25px;
}

.section>h3 {
  margin-left: 10px;
}
</style>
