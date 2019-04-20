<template id="form">
<div class="">
  <div class="" id="studentForm" v-show="!submitted">

    <form class="" action="" method="" id="myForm">


      <fieldset>
        <legend>Student Info</legend>
        <label for="">Name</label>
        <input type="text" name="" v-model="Student.StudentInfo.name">

        <label for="">Date of Birth</label>
        <input type="date" name="" v-model="Student.StudentInfo.dob">

        <label for="">Gender</label>
        <input type="text" name="" v-model="Student.StudentInfo.gender">

        <label for="">SSN</label>
        <input type="text" name="" v-model="Student.StudentInfo.ssn">

        <label for="">Grade</label>
        <select class="" name="" v-model="Student.StudentInfo.grade">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Contact Info</legend>

        <label for="">Phone</label>
        <input type="text" name="" v-model="Student.ContactInfo.ph">

        <label for="">Email</label>
        <input type="email" name="" v-model="Student.ContactInfo.email">

        <label for="">address</label>
        <input type="text" name="" v-model="Student.ContactInfo.address">


      </fieldset>
    </form>
    <button type="button" name="button" id="btn" v-on:click="SubmitForm" class="btn btn-outline-primary" ><span>Submit</span></button>
  </div>
  <div class="">
    <div class="" v-show="submitted">
      <h2 id="success">Account is created</h2>
    </div>
    <button type="button" name="button" v-show="submitted" v-on:click="reset()" id="submitForm" class="btn btn-outline-primary"> <span>Enter New Record</span> </button>
    <router-link to="/search" class="links"  v-show="submitted" ><button type="button" name="button" class="btn btn-outline-secondary" >Search Account</button> </router-link>
  </div>
</div>
</template>

<script type="text/javascript">
export default ({

  data() {
    return {
      Student: {
        StudentInfo: {
          name: 'XYZ',
          dob: '1990-11-20',
          gender: 'M',
          ssn: 'xxx-xxx-xxx',
          grade: 1
        },
        ContactInfo: {
          ph: 'xxx-xxx-xxxx',
          email: 'xyz@abc.com',
          address: 'xxx xxx xxx'
        },
        Exam: []
      },
      submitted: false,
    }
  },
  methods: {
    SubmitForm: function(event) {

      this.$http.post("https://schoolrecord-73fe2.firebaseio.com/grade" + this.Student.StudentInfo.grade + ".json", this.Student).then(function(data) {

        console.log(data.status);
        if (data.status == 200) {
          this.submitted = true;
        }



      });
    },
    reset: function() {

      this.Student.StudentInfo.name = "XYZ";
      this.Student.StudentInfo.dob = "1990-11-20";
      this.Student.StudentInfo.gender = "M";
      this.Student.StudentInfo.ssn = "xxx-xxx-xxx";
      this.Student.ContactInfo.ph = "xxx-xxx-xxxx";
      this.Student.ContactInfo.email = "xxx@abc.com";
      this.Student.ContactInfo.address = "xxx-xxx-xxx";

      this.submitted = false;

    }
  }


})
</script>
<style media="screen" scoped>
fieldset {
  margin: 15px;
  text-align: left;

}

label {
  display: inline-flex;
  width: 20%;
  margin: 5px;

}

input {
  display: inline-flex;
  width: 30%;
  margin-right: 40%;
}

#btn {
  align: left;
  margin: 0 0;
}

</style>

<style media="screen" scoped>
  legend{
    font-size: 1.4em;
    font-weight: bold;
    padding: 10px;
    margin:10px;
  }

  label{
    font-size: 1em;
    font-weight: bold;
    padding: 10px;
  }
  label:after{
    content: ':';
  }

  input{

    height: 25px;


  }


#success{
  color:green;
  height: 200px;
  padding: 40px;
}
</style>
