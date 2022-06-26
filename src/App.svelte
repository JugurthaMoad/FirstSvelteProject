<script>
import Developer from './Developer.svelte'
import {developers} from './stores/dev_store'
let show = false;
const handleShow = ()=>{
    show = !show
}
const handleClose = ()=>{
    show = false;
}
const handleDelete = (name)=>{
    developers.deleteDev(name)
}
const handleReset = ()=>{
    developers.rest()
}
</script>

<main>

<button on:click={handleShow}>
    Add Developer
</button>
<button on:click={handleReset}>
    Reset List of developers
</button>
{#each $developers as dev}
<div class="dev_container">
    <div>
        First Name : {dev.f_name}
    </div>
    <div>
        Last Name : {dev.l_name}
    </div>
    <div>
        age : {dev.age}
    </div>
    <div>
        Skills : {dev.skills}
    </div>
    <div>
        Experience : {dev.experience}
    </div>
    <button on:click={()=>handleDelete(dev.f_name)}>Delete dev</button>
</div>
{:else}
<p>
    No element in the list 
</p>
{/each}
<Developer {show} on:close={handleClose}>
    <span slot="title">
        Add developer form
    </span>
</Developer>
</main>

<style>
.dev_container{
    border: 1px solid black;
    width: 50%;
    padding: 10px;
    margin: 10px auto;
}
</style>