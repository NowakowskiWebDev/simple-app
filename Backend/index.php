<?php

declare(strict_types=1);

spl_autoload_register(function (string $classNamespace) {
  $path = str_replace(['\\', 'App/'], ['/', ''], $classNamespace);
  $path = "src/$path.php";
  require_once($path);
});

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header( 'Access-Control-Allow-Credentials: true' );
header( 'Access-Control-Allow-Headers: *' );

$configuration = require_once("config/config.php");

use App\Controller\AbstractController;
use App\Controller\UserController;
use App\Request;
use App\Exception\AppException;
use App\Exception\ConfigurationException;

$request = new Request($_GET, $_POST, $_SERVER);

try {
  // AbstractController::initConfiguration($configuration);
  
  $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
  $uri = explode( '/', $uri );

  AbstractController($url, $request)->run();
} catch (ConfigurationException $e) {
  //mail('xxx@xxx.com', 'Errro', $e->getMessage());
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  echo '<h3>' . $e->getMessage() . '</h3>';
} catch (AppException $e) {
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  echo '<h3>' . $e->getMessage() . '</h3>';
} catch (\Throwable $e) {
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  echo '<h3>' . $e->getMessage() . '</h3>';
}
