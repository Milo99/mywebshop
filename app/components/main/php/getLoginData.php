<?php
require_once '../../../../db.php';

if(isset($_GET['item'])){
$username = $_GET['item'];
$password = $_GET['item2'];
}
$query="SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}

# JSON-encode the response
echo $json_response = json_encode($arr);

?>