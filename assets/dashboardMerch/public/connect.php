<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tailorshack";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$product = $_POST['product'];
$quantity = $_POST['quantity'];

// Prepare and execute SQL statement
$sql = "INSERT INTO orders (name, email, product, quantity) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi", $name, $email, $product, $quantity);

if ($stmt->execute()) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
