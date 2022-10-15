<?php

declare(strict_types=1);

namespace App\Controller;

class OfferController extends AbstractController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = $this->offerModel->all();
        echo json_encode($response);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        if (!$this->request->hasPost()) {
            return [
                "success" => false,
                "message" => "Podaj wszystkie dane",
            ];
        }

        $userData = [
            'name' => $this->request->postParam('name'),
            // 'phone' => $this->request->postParam('phone'),
            // 'email' => $this->request->postParam('email'),
            // 'password' => $this->request->postParam('password')
          ];

        $response = $this->userModel->create($userData);
        echo json_encode($response);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        // $id = $this->getId();

        // if (!$id) {
        //     return [
        //         "success" => false,
        //         "message" => "Wystąpił błąd",
        //     ];
        // }

        // $response = $this->userModel->get($id);

        // return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        // $id = $this->getId();

        // if (!$this->request->isPost() && !$id) {
        //     return [
        //         "success" => false,
        //         "message" => "Wystąpił błąd",
        //     ];
        // }

        // $userData = [
        //     'name' => $this->request->postParam('name'),
        //     // 'phone' => $this->request->postParam('phone'),
        //     // 'email' => $this->request->postParam('email'),
        //     // 'password' => $this->request->postParam('password')
        // ];

        // $response = $this->userModel->edit($id, $userData);

        // return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if (!$id) {
            return [
                "success" => false,
                "message" => "Wystąpił błąd",
            ];
        }

        $response = $this->userModel->delete($id);
        echo json_encode($response);
    }
}
