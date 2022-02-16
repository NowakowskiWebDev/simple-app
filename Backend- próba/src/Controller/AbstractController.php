<?php

declare(strict_types=1);

namespace App\Controller;

use App\Request;
use App\Exception\ConfigurationException;
use App\Exception\NotFoundException;
use App\Exception\StorageException;
use App\Model\ProductModel;

abstract class AbstractController
{
  protected const DEFAULT_ACTION = 'getAll';

  protected Request $request;

  private static array $configuration = [];

  public static function initConfiguration(array $configuration): void
  {
    self::$configuration = $configuration;
  }

  public function __construct(Request $request)
  {
    if (empty(self::$configuration['db'])) {
      throw new ConfigurationException('Configuration error');
    }
    $this->productModel = new ProductModel(self::$configuration['db']);

    $this->request = $request;
  }

  final public function run(): void
  {
    try {
      // $action = $this->action() . 'Action';
      // if (!method_exists($this, $action)) {
      //   $action = self::DEFAULT_ACTION . 'Action';
      // }
      $this->getAll();
    } catch (StorageException $e) {
      // Log::error($e->getPrevios());
      echo '<h1>Wystąpił błąd w aplikacji</h1>';
      echo '<h3>' . $e->getMessage() . '</h3>';
    } catch (NotFoundException $e) {
      echo '<h1>Wystąpił błąd w aplikacji</h1>';
      echo '<h3>' . $e->getMessage() . '</h3>';
    }
  }

  final protected function redirect(string $to, array $params): void
  {
    $location = $to;

    if (count($params)) {
      $queryParams = [];
      foreach ($params as $key => $value) {
        $queryParams[] = urlencode($key) . '=' . urlencode($value);
      }
      $queryParams = implode('&', $queryParams);
      $location .= '?' . $queryParams;
    }

    header("Location: $location");
    exit;
  }

  final private function action(): string
  {
    return $this->request->getParam('action', self::DEFAULT_ACTION);
  }
}
