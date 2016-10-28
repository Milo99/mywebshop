<?php 
require_once '../../../../db.php';

if(isset($_GET['item'])){
$id_user = $_GET['item'];
$firstname = $_GET['item2'];
$lastname = $_GET['item3'];
$address = $_GET['item4'];
$email = $_GET['item5'];
$phone = $_GET['item6'];

$query="UPDATE users SET firstname='$firstname',
							lastname='$lastname',
							address='$address',
							email='$email',
							phone='$phone' where id_user='$id_user'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
$result = $mysqli->affected_rows;
 
$json_response = json_encode($result);
}
?>