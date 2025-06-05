<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $messages = $request->input('messages');

        $client = new Client();

        $apiKey = env('OPENAI_API_KEY'); // Add your API key to .env file as OPENAI_API_KEY

        try {
            $response = $client->post('https://openrouter.ai/api/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                    'HTTP-Referer' => 'https://www.sitename.com',
                    'X-Title' => 'SiteName',
                ],
                'json' => [
                    'model' => 'deepseek/deepseek-chat:free',
                    'messages' => $messages,
                ],
            ]);

            $body = json_decode($response->getBody(), true);
            $reply = $body['choices'][0]['message']['content'] ?? 'Maaf, tidak ada balasan dari AI.';

            return response()->json(['reply' => $reply]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Terjadi kesalahan pada server: ' . $e->getMessage()], 500);
        }
    }
}
