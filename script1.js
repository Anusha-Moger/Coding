// Customer Section
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", placeOrder);

function placeOrder(event) {
    event.preventDefault();

    const foodItems = Array.from(
        orderForm.elements["foodItems"].selectedOptions
    ).map(option => option.value);

    const customerName = orderForm.elements["customerName"].value;
    const quantity = orderForm.elements["quantity"].value;
    const address = orderForm.elements["address"].value;
    const phone = orderForm.elements["phone"].value;

    // Send the order details to the server or perform other actions
    console.log("Food Items:", foodItems);
    console.log("Customer Name:", customerName);
    console.log("Quantity:", quantity);
    console.log("Address:", address);
    console.log("Phone Number:", phone);

    // Clear form fields
    orderForm.reset();
}

// Admin Section
const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addEmployee);

function addEmployee(event) {
    event.preventDefault();

    const employeeName = employeeForm.elements["employeeName"].value;
    const employeePhone = employeeForm.elements["employeePhone"].value;
    const employeeAddress = employeeForm.elements["employeeAddress"].value;
    const employeeDepartment = employeeForm.elements["employeeDepartment"].value;
    const employeeDOB = employeeForm.elements["employeeDOB"].value;
    const employeeJoiningDate = employeeForm.elements["employeeJoiningDate"].value;

    // Send the employee details to the server or perform other actions
    console.log("Employee Name:", employeeName);
    console.log("Phone Number:", employeePhone);
    console.log("Address:", employeeAddress);
    console.log("Department:", employeeDepartment);
    console.log("Date of Birth:", employeeDOB);
    console.log("Joining Date:", employeeJoiningDate);

    // Clear form fields
    employeeForm.reset();
}
// Customer Section
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", placeOrder);

function placeOrder(event) {
    event.preventDefault();

    const foodItems = Array.from(
        orderForm.elements["foodItems"].selectedOptions
    ).map(option => option.value);

    const customerName = orderForm.elements["customerName"].value;
    const quantity = orderForm.elements["quantity"].value;
    const address = orderForm.elements["address"].value;
    const phone = orderForm.elements["phone"].value;

    // Send the order details to the server or perform other actions
    console.log("Food Items:", foodItems);
    console.log("Customer Name:", customerName);
    console.log("Quantity:", quantity);
    console.log("Address:", address);
    console.log("Phone Number:", phone);

    // Clear form fields
    orderForm.reset();
}

// Admin Section
const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addEmployee);

function addEmployee(event) {
    event.preventDefault();

    const employeeName = employeeForm.elements["employeeName"].value;
    const employeePhone = employeeForm.elements["employeePhone"].value;
    const employeeAddress = employeeForm.elements["employeeAddress"].value;
    const employeeDepartment = employeeForm.elements["employeeDepartment"].value;
    const employeeDOB = employeeForm.elements["employeeDOB"].value;
    const employeeJoiningDate = employeeForm.elements["employeeJoiningDate"].value;

    // Send the employee details to the server or perform other actions
    console.log("Employee Name:", employeeName);
    console.log("Phone Number:", employeePhone);
    console.log("Address:", employeeAddress);
    console.log("Department:", employeeDepartment);
    console.log("Date of Birth:", employeeDOB);
    console.log("Joining Date:", employeeJoiningDate);

    // Clear form fields
    employeeForm.reset();
}