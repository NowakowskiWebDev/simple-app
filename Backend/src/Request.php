<?php

declare(strict_types=1);

namespace App;

class Request
{
  private array $get = [];
  private array $post = [];
  private array $server = [];

  public function __construct(array $get, array $post, array $server)
  {
    $this->get = $get;
    $this->post = $post;
    $this->server = $server;
  }

  private function isPost(): bool
  {
    return $this->server['REQUEST_METHOD'] === 'POST';
  }

  private function isGet(): bool
  {
    return $this->server['REQUEST_METHOD'] === 'GET';
  }

  private function isPut(): bool
  {
    return $this->server['REQUEST_METHOD'] === 'PUT';
  }

  private function isDelete(): bool
  {
    return $this->server['REQUEST_METHOD'] === 'DELETE';
  }

  public function getAction(): string
  {
    if ($this->isPost()) return 'store';
    if ($this->isGet() && !$this->hasGet()) return  'index';
    if ($this->isGet() && $this->hasGet()) return  'show';
    if ($this->isPut()) return  'update';
    if ($this->isDelete()) return 'destroy';
    return 'index';
  }

  public function hasPost(): bool
  {
    return !empty($this->post);
  }

  public function hasGet(): bool
  {
    return !empty($this->get);
  }

  public function getParam(string $name, $default = null)
  {
    return $this->get[$name] ?? $default;
  }

  public function postParam(string $name, $default = null)
  {
    return $this->post[$name] ?? $default;
  }
}
