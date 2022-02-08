<?php

declare(strict_types=1);

namespace App\Controller;

use App\Model\UserModel as User;

class UserController extends AbstractController
{

    private $user;
    private $requestMethod;
    private $userId;

    public function __construct($requestMethod, $userId = null)
    {
        $this->user = new User();
        $this->requestMethod = $requestMethod;
        $this->userId = $userId;
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->userId) {
                    $response = $this->getUser($this->userId);
                } else {
                    $result = $this->user->getAll();
                    $response['status_code_header'] = 'HTTP/1.1 200 OK';
                    $response['body'] = json_encode($result);
                    echo $response;
                };
                break;
            case 'POST':
                $response = $this->createUserFromRequest();
                break;
            case 'PUT':
                $response = $this->updateUserFromRequest($this->userId);
                break;
            case 'DELETE':
                $response = $this->deleteUser($this->userId);
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }
}
