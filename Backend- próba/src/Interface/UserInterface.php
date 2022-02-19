<?php

declare(strict_types=1);

namespace App\Interface;

interface UserInterface
{
    public function create(array $data): void;
  
    public function get(int $id): array;
  
    public function edit(int $id, array $data): void;
  
    public function delete(int $id): void;
}
