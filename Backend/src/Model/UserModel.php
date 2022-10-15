<?php

declare(strict_types=1);

namespace App\Model;
use App\Interface\UserInterface;
use App\Exception\StorageException;
use App\Exception\NotFoundException;
use PDO;
use Throwable;

class UserModel extends AbstractModel
{
  public function all(): array {
    try {
      $query = "SELECT * FROM users";

      $users = $this->conn->query($query);   
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "Users Index",
        "data" => $users->fetchAll(PDO::FETCH_ASSOC)
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać usera', 400, $e);
    }
  }

  public function get(int $id): array
  {
    try {
      $query = "SELECT * FROM users WHERE id = $id";

      $user = $this->conn->query($query);
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "User Get",
        "data" => $user->fetch(PDO::FETCH_ASSOC)
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać usera', 400, $e);
    }
  }

  public function create(array $data): array
  {
    try {
      $name = $this->conn->quote($data['name']);
      // $phone = $this->conn->quote($data['phone']);
      // $email = $this->conn->quote($data['email']);
      // $password = $this->conn->quote($data['password']);
      // $created = $this->conn->quote(date('Y-m-d H:i:s'));

      $query = "INSERT INTO users(name) VALUES($name)";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "User Create",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się utworzyć nowego usera', 400, $e);
    }
  }

  public function edit(int $id, array $data): array
  {
    try {
      $name = $this->conn->quote($data['name']);

      $query = "UPDATE users SET name = $name WHERE id = $id";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "User Edit",
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się zaktualizować usera', 400, $e);
    }
  }

  public function delete(int $id): array
  {
    try {
      $query = "DELETE FROM users WHERE id = $id LIMIT 1";
      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "User Delete",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się usunąć usera', 400, $e);
    }
  }
}