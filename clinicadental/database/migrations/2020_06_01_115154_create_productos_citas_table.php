<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosCitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos_citas', function (Blueprint $table) {
            $table->id();
            $table->foreignId("idCita");
            $table->foreignId("idProducto");
            $table->integer("cantidad");
            $table->timestamps();
        });

        Schema::table('productos_citas', function (Blueprint $table) {
            $table->foreign('idCita')->references('id')->on('citas');
            $table->foreign('idProducto')->references('id')->on('inventarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos_citas');
    }
}
