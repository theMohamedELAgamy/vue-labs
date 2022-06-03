<template>
    <div class="container">
      <h1>employee details</h1>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title">{{emp.id}}-{{emp.first_name}}{{emp.last_name}}</h5>
    <p class="card-text">{{emp.department}}</p>
     <p class="card-text">{{emp.email}}</p>
      <p class="card-text">{{emp.gender}}</p>
  </div>
</div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'empdetailsApp',
        
        data(){
            return{
                id:null,
                emp:{}
            }
        },
        
        created(){
         
           this.getempDetails();
        },
        methods:{
            getempDetails(){
                this.id = this.$route.params.id;
                axios.get(` http://localhost:3000/emps?id=${this.id}`)
                .then((res)=>{
                    console.log(res.data)
                    this.emp=res.data[0]
                 
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>