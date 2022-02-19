<?php

declare(strict_types=1);

namespace App\Controller;

use App\Request;
use App\Exception\ConfigurationException;
use App\Exception\NotFoundException;
use App\Exception\StorageException;
use App\Model\ProductModel;
use App\Model\UserModel;

abstract class AbstractController
{
  private static array $configuration = [];

  protected ProductModel $productModel;
  protected UserModel $userModel;

  protected Request $request;
  protected array $url;

  public static function initConfiguration(array $configuration): void
  {
    self::$configuration = $configuration;
  }

  public function __construct(array $url, Request $request)
  {
    if (empty(self::$configuration['db'])) {
      throw new ConfigurationException('Configuration error');
    }

    $this->url = $url;
    $this->request = $request;
  }

  final public function run(Request $request): void
  {
    try {

      

    } catch (StorageException $e) {
    } catch (NotFoundException $e) {
    }
  }

  final private function getId(): int
  {
    return (int) $this->request->getParam('id');
  }
}
