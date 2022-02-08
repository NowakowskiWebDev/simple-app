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
  public function getAll() {
    
    try {
      $query = "
        SELECT id, title, created 
        FROM user
      ";

      $result = $this->conn->query($query);
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać notatek', 400, $e);
    }
  }
}