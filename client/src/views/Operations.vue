<template>
    <div class="about">
        <h2>Add Person</h2>
        <AddPerson/>
        <!--<hr>-->
        <!--<h2>Update Person</h2>-->
        <!--<UpdatePerson/>-->
        <!--<hr>-->
        <!--<h2>Delete Person</h2>-->
        <!--<DeletePerson/>-->
    </div>
</template>

<script>
    import AddPerson from '../components/AddPerson'
    import UpdatePerson from '../components/UpdatePerson'

    export default {
        name: 'operations',
        data() {
            return {

            }
        },
        components:{
            AddPerson,
            // UpdatePerson,
        }
    }
</script>

<style>
    h2 {
        padding: 10px;
    }
</style>