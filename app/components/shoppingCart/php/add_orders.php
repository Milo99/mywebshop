<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
	$id_user = $_GET['item'];
	$paid = $_GET['item2'];
	$comments = $_GET['item3'];
 
	$query="INSERT INTO orders(id_user, paid, comments)  VALUES ('$id_user', '$paid', '$comments')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
	$result = $mysqli->affected_rows;
 
	echo $json_response = json_encode($result);
	}
?>