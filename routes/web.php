<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WatchController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/admin",[AdminController::class,"index"])->name("admin");
Route::get("/admin/video-list",function(){
    return view("admin/video_list");
})->name("video-list");

Route::get("/auth",[AuthController::class, "index"]);
Route::get("/auth/login",[AuthController::class, "login"])->name("login");
Route::post("/auth/login",[AuthController::class, "loginProcess"])->name("login.process");
Route::get("/auth/signup",[AuthController::class, "signup"])->name("signup");
Route::post("/auth/signup",[AuthController::class, "signupProcess"])->name("signup.process");
Route::get("/logout",[AuthController::class, "logout"])->name("logout");

Route::group(["middleware" => ["auth"]] ,function(){
    Route::get('/', [HomeController::class, "index"])->name("home")->middleware("auth");
    Route::get('/watch',  [WatchController::class, "index"]);
});

