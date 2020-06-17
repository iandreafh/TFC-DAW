<?php

use Illuminate\Database\Seeder;
use App\Inventario;

class InventarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Inventario::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE citas AUTO_INCREMENT = 1");

        $faker = \Faker\Factory::create();

        $productos = array('Pack Desechable','Pack Instrumental','Enjuague Bucal','Pasta de Dientes Mini',
        'Pack Ortodoncia','Pack Empaste','Pack Limpieza','Pack Blanqueamiento','Pack Prótesis','Pack Anestesia','Pack Periodoncia');

        for($i=0;$i < count($productos);$i++)
        {
            Inventario::create([
                'nombreProducto' => $faker->unique()->randomElement($productos),
                'precio' => $faker->numberBetween($min="15", $max="25"),
                'stock' => $faker->numberBetween($min="40", $max="250"),
                'stockMin' => '50'
            ]);
        }

    }
}
