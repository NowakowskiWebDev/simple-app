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

  protected ProductModel $productModel;
  protected UserModel $userModel;
  protected OfferModel $offerModel;
  protected CategoryModel $categoryModel;

  protected Request $request;
  protected array $url;

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

    // $this->url = $url;
    $this->request = $request;
  }

  final public function run()
  {
    try {

      $test = $this->store();

      return $test;
    } catch (StorageException $e) {
    } catch (NotFoundException $e) {
    }
  }
}
