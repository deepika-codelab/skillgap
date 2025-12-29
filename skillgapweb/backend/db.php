<?php
$conn = new mysqli("localhost", "root", "", "skill_gap");

if ($conn->connect_error) {
    die("Database Connection Failed");
}
?>
