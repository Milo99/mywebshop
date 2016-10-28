<?php 
require_once '../../../../db.php';

if(isset($_GET['itemID'])){
$itemID = $_GET['itemID'];
$name = $_GET['item'];
$price = $_GET['item2'];
$disc = $_GET['item3'];
$foto = $_GET['item4'];
$description = $_GET['item5'];

$query="UPDATE products SET name_prod='$name',
							description='$description',
							price_gross='$price',
							url_thumb='$foto',
							disc='$disc' where id_prod='$itemID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
$json_response = json_encode($result);
}
?>