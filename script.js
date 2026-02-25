document.addEventListener("DOMContentLoaded", function () {

    // Input references
    const nameInput = document.getElementById("nameInput");
    const roleInput = document.getElementById("roleInput");
    const bioInput = document.getElementById("bioInput");
    const linkedinInput = document.getElementById("linkedinInput");
    const githubInput = document.getElementById("githubInput");
    const imageUpload = document.getElementById("imageUpload");

    // Preview references
    const previewName = document.getElementById("previewName");
    const previewRole = document.getElementById("previewRole");
    const previewBio = document.getElementById("previewBio");
    const previewLinkedin = document.getElementById("previewLinkedin");
    const previewGithub = document.getElementById("previewGithub");
    const previewImage = document.getElementById("previewImage");

    // Live text preview
    nameInput.addEventListener("input", () => {
        previewName.textContent = nameInput.value || "Your Name";
    });

    roleInput.addEventListener("input", () => {
        previewRole.textContent = roleInput.value || "Your Role";
    });

    bioInput.addEventListener("input", () => {
        previewBio.textContent = bioInput.value || "Your bio will appear here...";
    });

    linkedinInput.addEventListener("input", () => {
    const link = linkedinInput.value.trim();

    if (link !== "") {
        previewLinkedin.href = link.startsWith("http") ? link : "https://" + link;
    } else {
        previewLinkedin.href = "#";
    }
});

githubInput.addEventListener("input", () => {
    const link = githubInput.value.trim();

    if (link !== "") {
        previewGithub.href = link.startsWith("http") ? link : "https://" + link;
    } else {
        previewGithub.href = "#";
    }
});

    // Image preview
    imageUpload.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

});
function downloadCard() {
    const card = document.getElementById("profileCard");

    html2canvas(card, { useCORS: true }).then(canvas => {
        const link = document.createElement("a");
        link.download = "profile-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}