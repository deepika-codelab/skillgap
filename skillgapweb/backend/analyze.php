<?php
include "db.php";

$userSkills = explode(",", $_POST['skills']);

$sql = "SELECT required_skills FROM job_roles WHERE role_name='Web Developer'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$requiredSkills = explode(",", $row['required_skills']);

$missingSkills = array_diff($requiredSkills, $userSkills);

echo json_encode([
    "required" => $requiredSkills,
    "user" => $userSkills,
    "missing" => array_values($missingSkills)
]);
?>
