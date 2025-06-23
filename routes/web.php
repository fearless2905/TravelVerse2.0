<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/landing', function () {
    return Inertia::render('Landing/LandingPage');
    });

Route::get('/landing/travelverse-dashboard', function () {
    return Inertia::render('vr/travelverse-dashboard');
});

Route::get('/landing/hotel-booking', function () {
    return Inertia::render('Booking/HotelBooking');
});

Route::get('/dashboard', function () {
    return Inertia::render(component: 'Dashboard');
})
    ->name('dashboard');
//    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin/AdminDashboard');
    })->name('admin.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/uikit/button', function () {
    return Inertia::render('main/uikit/button/page');
})->name('button');

use App\Http\Controllers\WisataController;

Route::get('/wisata', function () {
    return Inertia::render('wisata/page');
})->name('wisata');

Route::post('/wisata', [WisataController::class, 'store'])->name('wisata.store');


use App\Http\Controllers\HotelController;

Route::get('/hotel', function () {
    return Inertia::render('hotel/page');
})->name('hotel');

Route::post('/hotel', [WisataController::class, 'store'])->name('hotel.store');




require __DIR__.'/auth.php';
