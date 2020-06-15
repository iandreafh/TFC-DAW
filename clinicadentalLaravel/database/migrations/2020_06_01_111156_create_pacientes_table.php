<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->string("dni");
            $table->string("nombre");
            $table->string("apellidos");
            $table->date("fechaNacimiento");
            $table->string("direccion");
            $table->string("telefono");
            $table->string("email");
            $table->boolean("activo");
            $table->timestamps();
        });

        Schema::table('pacientes', function (Blueprint $table) {
            $table->primary('dni');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
}
