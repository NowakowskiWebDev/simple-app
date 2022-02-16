<?php

declare(strict_types=1);

namespace App\Model;
use App\Interface\UserInterface;
use App\Exception\StorageException;
use App\Exception\NotFoundException;
use PDO;
use Throwable;

class UserModel extends AbstractModel implements UserInterface
{
  public function getAllAction() {
    
    try {
      $query = "
        SELECT id, name 
        FROM users
      ";

      $result = $this->conn->query($query);
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (Throwable $e) {
      echo '<h1>Wystąpił błąd w aplikacji</h1>';
      echo '<h3>' . $e->getMessage() . '</h3>';
      throw new StorageException('Nie udało się pobrać notatek', 400, $e);
    }
  }
}