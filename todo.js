export function todo(){
    const btn=document.getElementById("btnAjouter")
    const form=document.getElementById("forminput")
    const taskList=document.getElementById("taskList")
btn.addEventListener('click', function(r){
     r.preventDefault(); // empêcher le formulaire de reload page prc dert type submit f btn
    const taskValeur=form.value

    const taskAjoute=document.createElement("div")
    taskAjoute.className="bg-orange-300  p-4 rounded-2xl shadow-md flex justify-between items-center mb-2"
// const taskValeur=form.value
taskAjoute.textContent=taskValeur
taskList.appendChild(taskAjoute)
})}


