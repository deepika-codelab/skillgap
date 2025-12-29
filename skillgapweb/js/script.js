document.getElementById("skillForm").addEventListener("submit", function(e){
    e.preventDefault();

    let skills = document.getElementById("skills").value;

    fetch("backend/analyze.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "skills=" + skills
    })
    .then(res => res.json())
    .then(data => {
        let output = `
        <h4>Required Skills</h4>
        <p>${data.required.join(", ")}</p>

        <h4>Your Skills</h4>
        <p>${data.user.join(", ")}</p>

        <h4 class="text-danger">Missing Skills</h4>
        <p>${data.missing.join(", ")}</p>
        `;
        document.getElementById("result").innerHTML = output;
    });
});
