<?php
// Establish database connection
$conn = mysqli_connect("localhost", "root", "", "login_system");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// SQL query to check user credentials
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

// Check if user exists
if (mysqli_num_rows($result) == 1) {
    echo "Login successful!";
    // Redirect to dashboard or another page
} else {
    echo "Invalid username or password";
}

// Close database connection
mysqli_close($conn);
?>
