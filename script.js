let learners = [];

function addLearner() {
    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;

    if (name === "" || program === "") {
        alert("Please enter all details");
        return;
    }

    learners.push({ name, program });

    document.getElementById("name").value = "";
    document.getElementById("program").value = "";

    document.getElementById("message").innerText =
        "✅ Learner added successfully";

    displayLearners();
}

function displayLearners() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    learners.forEach((learner, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${learner.name}</td>
                <td>${learner.program}</td>
                <td>
                    <button onclick="editLearner(${index})">Edit</button>
                    <button onclick="deleteLearner(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editLearner(index) {
    const newName = prompt("Enter new learner name", learners[index].name);
    const newProgram = prompt("Enter new program", learners[index].program);

    if (newName && newProgram) {
        learners[index].name = newName;
        learners[index].program = newProgram;

        document.getElementById("message").innerText =
            "✏️ Learner updated successfully";

        displayLearners();
    }
}

function deleteLearner(index) {
    learners.splice(index, 1);

    document.getElementById("message").innerText =
        "🗑️ Learner deleted successfully";

    displayLearners();
}
