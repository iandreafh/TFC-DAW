<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(EmpleadosSeeder::class);
         $this->call(PacientesSeeder::class);
         $this->call(PiezaDentalsSeeder::class);
        $this->call(InventarioSeeder::class);
        $this->call(CitasSeeder::class);
        $this->call(TratamientosSeeder::class);
        $this->call(CitasTratamientosSeeder::class);
        $this->call(PagosSeeder::class);
        $this->call(ProductosCitasSeeder::class);

    }
}
