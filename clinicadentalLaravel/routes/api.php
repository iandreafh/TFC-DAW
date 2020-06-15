<?php
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login','EmpleadoController@login');
Route::get('empleados','EmpleadoController@index');
Route::get('pacientes/{tipo}','PacienteController@index');
Route::get('pacientes/{dni}','PacienteController@show');
Route::delete('pacientes/{dni}','PacienteController@destroy');
