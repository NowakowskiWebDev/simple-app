<?php

declare(strict_types=1);

namespace App\Controller;

class CategoryController extends AbstractController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = $this->categoryModel->all();

        return $response;   
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

        $categoryData = [
            'name' => $this->request->postParam('name'),
            // 'type' => $this->request->postParam('type'),
            // 'img' => $this->request->postParam('img'),
            // 'price' => $this->request->postParam('price'),
            // 'city' => $this->request->postParam('city')
          ];

        $response = $this->categoryModel->create($categoryData);
        
        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $id = $this->getId();

        if (!$id) {
            return [
                "success" => false,
                "message" => "Wystąpił błąd",
            ];
        }

        $response = $this->categoryModel->get($id);

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        $id = $this->getId();

        if (!$this->request->isPost() && !$id) {
            return [
                "success" => false,
                "message" => "Wystąpił błąd",
            ];
        }

        $productData = [
            'name' => $this->request->postParam('name'),
            // 'type' => $this->request->postParam('type'),
            // 'img' => $this->request->postParam('img'),
            // 'price' => $this->request->postParam('price'),
            // 'city' => $this->request->postParam('city')
          ];

        $response = $this->categoryModel->edit($id, $productData);

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $id = $this->getId();

        if (!$id) {
            return [
                "success" => false,
                "message" => "Wystąpił błąd",
            ];
        }

        $response = $this->categoryModel->delete($id);

        return $response;
    }
}
