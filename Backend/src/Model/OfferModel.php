<?php

declare(strict_types=1);

namespace App\Model;

use App\Exception\StorageException;
use App\Exception\NotFoundException;
use PDO;
use Throwable;

class OfferModel extends AbstractModel
{
  public function all(): array {
    try {
      $query = "SELECT * FROM offers";

      $offers = $this->conn->query($query);   
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "Offers All",
        "data" => $offers->fetchAll(PDO::FETCH_ASSOC)
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać oferty', 400, $e);
    }
  }

  public function get(int $id): array
  {
    try {
      $query = "SELECT * FROM offers WHERE id = $id";

      $offers = $this->conn->query($query);
      
      return [
        "code" => 200,
        "success" => true,
        "message" => "Offer Get",
        "data" => $offers->fetch(PDO::FETCH_ASSOC)
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się pobrać oferty', 400, $e);
    }
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

      // $query = "INSERT INTO products(name, type, img, price, city, created) VALUES($name, $type, $img, $price, $city, $created)";
      $query = "INSERT INTO offers(name) VALUES($name)";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Offer Create",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się utworzyć nowej oferty', 400, $e);
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

      // $query = "UPDATE products SET name = $name, type = $type, img = $img, price = $price, city = $city WHERE id = $id";
      $query = "UPDATE offers SET name = $name WHERE id = $id";

      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Offer Edit",
      ];
    } catch (Throwable $e) {
      throw new StorageException('Nie udało się zaktualizować oferty', 400, $e);
    }
  }

  public function delete(int $id): array
  {
    try {
      $query = "DELETE FROM offers WHERE id = $id LIMIT 1";
      $this->conn->exec($query);

      return [
        "code" => 200,
        "success" => true,
        "message" => "Offer Delete",
      ];

    } catch (Throwable $e) {
      throw new StorageException('Nie udało się usunąć oferty', 400, $e);
    }
  }
}
