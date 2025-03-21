const scriptURL = "https://script.google.com/macros/s/AKfycbx2QXTygm9onbh_0qCpuIzAfq5yHPmVX10swloh1ip79m-gratE6SHLnSVu8nqKZ7Ep/exec";

function sendAttendance(action) {
    const employeeID = document.getElementById("employeeID").value;
    const name = document.getElementById("name").value;

    if (!employeeID || !name) {
        alert("Please enter your Employee ID and Name.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        mode: "cors",  // Important: Enable cross-origin requests
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ employeeID, name, action })
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response from server:", data);
        alert("Attendance recorded successfully!"); // Show success message
        location.reload(); // Refresh page to clear input fields
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred! Check console for details.");
    });
}

function clockIn() {
    sendAttendance("Clock In");
}

function clockOut() {
    sendAttendance("Clock Out");
}
