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
use App\Request;
use App\Exception\AppException;
use App\Exception\ConfigurationException;
use App\Controller\CategoryController;
use App\Controller\UserController;

$request = new Request($_GET, $_POST, $_SERVER);

try {
  AbstractController::initConfiguration($configuration);

  echo json_encode($_POST);
  // $data = (new CategoryController($request))->run();
  $data = (new UserController($request))->run();
  // return json_decode($data);
  // $test = json_encode($data);
  // echo $test;
  // $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
  // $url = explode( '/', $url );
exit();
  // AbstractController($url, $request)->run();
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
