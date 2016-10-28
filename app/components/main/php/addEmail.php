<?php
require_once '../../../../db.php';

if(isset($_GET['item'])){
$email = $_GET['item'];
}
$query="INSERT INTO emails(email)  VALUES ('$email')";
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