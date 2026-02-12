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
    const taskAjoute=document.createElement("div")
    taskAjoute.className="bg-pink-100 text-gray-700 min-w-0 m-6 text-lg font-semibold p-4 rounded-2xl shadow-md flex justify-between items-start mb-2w-full md:w-3/4 lg:w-1/2mx-auto break-words";
    // const taskValeur=form.value
    taskAjoute.textContent=taskValeur
    taskList.appendChild(taskAjoute)
    form.value="";

})}


