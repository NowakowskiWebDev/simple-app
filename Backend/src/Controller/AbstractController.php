<?php

declare(strict_types=1);

namespace App\Controller;

use App\Request;

use App\Exception\ConfigurationException;
use App\Exception\NotFoundException;
use App\Exception\StorageException;

use App\Model\ProductModel;
use App\Model\UserModel;
use App\Model\OfferModel;
use App\Model\CategoryModel;

abstract class AbstractController
{
  private static array $configuration = [];

  protected Request $request;

  protected ProductModel $productModel;
  protected UserModel $userModel;
  protected OfferModel $offerModel;
  protected CategoryModel $categoryModel;

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
    $this->userModel = new UserModel(self::$configuration['db']);
    $this->offerModel = new OfferModel(self::$configuration['db']);
    $this->categoryModel = new CategoryModel(self::$configuration['db']);

    $this->request = $request;
  }

  public static function getControllerType($url): string
  {
    $url = explode( '/', $url );
    $fillterUrl = array_filter($url);

    return $fillterUrl[1] ?? '';
  }

  final public function run(): void
  {
    try {
      $action = $this->action();
      var_dump($action);
      var_dump($_POST['name']);
      // $this->$action();

    } catch (StorageException $e) {
      echo json_encode([
        "success" => false,
        "message" =>  $e->getMessage(),
        "error" => "StorageException"
      ]);
    } catch (NotFoundException $e) {
      echo json_encode([
        "success" => false,
        "message" =>  $e->getMessage(),
        "error" => "NotFoundException"
      ]);
    }
  }

  private function action(): string
  {
    return $this->request->getAction();
  }
}
