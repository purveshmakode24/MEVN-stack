<template>
    <div class="hello">
        <p>All User Details right here>>></p>
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
        <ul v-if="persons && persons.length">
            <li class="person-block mr-5" v-for="person in persons">
                <p class="mt-2">Name: <strong>{{person.name}}</strong></p>
                <p>Job: {{person.job}}</p>
                <p>Salary: Rs.{{person.salary}}</p>
                <!-- Update and Delete operations-->
                <div class="operations">
                    <button type="button" class="btn btn-outline-primary btn-sm mb-2 mr-2" data-toggle="modal"
                            v-bind:data-target="`#updateModal-${person._id}`">Update
                    </button>
                    <button class="btn btn-outline-danger btn-sm mb-2" @click="deletePersonAPI(person._id)">Delete
                    </button>

                    <!-- The Modal -->
                    <div class="modal" v-bind:id="`updateModal-${person._id}`">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">Update</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <table>
                                        <tr>
                                            <td class="text-left">Name: <input type="text" class="form-control"
                                                                               v-model="Person.name"
                                                                               required>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">Job: <input type="text" class="form-control"
                                                                              v-model="Person.job" required>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-left">Salary: <input type="text" class="form-control"
                                                                                 v-model="Person.salary"
                                                                                 required>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <!-- Modal footer -->
                                <div class="modal-footer">
                                    <button @click="updatePerson(person._id)" class="btn btn-secondary btn-sm">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
        </ul>
        <div class="noPersons" v-else>
            <p>No People to Show</p>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    // import UpdatePerson from '../components/UpdatePerson';

    export default {
        name: "HomeComponent",
        // components: {UpdatePerson},

        data() {
            return {
                persons: [],
                Person: {name: '', job: '', salary: ''},
                // errors:[],
                errors: '',
            }
        },
        created() {
            axios.get(`http://localhost:3000`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.persons = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                    // this.errors.push(e)
                    this.errors = e.message;
                });


        },

        methods: {
            //delete person method
            deletePersonAPI(id) {
                axios.delete(`http://localhost:3000/delete/` + id)
                    .then(response => {
                        console.log(id);

                        // to fetch data after delete
                        axios.get(`http://localhost:3000`)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.persons = response.data;
                                console.log(response.data);
                            })
                            .catch(e => {
                                console.log(e);
                                // this.errors.push(e)
                            });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },

            //update person method
            updatePerson(id) {

                let updatePerson = {
                    toupdate_name: this.Person.name,
                    toupdate_job: this.Person.job,
                    toupdate_salary: this.Person.salary
                };

                console.log(updatePerson);

                axios.put(`http://localhost:3000/update/` + id, updatePerson)
                    .then(response => {
                        console.log(response);
                        // to fetch data after update
                        axios.get(`http://localhost:3000`)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.persons = response.data;
                                console.log(response.data);
                            })
                            .catch(e => {
                                console.log(e);
                                // this.errors.push(e)
                            });

                    })
                    .catch(err => {
                        console.log(err);
                        this.errors = err.message;
                    })
            }

        }
    }
</script>

<style scoped>
    .person-block {
        border: 1px solid gray;
    }

    .noPersons {
        background: aquamarine;
        padding: 30px;
    }

    li {
        list-style-type: none;
    }
</style>