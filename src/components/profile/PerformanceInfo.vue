<template id="">
<div class="">
<vue-examResult :id =id :grade=grade ref="refreshChild"></vue-examResult>
<button type="button" name="button" @click="moreEntry=!moreEntry" >Toggle Entry</button>
<vue-examEntry :id =id :grade=grade @change="updateState" v-show="moreEntry"></vue-examEntry>


  <div class="">


  </div>
</div>
</template>
<script type="text/javascript">
import {db} from '../../dbconfig/firebaseConfig.js';
import ExamEntry from '../exam/ExamEntry';
import ExamResult from '../exam/ExamResult.vue';




export default ({
  components: {
    'vue-examEntry':ExamEntry,
    'vue-examResult':ExamResult
  },
  props: {
    'stu': Object,
    propA: String,
    propB: String
  },

  data() {
    return {
      id: this.stu.id,
      grade: ("grade"+this.stu.StudentInfo.grade),
      moreEntry: false,

      newBook: {
        title: 'Sudeep Kafle',
        author: 'sdsaaaaaaaaaaaaaadsd',
        url: 'http://dsds'
      },
    }
  },

  firebase:{
     gradeRef1: db.ref(),
  },



  methods: {
    saveExam: function() {
      this.$http.update("").then(function() {
        console.log("exam saved");
      })
    },
    test: function(a) {
      this.$firebaseRefs.gradeRef1.child(this.grade).child(this.id).child('Exam').set(this.exam);

    },
    updateState: function(a){
       this.$refs.refreshChild.refreshData();
    }
  }




})
</script>
