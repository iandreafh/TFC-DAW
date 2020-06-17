<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pagos', function (Blueprint $table) {
            $table->id();
            $table->string("idPaciente");
            $table->foreignId("idCita");
            $table->date("fechaPagado")->nullable($value = true);
            $table->float("importe");
            $table->boolean("pendiente")->default(true);
//            $table->timestamp('created_at')->useCurrent();
//            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });

        Schema::table('pagos', function (Blueprint $table) {
            $table->foreign('idCita')->references('id')->on('citas');
            $table->foreign('idPaciente')->references('dni')->on('pacientes');
        });
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pagos');
    }
}
