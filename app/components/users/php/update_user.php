<?php 
require_once '../../../../db.php';

if(isset($_GET['itemID'])){
$itemID = $_GET['itemID'];
$firstname = $_GET['item'];
$lastname = $_GET['item2'];
$address = $_GET['item3'];
$email = $_GET['item4'];
$phone = $_GET['item5'];
$login = $_GET['item6'];
$pass = $_GET['item7'];

$query="UPDATE users SET firstname='$firstname',
							lastname='$lastname',
							address='$address',
							email='$email',
							phone='$phone',
							username='$login',
							password='$pass' where id_user='$itemID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
$json_response = json_encode($result);
}
?>