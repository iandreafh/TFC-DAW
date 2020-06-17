<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    //
    protected $fillable = [
        'dni',
        'nombre',
        'apellidos',
        'fechaNacimiento',
        'direccion',
        'telefono',
        'email',
        'contraseña',
        'directivo',
        'doctor',
        'activo'
    ];
}
