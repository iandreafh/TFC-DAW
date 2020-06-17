<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cita;
use App\CitasTratamiento;
use Illuminate\Support\Facades\DB;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currentDate = date('Y-m-d');
        $prueba = DB::table('citas')
            ->join('citas_tratamientos', 'citas.id', '=', 'citas_tratamientos.idCita')
            ->join('tratamientos', 'citas_tratamientos.idTratamiento', '=', 'tratamientos.id')
            ->join('pacientes', 'pacientes.dni', '=', 'tratamientos.idPaciente')
            ->join('empleados', 'empleados.dni', '=', 'tratamientos.idEmpleado')
            ->where('citas.fecha', '=', $currentDate)->orderBy('citas.hora')
            ->select('citas_tratamientos.*','citas.*','tratamientos.*','pacientes.*','empleados.nombre as nombreDoctor', 'empleados.apellidos as apellidosDoctor')
        ->get();
        return $prueba;

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cita = DB::table('citas')
            ->join('citas_tratamientos', 'citas.id', '=', 'citas_tratamientos.idCita')
            ->join('tratamientos', 'citas_tratamientos.idTratamiento', '=', 'tratamientos.id')
            ->join('pacientes', 'pacientes.dni', '=', 'tratamientos.idPaciente')
            ->join('empleados', 'empleados.dni', '=', 'tratamientos.idEmpleado')
            ->where('citas.id', '=', $id)
            ->select('citas_tratamientos.*','citas.*','tratamientos.*','pacientes.*','empleados.nombre as nombreDoctor', 'empleados.apellidos as apellidosDoctor')
        ->get();
        return $cita;
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
        Cita::where('id', $request->id)
            ->update([
                'fecha' => $request->fecha,
                'hora' => $request->hora,
                'asistencia' => $request->asistencia
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
        //
    }

    public function pagos()
    {
        $pagos = DB::table('pagos')->get();
        return $pagos;

    }

}
