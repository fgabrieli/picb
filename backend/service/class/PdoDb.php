<?php 

class PdoDb {
  // PDO instance
  public static $db;
  
  // db config
  private static $dbName = DB_NAME;
  private static $dbHost = DB_HOST;
  private static $dbUser = DB_USER;
  private static $dbPort = DB_PORT;
  private static $dbPasswd = DB_PASSWORD;
  
  private function __construct() {
    // ~ singleton pattern
  }
  
  public static function getDb() {
    try {
      if (!isset(self::$db)) {
        self::$db = new PDO(
            'mysql:host=' . self::$dbHost . ';port=' . self::$dbPort . ';dbname=' . self::$dbName,
            self::$dbUser,
            self::$dbPasswd,
            array( PDO::ATTR_PERSISTENT => false)
        );
      }
      
      return self::$db;
    } catch (Exception $e) {
      echo "Error: can't connect to database, $e->getMessage() \n";
    }
  }
}
?>