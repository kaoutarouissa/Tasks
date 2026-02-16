import { afficherTask } from "./ui.js";
import { saveTasks, getTasks } from "./storage.js";
export function todo(){
    const btn=document.getElementById("btnAjouter")
    const form=document.getElementById("forminput")
    const taskList=document.getElementById("taskList")
    const msg=document.getElementById("emptyMessage")
    const regex = /^[a-zA-Z0-9 ]+$/
let tasks=getTasks()
    
  // 🔹 afficher toutes les tasks
    function renderTasks(){
        taskList.innerHTML = "";

        tasks.forEach(task => {
            afficherTask(task.texte, taskList, task.id);

            if(task.done){
                const last = taskList.lastElementChild;
                last.classList.add("line-through", "opacity-50");
            }
        });
    }

    renderTasks();

btn.addEventListener('click', function(r){
msg.classList.add("hidden"); //ne pas afficher le msg vide
    r.preventDefault(); // empêcher le formulaire de reload page prc dert type submit f btn
    const taskValeur=form.value
    if (!regex.test(taskValeur)) {
  alert("La tâche doit contenir selement des lettres et ne pas commencer par espace ");
  return;
}
const newtask={
  id:Date.now(),
  texte:taskValeur,
  done:false
};
tasks.push(newtask)
 saveTasks(tasks);
        renderTasks();
  //  afficherTask(taskValeur, taskList);
    form.value="";
    console.log(tasks)

})
//hna anlhdem ela btn sup and done
taskList.addEventListener("click", function(e){
const taskElement=e.target.closest("div")?.parentElement
  if(!taskElement) return
  const texte=taskElement.innerText.trim()
 if(e.target.classList.contains("deleteBtn")){
            tasks = tasks.filter(task => task.texte !== texte);
            taskElement.remove();
        }

        // task done
        if(e.target.classList.contains("doneBtn")){

            taskElement.classList.toggle("line-through");
            taskElement.classList.toggle("opacity-50");

            tasks = tasks.map(task => {
                if(task.texte === texte){
                    return {...task, done: !task.done};
                }
                return task;
            });
        }

        // console.log(tasks); // pour vérifier
    });

}

