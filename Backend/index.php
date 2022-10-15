<?php

declare(strict_types=1);

spl_autoload_register(function (string $classNamespace) {
  $path = str_replace(['\\', 'App/'], ['/', ''], $classNamespace);
  $path = "src/$path.php";
  require_once($path);
});

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Credentials: true');
header( 'Access-Control-Allow-Headers: *');

$configuration = require_once("config/config.php");

use App\Controller\AbstractController;
use App\Request;
use App\Exception\AppException;
use App\Exception\ConfigurationException;

use App\Controller\UserController;
use App\Controller\ProductController;
use App\Controller\CategoryController;
use App\Controller\OfferController;

file_get_contents('php://input');
$request = new Request($_GET, $_POST, $_SERVER);
// echo json_encode(['$_GET', $request]);
// die();

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

try {
  AbstractController::initConfiguration($configuration);

  $controller = AbstractController::getControllerType($url);
  switch ($controller) { 
    case 'product':
      (new ProductController($request))->run();
      break;
    case 'user':
      (new UserController($request))->run();
      break;
    case 'offer':
      (new OfferController($request))->run();
      break;
    case 'category':
      (new CategoryController($request))->run();
      break;
    default:
      echo json_encode([
        "success" => false,
        "message" => 'Model not found',
      ]);
  }
  
} catch (ConfigurationException $e) {
  //mail('xxx@xxx.com', 'Errro', $e->getMessage());
  echo json_encode([
      "success" => false,
      "message" => $e->getMessage(),
      "error" => 'ConfigurationException'
    ]);
} catch (AppException $e) {
  echo json_encode([
    "success" => false,
    "message" => $e->getMessage(),
    "error" => 'AppException'
  ]);
} catch (\Throwable $e) {
  echo json_encode([
    "success" => false,
    "message" => $e->getMessage(),
    "error" => 'Throwable'
  ]);
}
