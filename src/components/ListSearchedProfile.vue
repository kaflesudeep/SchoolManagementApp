<template id="">
<div class="Student">
  <br>
  <div class="filterS">


    <label id="gradeL">Choose the Grade:</label>

    <select class="custom-select" v-model="grade">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="12345">All</option>
    </select>
  </div>
  <button type="button" name="button" v-on:click="searchStudent()" class="btn btn-outline-primary"><span>Search</span></button> <br>
  <br><br>
  <div class="filterBy" v-show="seached">
    <form>

      <div class="form-group">
        <h3>Filter your Search</h3>
        <label for="byName">Search by Name</label>
        <input type="text" class="form-control" id="byName" v-model="searchName">
      </div>
      <div class="form-group">
        <label for="byGender">Search By Gender</label>
        <input type="text" class="form-control" id="byGender" v-model="searchGender">
      </div>
    </form>

  </div>



  <div class="">

    <table class="table" v-show="seached">
      <thead>
        <tr id="tableHeader">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">DoB</th>
          <th scope="col">Phone</th>
          <th scope="col">Grade</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Std, i) in FilterStudents" id="studentBlock" v-show="seached">
          <th scope="row">{{i+1}}</th>
          <td>{{Std.StudentInfo.name}}</td>
          <td>{{Std.StudentInfo.gender| genderFilter}}</td>


          <td>{{Std.StudentInfo.dob}}</td>
          <td>{{Std.StudentInfo.ph}}</td>
          <td>{{Std.StudentInfo.grade}}</td>
          <td>
              <router-link v-bind:to="'/profile/'+Std.StudentInfo.grade+'/'+Std.id"><button type="button" name="button"><i class="fas fa-edit"></i></i></button></router-link>
            <button type="button" name="button" v-on:click="deleteStudent(Std)"><i class="fas fa-trash-alt"></i></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="alert alert-info" role="alert" v-show="noResult">
      No result found wiht this criteria. Please change the filter and try again.
    </div>

  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      Students: [],
      grade: '12345',
      seached: false,
      searchName: '',
      searchGender: '',
      noResult: false,


    }
  },
  methods: {
    searchStudent: function() {
      this.searchName = '';
      this.searchGender = '';
      let arr = [];
      var a = this.grade.split('');
      a.map(x => {
        this.$http.get("https://schoolrecord-73fe2.firebaseio.com/grade" + x + ".json").then(function(data) {
          return data.json();
        }).then(function(data) {
          for (let key in data) {
            data[key].id = key;
            data[key].StudentInfo.id= key;
            arr.push(data[key]);
          }
        })
        this.Students = arr;
        this.seached = true;
      })
    },
    deleteStudent : function(stu){



        var id= stu.id;
        var grade = stu.StudentInfo.grade;
        this.$http.delete("https://schoolrecord-73fe2.firebaseio.com/grade" + grade +"/"+ id+ ".json").then(function(){

       console.log("du=ilter" + this.FilterStudents.pop());




        });
    }
  },
  computed: {
    FilterStudents: function() {

      var arrF = (this.Students.filter(x =>
        x.StudentInfo.name.toLowerCase().match(this.searchName.toLowerCase()) &&
        x.StudentInfo.gender.toLowerCase().match(this.searchGender.toLowerCase())

      ));


      if (arrF.length < 1 && this.seached == true) {
        this.noResult = true;

      } else {
        this.noResult = false;
      };




      return arrF;
    }

  },
  filters: {
    genderFilter: function(value) {
      if (value.toUpperCase() == 'M') {
        return 'Male';

      } else {
        return 'Female';
      }
    },


  }
}
</script>

<style media="screen">
#studentBlock {
  border: 1px solid black;
  background-color: #eee;
  max-width: 900px;
  margin: 5px auto;
  padding: 10px;
  text-align: left;
}

#gradeL {
  float: left;
  font-size: 25px;
  padding: 0 10px;

}

.custom-select {
  width: 100px;
  float: left;
}

.btn {
  width: 200px;
  hjeight: 55px;
  float: left;
  padding: 0 20px;
  margin: 0 20px;
}


.filterBy {
  width: 900px;
  left: 20px;
  align-items: left;
  margin-bottom: 20px;

}

input.form-control {
  width: 100px;
}

.form-group>label {
  width: 150px;
  float: left;
  text-align: left;

}

#studentBlock:nth-child(even) {
  background-color: white;
}


#tableHeader {
  background-color: rgb(50, 156, 223);
  color: white;
}

h3{
 text-align: left;

}

td{
  text-align: center;
}
</style>
