const scriptURL = "https://script.google.com/macros/s/AKfycbx2QXTygm9onbh_0qCpuIzAfq5yHPmVX10swloh1ip79m-gratE6SHLnSVu8nqKZ7Ep/exec"

function sendAttendance(action) {
    const employeeID = document.getElementById("employeeID").value;
    const name = document.getElementById("name").value;

    if(!employeeID || !name){
        alert("Please enter your EmployeeID and Name.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ employeeID, name, action}),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response from server:", data); 
        alert("Attendance recorded successfully!"); // To confirm submission success
        location.reload(); // Refresh page to clear inputs after submission
    })
    .catch(error => {
        console.error("Error:", error); // Log errors in the browser console if something fails
        alert("An error occured! Check console for details.");
    });
}

function clockIn() {
    sendAttendance("Clock In");
}

function clockOut() {
    sendAttendance("Clock Out");
}
