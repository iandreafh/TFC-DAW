<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Pacientes
Route::get('pacientes','PacienteController@index');
Route::get('pacientes/{dni}','PacienteController@show');
Route::post('alta','PacienteController@store');
Route::delete('borrar/{dni}','PacienteController@destroy');
Route::put('actualizar','PacienteController@update');

//Empleados
Route::get('empleados','EmpleadoController@index');
Route::get('empleados/{dni}','EmpleadoController@show');
Route::post('altaEmp','EmpleadoController@store');
Route::delete('borrarEmp/{dni}','EmpleadoController@destroy');
Route::put('actualizarEmp','EmpleadoController@update');

//Perfil
Route::get('perfil/{email}','EmpleadoController@perfil');

//Route::resource('pac','PacienteController');
