<?php

namespace App\Http\Controllers;

use App\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Empleado::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Empleado::create([
            'dni' => $request->dni,
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'fechaNacimiento' => $request->fechaNacimiento,
            'direccion' => $request->direccion,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'directivo' => $request->directivo,
            'doctor' => $request->doctor,
            'activo' => $request->activo
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Empleado::where('dni',$id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Empleado::where('dni', $request->dni)
            ->update([
                'nombre' => $request->nombre,
                'apellidos' => $request->apellidos,
                'fechaNacimiento' => $request->fechaNacimiento,
                'direccion' => $request->direccion,
                'telefono' => $request->telefono,
                'email' => $request->email,
                'directivo' => $request->directivo,
                'doctor' => $request->doctor,
                'activo' => $request->activo
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //empleado actual
        $empleado = Empleado::where('dni', $id)->get();

        //compruebo si es auxiliar, lo borro y si no lo doy de baja
        if($empleado[0]->doctor == "false")
        {
            DB::table('empleados')->where('dni', $id)->delete();
            return "borrado";
        }
        else
        {
            Empleado::where('dni', $id)
                ->update(['activo' => false]);
            return "De baja";
        }
    }

    /** Metodo para comprobar si el usuario y contraseña existe */
    public function login(Request $request)
    {
        $empleado = Empleado::where([['email',$request->email],['contraseña',$request->contraseña]])->get();
        if($empleado->isEmpty())
            return "incorrecto";
        else if($empleado[0]->activo == 0)
            return "inactivo";
        else if($empleado[0]->directivo == 1)
            return "directivo";
        else if($empleado[0]->doctor == 0)
            return "auxiliar";
        else
            return "incorrecto";

    }

    public function perfil($email)
    {
        return Empleado::where('email',$email)->get();

    }
}
