<template>
    <div class="container">
        <!--errors-->
        <ul v-if="errors && errors.length">
            <!--if errors is an array, use this-->
                <!--<li class="errors" v-for="error of errors">-->
                    <!--{{error.message}}-->
                <!--</li>-->

            <!--for simple one time string error, use:-->
                <li class="errors">
                    {{errors}}
                </li>
        </ul>
        <!--end-->
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
        <button id="addPerson-btn" class="btn btn-secondary" @click="addToAPI">Submit</button>
    </div>


</template>

<script>
    import axios from 'axios';
    import * as router from "vue-router";

    export default {
        name: "AddPerson.vue",
        data() {
            return {
                Person: {name: '', job: '', salary: ''},
                errors: '',
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
                        this.errors = err.message;
                    })
            }
        }
    }
</script>

<style scoped>
    label {
        float: left;
    }

    button#addPerson-btn {
        float: left;
    }

    .errors {
        background-color: lightcoral;
        color: whitesmoke;
    }
</style>