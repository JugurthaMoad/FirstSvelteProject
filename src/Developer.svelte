<script>
	import { createEventDispatcher } from 'svelte';
  import {developers} from './stores/dev_store'
  const display = createEventDispatcher();
 let developer = {
  f_name: "",
  l_name: "",
  age: 0,
  skills: [],
  experience:""
 }
export let show = false;
 let options = ["HTML", "CSS", "Javascript"]
 const  handleSubmit = ()=>{
  //console.log('develo = ', developer)
  developers.addDev(developer)
  developer = {
  f_name: "",
  l_name: "",
  age: 0,
  skills: [],
  experience:""
 }
  show = false
  display("close")
 }

</script>

<main>
 <div 
 on:click|self={()=>{
   show = false
  display("close")
 }}
 class={show ?"container":"hide" }>
 
  
  <form on:submit|preventDefault={handleSubmit}>
    <h1>
      <slot name="title">
        unknown title
      </slot>
    </h1>
     <div class="input_container">
      <label for="f_name">First Name : </label>
      <input type="text" bind:value={developer.f_name} id="f_name" placeholder="First Name" />
     </div>
     <div class="input_container">
      <label for="l_name">Last Name : </label>
      <input type="text" bind:value={developer.l_name}  id="l_name" placeholder="Last Name" />
     </div> 
     <div class="input_container">
      <label for="age">Age : </label>
      <input type="number" bind:value={developer.age} id="age" placeholder="Age" />
     </div>
     <div class="skills_container">
      Your skills : 
     
     {#each options as op}
      <div class="input_container">
        <label for={op}>{op}</label>
        <input type="checkbox" bind:group={developer.skills} value={op}/>
      </div>
     {/each}
    </div>
      <div class="input_container">
        <label for="exp">Experience</label>
        <select id="exp" bind:value={developer.experience}>
          <option value={"Junior"}>Junior</option>
          <option value={"Sinior"}>Sinior</option>
        </select>
      </div>
      <button>
        Add Developer
      </button>
  </form>
 </div>
</main>

<style>
  .hide {
    display: none;
  }
  .container {
    position: fixed;
    top:0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.515);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 30%;
    height: 50vh;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .skills_container{
    display: flex;
    margin: 20px auto;
  }
  button {
    margin: 10px;
  }
</style>