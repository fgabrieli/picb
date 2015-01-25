<?php 
/**
 * Entity REST service
 */

require_once 'PdoDb.php';

class Entity {
  private $db;
  
  function __construct() {
    $this->db = PdoDb::getDb();
  } 
  
  public function get($entityId) {
    $query = 'SELECT picture FROM entity WHERE id=:id';
    $stmt = $this->db->prepare($query);
    $stmt->bindParam(':id', $entityId, PDO::PARAM_INT);
    $stmt->execute();
    
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function add($entity) {
    $query = 'INSERT INTO entity (picture) VALUES (:picture)';
    $stmt = $this->db->prepare($query);
    $stmt->bindParam(':picture', $entity['picture'], PDO::PARAM_STR);
    $stmt->execute();
    
    return $this->db->lastInsertId();
  }

  public function update($entity) {
    // not needed, REST compliant
  }

  public function delete($entity) {
    // not needed, REST compliant
  }
}
?>