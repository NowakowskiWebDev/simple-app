<?php

declare(strict_types=1);

header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Authorization, X-Requested-With");

return [
  'db' => [
    'host' => 'localhost',
    'database' => 'notes',
    'user' => 'dev',
    'password' => 'dev'
  ]
];
