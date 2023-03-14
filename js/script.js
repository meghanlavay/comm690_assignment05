const $ = (id) => document.getElementById(id);

window.addEventListener("load", () => {
    const empForm = $("empForm");
    empForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let employeeId = $("id").value;
        let employeeName = $("employeeName").value;
        let employeeExt = $("ext").value
        let employeeEmail = $("email").value;
        let employeeDept = $("department").value;

        console.log(`ID: ${employeeId}`);
        console.log(`Name: ${employeeName}`);
        console.log(`Extension: ${employeeExt}`);
        console.log(`Email: ${employeeEmail}`);
        console.log(`Department: ${employeeDept}`);
    });
});
