<?php
require_once '../../../../db.php';

$status = '%';
if(isset($_GET['status'])){
	$status = $mysqli->real_escape_string($_GET['status']);
}
$query="SELECT * FROM brands ORDER BY id_bra ASC";
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