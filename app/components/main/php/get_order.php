<?php
require_once '../../../../db.php';

$query="SELECT * FROM orders ORDER BY id_ord DESC LIMIT 1";
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