const scriptURL = "https://script.google.com/macros/s/AKfycbypCF-yspudg-dgpIfTOjfhi4Oux8wooECP_EZgOFUP7hPwgRNa93glXmzMqD37CStt/exec";

function sendAttendance(action) {
    const employeeID = document.getElementById("employeeID").value;
    const name = document.getElementById("name").value;

    if (!employeeID || !name) {
        alert("Please enter your Employee ID and Name.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
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
