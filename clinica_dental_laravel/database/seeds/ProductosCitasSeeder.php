<?php

use Illuminate\Database\Seeder;
use App\ProductosCita;
use App\CitasTratamiento;
use App\Inventario;
use App\Cita;
use App\Tratamiento;

class ProductosCitasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        ProductosCita::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE productos_citas AUTO_INCREMENT = 1");
        $citas = Cita::where('asistencia','1')->get()->pluck('id')->toArray();
        $citaTrat = CitasTratamiento::whereIn('idCita',$citas)->get();
        $productos = Inventario::all()->pluck('id')->toArray();

        $faker = \Faker\Factory::create();

        for($i=0;$i < count($citaTrat);$i++)
        {
            $t = Tratamiento::where('id',$citaTrat[$i]->idTratamiento)->get();

            DB::table('productos_citas')->insert([
                'idCita' => $citaTrat[$i]->idCita,
                'idProducto' => $faker->randomElement($productos),
                'cantidad' => $faker->numberBetween($min="1", $max="2"),
                'created_at' => date('Y/m/d h:i:s', time()),
                'updated_at' => date('Y/m/d h:i:s', time())
            ]);

        }

    }
}
