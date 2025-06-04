<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WisataController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/wisata', [WisataController::class, 'index'])->name('api.wisata.index'); // 👈 ini ditambahkan
Route::post('/wisata', [WisataController::class, 'store'])->name('api.wisata.store');
Route::put('/wisata/{id}', [WisataController::class, 'update'])->name('api.wisata.update');
Route::delete('/wisata/{id}', [WisataController::class, 'destroy'])->name('api.wisata.destroy');

