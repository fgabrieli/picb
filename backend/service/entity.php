<?php 
/**
 * Entity service
 */

require_once 'config.php';

require_once 'class/Entity.php';


$data = $_REQUEST['data'];
$method = ($_SERVER['REQUEST_METHOD'] == 'GET' ? 'get' : $data['action']);

$entity = new Entity();
$response = $entity->{$method}($data);
echo json_encode($response);

?>