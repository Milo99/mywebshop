<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
	$firstname = $_GET['item'];
	$lastname = $_GET['item2'];
	$email = $_GET['item3'];
	$message = $_GET['item4'];
 
	$query="INSERT INTO messages(firstname, lastname, email, text)  VALUES ('$firstname', '$lastname', '$email', '$message')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
	$result = $mysqli->affected_rows;
 
	echo $json_response = json_encode($result);
	}
?>,