<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    //
    protected $fillable = ['dni',
        'nombre',
        'apellidos',
        'fechaNacimiento',
        'direccion',
        'telefono',
        'email',
        'activo'
    ];
}
