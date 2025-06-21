<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WisataController;
use App\Http\Controllers\ChatController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/wisata', [WisataController::class, 'index'])->name('api.wisata.index'); // 👈 ini ditambahkan
Route::post('/wisata', [WisataController::class, 'store'])->name('api.wisata.store');
Route::put('/wisata/{id}', [WisataController::class, 'update'])->name('api.wisata.update');
Route::delete('/wisata/{id}', [WisataController::class, 'destroy'])->name('api.wisata.destroy');

Route::post('/chat', [ChatController::class, 'chat'])->name('api.chat');

use App\Http\Controllers\HotelController;

Route::get('/hotels', [HotelController::class, 'index'])->name('api.hotels.index');
Route::post('/hotels', [HotelController::class, 'store'])->name('api.hotels.store');
Route::put('/hotels/{id}', [HotelController::class, 'update'])->name('api.hotels.update');
Route::delete('/hotels/{id}', [HotelController::class, 'destroy'])->name('api.hotels.destroy');
Route::apiResource('hotels', HotelController::class);
