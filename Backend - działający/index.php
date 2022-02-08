<?php

declare(strict_types=1);

// spl_autoload_register(function (string $classNamespace) {
//   $path = str_replace(['\\', 'App/'], ['/', ''], $classNamespace);
//   $path = "src/$path.php";
//   require_once($path);
// });

// header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Credentials: true');
// header('Content-Type: application/json; charset=utf-8');
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

$configuration = require_once("config/config.php");

use App\Controller\AbstractController;
use App\Controller\UserController;
use App\Request;
use App\Exception\AppException;
use App\Exception\ConfigurationException;

$request = new Request($_GET, $_POST, $_SERVER);

try {
  // AbstractController::initConfiguration($configuration);
  var_dump('to po abstra');
  // (new UserController($request))->run();
  // $controller = new UserController($requestMethod);
  // $controller->processRequest();
} catch (ConfigurationException $e) {
  //mail('xxx@xxx.com', 'Errro', $e->getMessage());
  echo '<h1>Wystąpił błąd w dupa</h1>';
  echo 'Problem z applikacją, proszę spróbować za chwilę.';
} catch (AppException $e) {
  echo '<h1>Wystąpił błąd w dupa ale druga</h1>';
  echo '<h3>' . $e->getMessage() . '</h3>';
} catch (\Throwable $e) {
  echo '<h1>Wystąpił błąd w trzeciej dupie</h1>';
  var_dump($e);
}
