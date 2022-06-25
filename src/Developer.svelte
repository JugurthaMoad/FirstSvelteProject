<script>
   import { createEventDispatcher } from 'svelte';
   let dispacher = createEventDispatcher();
   const getRandomInt = () =>{
  return Math.floor(Math.random() * 50);
}

   export let show = false
   let id_provider = 0
   let id = 0
   let firstName =""
   let lastName = ""
   let age = 0
   let skills = [] // to store his skills ex: ReactJs JavaScript
   let experience = ""
   let options = ["junior", "senior"] 
   const handleSubmit = ()=>{
     let developer = {
      id: getRandomInt(),
      firstName,
      lastName,
      age,
      skills,
      experience
     }
     
     dispacher("dev_info", developer)
     show=false
     dispacher("show", show)
     firstName = ""
     lastName = ""
     age = 0
     experience = ""
     skills = []
   }
   const handleShow = ()=>{
      show = !show
      dispacher("show", show)
   }
</script>

<div on:click|self={handleShow} class={show ? "container" : "hide"}>
   <div class="form_container">
    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" placeholder="First Name "bind:value={firstName} />
      <input type="text" placeholder="Last Name "bind:value={lastName} />
      <input type="number" placeholder="age" bind:value={age} />
      <div  class="form_check">
         <input type="checkbox" name="html" bind:group={skills} value="HTML"/>
         <label for="html">HTML</label>
      </div>
      <div class="form_check">
         <input type="checkbox" name="css" bind:group={skills} value="CSS"/>
         <label for="css">CSS</label>
      </div>
      <div class="form_check">
         <input type="checkbox" name="js" bind:group={skills} value="JavaScript"/>
         <label for="js">JavaScript</label>
      </div>   
      <select bind:value={experience}>
         <option value={options[0]}> {options[0]}</option>
         <option value={options[1]}> {options[1]}</option>
      </select>
      <button>Submit</button>
    </form>
   </div>
</div>

<style>
 .container{
   position: fixed;
   display: flex;
   justify-content: center;
   align-items:center;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.713);
 }
 .form_container{
   min-width: 300px;
   padding: 10px;
   min-height:30vh;
   background-color: rgb(252, 248, 248);
 }
 .form_container form {
   display: flex;
   flex-direction: column;
   gap: 10px;
 }
 .form_check{
   display: flex;
   align-items: center;
 }
 .hide {
   display: none;
 }
</style>