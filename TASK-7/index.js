const loadBtn = document.getElementById("loadBtn");
const retryBtn = document.getElementById("retryBtn");
const statusMsg = document.getElementById("status");
const postList = document.getElementById("postList");

function loadPostsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.3;
            if (fail) reject("Failed to load posts");
            else resolve([
                "Understanding JavaScript Promises",
                "Async/Await Made Simple",
                "DOM Manipulation Tips",
                "How APIs Work",
                "Mastering Frontend Basics"
            ]);
        }, 2000);
    });
}

async function loadPosts() {
    statusMsg.textContent = "Loading posts...";
    postList.innerHTML = "";
    retryBtn.style.display = "none";

    try {
        const posts = await loadPostsPromise();
        statusMsg.textContent = "";
        posts.forEach(title => {
            const li = document.createElement("li");
            li.textContent = title;
            postList.appendChild(li);
        });
    } catch (err) {
        statusMsg.textContent = err;
        retryBtn.style.display = "block";
    }
}

loadBtn.onclick = loadPosts;
retryBtn.onclick = loadPosts;
