<?php

declare(strict_types=1);

// spl_autoload_register(function (string $classNamespace) {
//   $path = str_replace(['\\', 'App/'], ['/', ''], $classNamespace);
//   $path = "src/$path.php";
//   require_once($path);
// });

$configuration = require_once("config/config.php");

use App\Controller\AbstractController;
use App\Controller\UserController;
use App\Request;
use App\Exception\AppException;
use App\Exception\ConfigurationException;

$request = new Request($_GET, $_POST, $_SERVER);

try {

  var_dump('dupa');
  // AbstractController::initConfiguration($configuration);
  // (new UserController($request))->run();
} catch (ConfigurationException $e) {
  //mail('xxx@xxx.com', 'Errro', $e->getMessage());
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  echo 'Problem z applikacją, proszę spróbować za chwilę.';
} catch (AppException $e) {
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  echo '<h3>' . $e->getMessage() . '</h3>';
} catch (\Throwable $e) {
  echo '<h1>Wystąpił błąd w aplikacji</h1>';
  dump($e);
}
