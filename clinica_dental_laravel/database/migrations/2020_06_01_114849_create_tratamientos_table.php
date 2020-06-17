<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTratamientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tratamientos', function (Blueprint $table) {
            $table->id();
            $table->string("idPaciente");
            $table->string("idEmpleado");
            $table->string("nombreTratamiento");
            $table->float("precio");
            $table->integer("sesiones");
            $table->timestamps();
        });

        Schema::table('tratamientos', function (Blueprint $table) {
            $table->foreign('idPaciente')->references('dni')->on('pacientes');
            $table->foreign('idEmpleado')->references('dni')->on('empleados');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tratamientos');
    }
}
