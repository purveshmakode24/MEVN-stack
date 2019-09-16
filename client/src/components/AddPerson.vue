<template>
    <div class="container">
        <div class="form-group">
            <label>Name</label>
            <input class="form-control form-control-lg" type="text" v-model="Person.name"
                   placeholder="Enter Name" required/>
        </div>
        <div class="form-group">
            <label>Job</label>
            <input class="form-control form-control-lg" type="text" v-model="Person.job" placeholder="Enter Job Title"
                   required/>
        </div>
        <div class="form-group">
            <label>Salary</label>
            <input class="form-control form-control-lg" type="text" v-model="Person.salary"
                   placeholder="Enter Salary (in Rs.)" required/>
        </div>
        <!--<ul v-if="errors && errors.length">-->
        <!--<li v-for="error of errors">-->
        <!--{{error.message}}-->
        <!--</li>-->
        <!--</ul>-->
        <button id="addPerson-btn" class="btn btn-secondary" @click="addToAPI">Submit</button>
    </div>


</template>

<script>
    import axios from 'axios';

    export default {
        name: "AddPerson.vue",
        data() {
            return {
                Person: {name: '', job: '', salary: ''},
                // errors:[]
            }
        },
        methods: {
            addToAPI() {
                let newPerson = {
                    i_name: this.Person.name,
                    i_job: this.Person.job,
                    i_salary: this.Person.salary
                };
                console.log(newPerson);

                axios.post(`http://localhost:3000/add`, newPerson)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((err) => {
                        console.log(err);
                        // this.errors.push(err);
                    })
            }
        }
    }
</script>

<style scoped>
    label {
        float: left;
    }

    button#addPerson-btn{
        float: left;
    }
</style>