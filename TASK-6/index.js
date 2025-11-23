const tableBody = document.getElementById("tableBody");
const refresh = document.getElementById("refresh");
const spinner = document.getElementById("spinner");

async function fetchUsers() {
    spinner.style.display = "block";
    tableBody.innerHTML = "";

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    data.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;
        tableBody.appendChild(tr);
    });

    spinner.style.display = "none";
}

refresh.onclick = () => fetchUsers();

fetchUsers();
