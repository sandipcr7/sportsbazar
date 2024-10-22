<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('dashboard')->as('dashboard.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome');
    })->name('dashboard');


});
Route::get('/', function () {
    return view('welcome');
});
