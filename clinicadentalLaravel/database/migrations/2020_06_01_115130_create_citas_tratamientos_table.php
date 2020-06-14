<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitasTratamientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas_tratamientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId("idCita");
            $table->foreignId("idTratamiento");
            $table->foreignId("idPieza");
            $table->timestamps();
        });

        Schema::table('citas_tratamientos', function (Blueprint $table) {
            $table->foreign('idCita')->references('id')->on('citas');
            $table->foreign('idTratamiento')->references('id')->on('tratamientos');
            $table->foreign('idPieza')->references('id')->on('pieza_dentals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas_tratamientos');
    }
}
