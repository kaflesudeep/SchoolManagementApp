<template id="">
<div class="">

  <table class="table" v-show="true">
    <thead>
      <tr id="tableHeader">
        <th scope="col">#</th>
          <th scope="col">Term</th>
        <th scope="col">English I</th>
        <th scope="col">Language</th>
        <th scope="col">Science</th>
        <th scope="col">Math</th>
        <th scope="col">Opt. Math</th>
        <th scope="col">Social Science</th>
        <th scope="col">Computer</th>
        <th scope="col">English II</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key, i) in Exams" id="studentBlock" v-show="true">
        <th scope="row">{{i+1}}</th>
          <th scope="row">{{key}}</th>
        <td>{{value['english-I'] |checkFail}}</td>
        <td>{{value['language']|checkFail}}</td>
        <td>{{value['science']|checkFail}}</td>
        <td>{{value['math']|checkFail}}</td>
        <td>{{value['opt-math']|checkFail}}</td>
        <td>{{value['social-science']|checkFail}}</td>
        <td>{{value['computer']|checkFail}}</td>
        <td>{{value['english-II']|checkFail}}</td>



        </td>
      </tr>
    </tbody>
  </table>





</div>
</template>
<script type="text/javascript">

export default ({
  props:{
    id: String,
    grade: String,
  },
  data(){
    return {
      Exams:{},
    }
  },
  methods: {
    test: function() {
      //https://schoolrecord-73fe2.firebaseio.com/grade1/-LcD2WE30ZDySDNKv8Gh/Exam
      this.$http.get("https://schoolrecord-73fe2.firebaseio.com/" + this.grade+"/"+this.id+"/Exam.json").then(function(data){
        return data.json();
      }).then(function(data){
        this.Exams= data;
      })
    },

    refreshData: function(){
      //https://schoolrecord-73fe2.firebaseio.com/grade1/-LcD2WE30ZDySDNKv8Gh/Exam
      this.$http.get("https://schoolrecord-73fe2.firebaseio.com/" + this.grade+"/"+this.id+"/Exam.json").then(function(data){
        return data.json();
      }).then(function(data){
        this.Exams= data;
      })
    }
  },

  filters: {
    checkFail: function(value){

      return(value<40 || value=="--")?"Fail":value;
    }
  },

  created(){
    this.refreshData();
  }
})

</script>
