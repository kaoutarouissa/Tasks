export function afficherTask(taskText, taskList) {
  const taskAjoute = document.createElement("div");

  
  taskAjoute.className = `
    bg-pink-100 text-gray-700 m-4 font-semibold 
    p-4 rounded-2xl shadow-md flex flex-row md:gap:4 md:flex-row 
    justify-between items-start md:items-center 
    mb-4  max-w-full md:max-w-3/4 lg:max-w-2/3 xl:max-w-1/2 mx-auto
  `;

  taskAjoute.innerHTML = `
    <div class=" px-4 py-2 rounded-xl mr-0 md:mr-4  whitespace-nowrap md:flex-1">
      <p class="text-gray-600 text-sm md:text-base">
        ${taskText}
      </p>
    </div>

    <div class="flex gap-3 mt-2 md:mt-0 shrink-0 items-center">
      <button class="doneBtn transition-transform active:scale-90">
        <i class="doneBtn fa-regular fa-circle-check text-green-600 text-2xl"></i>
      </button>
      <button class="deleteBtn transition-transform active:scale-90">
        <i class="deleteBtn fa-solid fa-delete-left text-red-600 text-2xl"></i>
      </button>
    </div>
  `;

  taskList.appendChild(taskAjoute);
}
