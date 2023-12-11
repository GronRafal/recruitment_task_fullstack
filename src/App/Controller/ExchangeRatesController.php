<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\NbpService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ExchangeRatesController extends AbstractController
{

    private $nbpService;

    public function __construct(NbpService $nbpService)
    {
        $this->nbpService = $nbpService;
    }

    public function index(): Response
    {
        $data            = $this->nbpService->fetchDataFromApi();
        $transformedData = $this->nbpService->transformDataFormat($data);
        $responseContent = json_encode($transformedData);
        return new Response(
            $responseContent,
            Response::HTTP_OK,
            ['Content-type' => 'application/json']
        );
    }


}
