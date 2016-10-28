<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
	$firstname = $_GET['item'];
	$lastname = $_GET['item2'];
	$address = $_GET['item3'];
	$email = $_GET['item4'];
	$phone = $_GET['item5'];
	$login = $_GET['item6'];
	$pass = $_GET['item7'];
 
	$query="INSERT INTO users(firstname, lastname, address, email, phone, username, password)  VALUES ('$firstname', '$lastname', '$address', '$email', '$phone', '$login', '$pass')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
	$result = $mysqli->affected_rows;
 
	echo $json_response = json_encode($result);
	}
?>