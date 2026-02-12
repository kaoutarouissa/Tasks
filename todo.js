import { afficherTask } from "./ui.js";
export function todo(){
    const btn=document.getElementById("btnAjouter")
    const form=document.getElementById("forminput")
    const taskList=document.getElementById("taskList")
    const msg=document.getElementById("emptyMessage")
    const regex = /^[a-zA-Z0-9 ]+$/

btn.addEventListener('click', function(r){
msg.classList.add("hidden"); //ne pas afficher le msg vide
    r.preventDefault(); // empêcher le formulaire de reload page prc dert type submit f btn
    const taskValeur=form.value
    if (!regex.test(taskValeur)) {
  alert("La tâche doit contenir selement des lettres et ne pas commencer par espace ");
  return;
}

   afficherTask(taskValeur, taskList);
    form.value="";

})
//hna anlhdem ela btn sup and done
taskList.addEventListener("click", function(e){

  // pour supp btn
  if(e.target.classList.contains("deleteBtn")){ //e event etarget :elm li click 3lih qui contien deletbtn
    e.target.closest("div").parentElement.remove(); // closet: a9rab parent l selector div
  }

  // btn done
  if(e.target.classList.contains("doneBtn")){
    const task = e.target.closest("div").parentElement;
    task.classList.toggle("line-through");//presq dayra fhal add ghir hiya kadir switsh
    task.classList.toggle("opacity-50");
  }

});
}


