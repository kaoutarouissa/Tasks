// storage.js
export function saveTasks(tasks) {
    localStorage.setItem("mesTaches", JSON.stringify(tasks));
}

export function getTasks() {
    return JSON.parse(localStorage.getItem("mesTaches")) || [];
}
