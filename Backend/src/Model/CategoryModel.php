<?php

declare(strict_types=1);

namespace App\Model;

use App\Exception\StorageException;
use App\Exception\NotFoundException;
use PDO;
use Throwable;

class CategoryModel extends AbstractModel
{
  public function all(): array {
    try {
      $query = "SELECT * FROM categories";

      $categories = $this->conn->query($query);   
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "Category Index",
        "data" => $categories->fetchAll(PDO::FETCH_ASSOC)
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać kategorii', 400, $e);
    }
  }

  public function get(int $id): array
  {
    try {
      $query = "SELECT * FROM categories WHERE id = $id";

      $category = $this->conn->query($query);
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "Category Get",
        "data" => $category->fetch(PDO::FETCH_ASSOC)
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać kategorii', 400, $e);
    }

    if (!$category) {
      throw new NotFoundException("Kategoria o id: $id nie istnieje");
    }

    return $category;
  }

  public function create(array $data): array
  {
    try {
      $name = $this->conn->quote($data['name']);
      // $type = $this->conn->quote($data['type']);
      // $img = $this->conn->quote($data['img']);
      // $price = $this->conn->quote($data['price']);
      // $city = $this->conn->quote($data['city']);
      $created = $this->conn->quote(date('Y-m-d H:i:s'));

      // $query = "INSERT INTO categories(name, type, img, price, city, created) VALUES($name, $type, $img, $price, $city, $created)";
      $query = "INSERT INTO categories(name, created) VALUES($name, $created)";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Category Create",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się utworzyć nowej kategorii', 400, $e);
    }
  }

  public function edit(int $id, array $data): array
  {
    try {
      $name = $this->conn->quote($data['name']);
      // $type = $this->conn->quote($data['type']);
      // $img = $this->conn->quote($data['img']);
      // $price = $this->conn->quote($data['price']);
      // $city = $this->conn->quote($data['city']);

      // $query = "UPDATE categories SET name = $name, type = $type, img = $img, price = $price, city = $city WHERE id = $id";
      $query = "UPDATE categories SET name = $name WHERE id = $id";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Category Edit",
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się zaktualizować notetki', 400, $e);
    }
  }

  public function delete(int $id): array
  {
    try {
      $query = "DELETE FROM categories WHERE id = $id LIMIT 1";
      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Category Delete",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się usunąć kategorii', 400, $e);
    }
  }
}
