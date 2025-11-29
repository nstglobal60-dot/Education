let selectedCourse = "";

function startCourse(courseName) {
    selectedCourse = courseName;

    document.getElementById("courses").classList.add("hidden");
    document.getElementById("courseContent").classList.remove("hidden");

    document.getElementById("courseTitle").innerText = courseName;
}

function completeCourse() {
    document.getElementById("courseContent").classList.add("hidden");
    document.getElementById("certificateSection").classList.remove("hidden");
}

function downloadCertificate() {
    const { jsPDF } = window.jspdf;

    let name = document.getElementById("studentName").value;

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const pdf = new jsPDF({
        orientation: "landscape",
    });

    pdf.setFontSize(24);
    pdf.text("EduLearn Academy Certificate", 30, 40);

    pdf.setFontSize(16);
    pdf.text(`This is to certify that`, 30, 60);

    pdf.setFontSize(22);
    pdf.text(name, 30, 80);

    pdf.setFontSize(16);
    pdf.text(`has successfully completed`, 30, 100);

    pdf.setFontSize(20);
    pdf.text(selectedCourse, 30, 120);

    pdf.save("certificate.pdf");
}
