<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
	$name = $_GET['item'];
	$price = $_GET['item2'];
	$disc = $_GET['item3'];
	$foto = $_GET['item4'];
	$description = $_GET['item5'];
 
	$query="INSERT INTO products(name_prod, description, price_gross, url_thumb, disc)  VALUES ('$name', '$description', '$price', '$foto', '$disc')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
	$result = $mysqli->affected_rows;
 
	echo $json_response = json_encode($result);
	}
?>