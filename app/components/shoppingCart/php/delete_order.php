<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
$item = $_GET['item'];
 
$query="delete from orders where orders.id_ord='$item'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
echo $json_response = json_encode($result);
}
?>