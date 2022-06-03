<template>
  <div class="container">
    <h1>create employee</h1>
    <form action="" @submit.prevent="createemp">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >First name</label
        >
        <input
          type="text"
          class="form-control bg-dark text-light"
          id="exampleFormControlInput1"
          v-model="first_name"
        />
        
     
         <label for="exampleFormControlInput2" class="form-label"
          >Last name</label
        >
        <input
          type="text"
          class="form-control bg-dark text-light"
          id="exampleFormControlInput2"
          v-model="last_name"
        />
           <label for="exampleFormControlInput3" class="form-label"
          >email</label
        >
        <input
          type="email"
          class="form-control bg-dark text-light"
          id="exampleFormControlInput3"
          v-model="email"
        />
            <label for="exampleFormControlInput4" class="form-label"
          >Department</label
        >
        <input
          type="text"
          class="form-control bg-dark text-light"
          id="exampleFormControlInput4"
          v-model="department"
        />
            <input class="form-check-input"  type="radio" name="male" value="Male" v-model="gender" id="flexRadioDisabled" >
                        <label class="form-check-label" for="flexRadioDisabled">
                        Male
                        </label>
                   
                        <input class="form-check-input"  type="radio" name="Female" value="female" v-model="gender" id="flexRadioDisabled" >
                        <label class="form-check-label" for="flexRadioDisabled">
                            Female
                </label>
      
      
      <div>
          <button class="btn btn-success me-3">submit</button>
          <button class="btn btn-primary" @click="back">back</button>
      </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'createemp',
        data(){
            return{
                first_name:null,
                last_name:null,
                gender:null,
                department:null,
                email:null

            }
        },
     methods: {
    createemp() {
      axios
        .post(" http://localhost:3000/emps", {
               first_name: this.first_name,
                last_name:this.last_name,
                gender:this.gender,
                department:this.department,
                email:this.email
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push('/emps')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // programmaticaly navigation
    back(){
        this.$router.push('/emps')
    }
  },

}
</script>
