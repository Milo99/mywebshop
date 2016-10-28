<?php
require_once '../../../../db.php';

if(isset($_GET['item'])){
$id_ord = $_GET['item'];
$id_prod = $_GET['item2'];
}
$query="INSERT INTO ord_prod(id_ord,id_prod)  VALUES ('$id_ord','$id_prod')";
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