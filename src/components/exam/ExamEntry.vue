<template id="">
<div class="">


  <div class="">

    <fieldset>
      <legend>Exam Result Entry 2</legend>
      <label for="examTerm">Exam Term</label>
      <select class="examTerm" name="examTerm" v-model="examTermSelection" @change="loadTermScore()">
        <option value="First">First Term</option>
        <option value="Second">Second Term</option>
        <option value="Third">Third Term</option>
        <option value="Final">Final</option>
      </select>
    </fieldset>
    <div class="alert alert-info" v-show="flag.noEntry">There is no entry for this term. </div>
    <div class="alert alert-success" v-show="flag.fetch">Entry has been found for the selected term. </div>
    <div class="alert alert-success" v-show="flag.save">Entry has been saved. </div>
    <div class="container row">
      <div class="col-sm">
        <label for="">English I</label>
      </div>
      <div class="col-sm">
        <input type="text" class="examRecord" name="english-I" value="">
      </div>

      <div class="col-sm">
        <label for="">Language</label>
      </div>
      <div class="col-sm">
        <input type="text" name="language" value="" class="examRecord">
      </div>
    </div>

    <div class="container row">
      <div class="col-sm">
        <label for="">Science</label>
      </div>
      <div class="col-sm">
        <input type="text" name="science" class="examRecord" value="">
      </div>

      <div class="col-sm">
        <label for="">Math</label>
      </div>
      <div class="col-sm">
        <input type="text" name="math" class="examRecord" value="">
      </div>
    </div>

    <div class="container row">
      <div class="col-sm">
        <label for="">Opt. Math</label>
      </div>
      <div class="col-sm">
        <input type="text" name="opt-math" class="examRecord" value="">
      </div>

      <div class="col-sm">
        <label for="">Social Science</label>
      </div>
      <div class="col-sm">
        <input type="text" name="social-science" class="examRecord" value="">
      </div>
    </div>

    <div class="container row">
      <div class="col-sm">
        <label for="">Computer</label>
      </div>
      <div class="col-sm">
        <input type="text" name="computer" class="examRecord" value="">
      </div>

      <div class="col-sm">
        <label for="">English II</label>
      </div>
      <div class="col-sm">
        <input type="text" name="english-II" class="examRecord" value="">
      </div>
    </div>



    <button type="button" name="button" @click="saveExam()">Save Exam</button>


  </div>

</div>
</template>

<script type="text/javascript">
import {
  db
} from '../../dbconfig/firebaseConfig.js';

export default ({
  props: {
    id: String,
    grade: String
  },
  data() {
    return {
      Exams: {},
      Exam: {},
      examTermSelection: 'First',
      flag: {
        noEntry: false,
        fetch: false,
        save: false,
      }


    }
  },
  firebase: {
    gradeRef1: db.ref(),

  },

  methods: {
    saveExam: function() {
      this.flag.fetch = false;
      this.flag.noEntry = false;
      let ex = {};
      $('.examRecord').each(function() {
        let key = this.getAttribute('name');
        let value = this.value;
        ex[key] = value;

      });







      this.$firebaseRefs.gradeRef1.child(this.grade).child(this.id).child('Exam').child(this.examTermSelection).set(ex);
      this.flag.save = true;
      this.Exams = {};
      this.onClickButton();
    },
    loadTermScore: function() {


      this.flag.fetch = false;
      this.flag.noEntry = false;
      this.flag.save = false;

      this.$http.get("https://schoolrecord-73fe2.firebaseio.com/" + this.grade + "/" + this.id + "/Exam/" + this.examTermSelection + ".json").then(function(data) {
        return data.json();
      }).then(function(data) {

        for (let key in data) {

          $("input[name=" + key + "]").val((data[key]) == '' ? "--" : (data[key]));
          this.flag.fetch = true;
        }


        if (data == null) {
          this.flag.noEntry = true;
          $('.examRecord').each(function(a) {
            this.value = "";

          });

        }
      });


    },

    resetForm: function() {

    },
    onClickButton(event) {
      this.$emit('change', 'someValue')
    }

  },


})
</script>

<style media="screen">

</style>
