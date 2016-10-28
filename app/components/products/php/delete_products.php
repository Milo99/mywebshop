<?php 
require_once '../../../../db.php';

if(isset($_GET['itemID'])){
$itemID = $_GET['itemID'];
 
$query="delete from products where id_prod='$itemID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
echo $json_response = json_encode($result);
}
?>