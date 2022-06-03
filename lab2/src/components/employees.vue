<template>
     <table class="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">gender</th>
                            <th scope="col">department</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="emp in emps" :key="emp.id">
                                <td>{{emp.id}}</td>
                                <td>{{emp.first_name}}</td>
                                <td>{{emp.email}}</td>
                                <td>{{emp.gender}}</td>
                                <td>{{emp.department}}</td>
                                <td><button type="button" @click='deleteEmp(emp.id)' class=" btn btn-danger ">Delete</button>
                                 <router-link
                                        :to="`/emps/${emp.id}`"
                                        class="btn btn-info rounder-circle"
                                        >more..</router-link
                                        >
                                        </td>
                            </tr>
                        
                        </tbody>
                    </table>
</template>
<script>
import axios from "axios";
export default {
    name:'allemployess',
    data() {
    return {
      emps: [],
        }
    },

    created() {
    this.getAllEmps();
  },
 
  methods: {
    async getAllEmps() {
      await axios
        .get("http://localhost:3000/emps")
        .then((res) => {
          console.log(res.data);
          this.emps = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteEmp(id){
         await axios
        .delete("http://localhost:3000/emps/"+id)
        .then((res) => {
          console.log(res.data);
          this.emps = res.data;
          this.getAllEmps();
        })
        .catch((err) => {
          console.log(err);
        });


    }
  },
}
</script>
