<?php 
require_once '../../../../db.php';

if(isset($_GET['itemID'])){
$itemID = $_GET['itemID'];
$status = $_GET['item'];

$query="UPDATE users SET status='$status' where id_user='$itemID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
$json_response = json_encode($result);
}
?>