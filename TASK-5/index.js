const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Mobile Phone", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Keyboard", category: "electronics" },
    { name: "Shoes", category: "clothing" },
    { name: "Smartwatch", category: "electronics" },
    { name: "Sweater", category: "clothing" }
];

const productList = document.getElementById("productList");
const allBtn = document.getElementById("allBtn");
const elecBtn = document.getElementById("elecBtn");
const clothBtn = document.getElementById("clothBtn");
const search = document.getElementById("search");

function display(list) {
    productList.innerHTML = "";
    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        productList.appendChild(li);
    });
}

display(products);

allBtn.onclick = () => display(products);

elecBtn.onclick = () => {
    const filtered = products.filter(p => p.category === "electronics");
    display(filtered);
};

clothBtn.onclick = () => {
    const filtered = products.filter(p => p.category === "clothing");
    display(filtered);
};

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    display(filtered);
});
