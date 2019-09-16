<template>
    <div class="hello">
        <p>All User Details right here>>></p>
        <ul v-if="persons && persons.length">
            <li class="person-block mr-5" v-for="person in persons">
                <p class="mt-2">Name: <strong>{{person.name}}</strong></p>
                <p>Job: {{person.job}}</p>
                <p>Salary: Rs.{{person.salary}}</p>
                <!--<UpdatePerson/><DeletePerson/>-->
                <button class="btn btn-outline-danger btn-sm mb-2" @click="deletePersonAPI(person._id)">Delete</button>
            </li>
        </ul>
        <div class="noPersons" v-else >
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

        data(){
            return {
                persons:[],
                // errors:[],
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
                });


        },

        methods: {
            deletePersonAPI(id){
                axios.delete(`http://localhost:3000/delete/`+ id)
                    .then(response=>{
                        console.log(id);
                    })
                    .catch(err =>{
                        console.log(err);
                    });

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