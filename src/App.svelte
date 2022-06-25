<script>
import { element } from "svelte/internal";
import Developer from "./Developer.svelte";
let developer = {
    id: 0,
    firstName : "",
    lastName : "",
    age : 0,
    skills : [],
    experience : ""
}
let list = []
let show = false
const handleShow = ()=>{
    show = !show
}
const handleNotify = (e)=>{
    developer = {...e.detail}
    list = [developer, ...list]

}
const handleShowFromChild = (e)=>{
   show = e.detail
}
const handleDelete = (id)=>{
    list = list.filter(l => l.id !== id)
}
</script>

<main >
<button on:click={handleShow}>
    Add a developper 
</button>
<Developer 
on:show={handleShowFromChild}
on:dev_info={handleNotify} {show}/>

{#each list as element (element.id)}
<div class="dev_container">
    <div>
        First name: {element.firstName}
        Last name : {element.lastName} 
        age       : {element.age} <br/>
        skills    : {element.skills} <br/>
        experience: {element.experience} <br/>
    </div>
   <button on:click={()=>handleDelete(element.id)}>Delete Developer</button>
</div>
{:else}
<p>No developer info available</p>
{/each}
</main>

<style>
main{
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width: 100wv;
    height: 100vh;
    background-color: rgb(243, 243, 243);
    align-items: center;
    gap: 30px;
}
button{
    width: 200px;
    height: 50px;
  
}
.dev_container div{
    border: 1px solid black;
    padding: 5px;
}
</style>
