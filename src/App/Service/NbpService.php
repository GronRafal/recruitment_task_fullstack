<?php

namespace App\Service;

use Symfony\Component\HttpClient\HttpClient;

class NbpService
{
    private $httpClient;

    public function __construct()
    {
        $this->httpClient = HttpClient::create();
    }

    /**
     * Fetch data from the NBP API.
     *
     * @return array
     */
    public function fetchDataFromApi()
    {
        $response = $this->httpClient->request('GET', 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json');

        return $response->toArray();
    }

    /**
     * Transform the API data to the desired format, keeping only specified currencies.
     *
     * @param array $apiData
     * @param array $currenciesToKeep
     * @return array
     */
    public function transformDataFormat($apiData)
    {
        $currenciesToKeep = ['EUR', 'USD', 'CZK', 'IDR', 'BRL'];
        $apiData = $apiData[0]['rates'];
        // Check if the input data is an array
        if (!is_array($apiData)) {
            return [];
        }

        // Filter the rates based on the specified currencies to keep
        $filteredRates = array_filter($apiData, function ($rate) use ($currenciesToKeep) {
            return in_array($rate['code'], $currenciesToKeep);
        });

        return $filteredRates;
    }
}
