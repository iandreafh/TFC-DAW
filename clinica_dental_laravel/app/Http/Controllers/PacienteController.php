<?php

namespace App\Http\Controllers;

use App\Paciente;
use App\Tratamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pacientes = DB::table('pacientes')
//            ->orderBy($tipo)
            ->get();
        return $pacientes;
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
        Paciente::create([
            'dni' => $request->dni,
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'fechaNacimiento' => $request->fechaNacimiento,
            'direccion' => $request->direccion,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'activo' => $request->activo
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($dni)
    {
        return Paciente::where('dni',$dni)->get();
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
        Paciente::where('dni', $request->dni)
            ->update([
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'fechaNacimiento' => $request->fechaNacimiento,
            'direccion' => $request->direccion,
            'telefono' => $request->telefono,
            'email' => $request->email,
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

        //todos los idPaciente que si tienen tratamientos en historial
        $pacientesConTratamientos = Tratamiento::all()->pluck('idPaciente')->toArray();

        //todos los dni de pacientes que no tienen ningun tratamiento en el historial
        $pacientesSinHistorial = Paciente::whereNotIn('dni',$pacientesConTratamientos)->get()->pluck('dni')->toArray();

        //compruebo si este dni esta sin historial, lo borro y si no lo doy de baja
        if(in_array($id,$pacientesSinHistorial))
        {
            DB::table('pacientes')->where('dni', $id)->delete();
            return "borrado";
        }
        else
        {
            Paciente::where('dni', $id)
                ->update(['activo' => false]);
            return "De baja";
        }

    }
}
