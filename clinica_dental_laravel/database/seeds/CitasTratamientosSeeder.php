<?php

use Illuminate\Database\Seeder;
use App\Cita;
use App\Tratamiento;
use App\PiezaDental;
use App\CitasTratamiento;

class CitasTratamientosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        CitasTratamiento::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE citas AUTO_INCREMENT = 1");

        $faker = \Faker\Factory::create();

        $citas = Cita::all()->pluck('id')->toArray();
        $unicaPieza = Tratamiento::whereIn('nombreTratamiento', ['Empaste','Prótesis'])->get()->pluck('id')->toArray();
        $zonaPieza = Tratamiento::whereNotIn('nombreTratamiento', ['Prótesis', 'Empaste'])->get();
        // 32 piezas dentales en total
        $piezas = PiezaDental::whereNotIn('id', [1,2,3])->get()->pluck('id')->toArray();

        //Tratamiento sobre una unica pieza dental
        for($i=0;$i < count($unicaPieza);$i++)
        {
            CitasTratamiento::create([
                'idCita' => $faker->unique()->randomElement($citas),
                'idTratamiento' => $unicaPieza[$i],
                'idPieza' => $faker->randomElement($piezas)
            ]);
        }

        //Tratamiento sobre una zona de la boca
        for($j=0;$j < count($zonaPieza);$j++)
        {
            if($zonaPieza[$j]->sesiones == '1')
            {
                CitasTratamiento::create([
                    'idCita' => $faker->unique()->randomElement($citas),
                    'idTratamiento' => $zonaPieza[$j]->id,
                    'idPieza' => $faker->randomElement($zonas = array(1,2,3))
                ]);
            }
            else {
                if($zonaPieza[$j]->nombre == 'Ortodoncia')
                {
                    for($i=0;$i < 4;$i++)
                    {
                        CitasTratamiento::create([
                            'idCita' => $faker->unique()->randomElement($citas),
                            'idTratamiento' => $zonaPieza[$j]->id,
                            'idPieza' => $faker->randomElement($zonas = array(1,2,3))
                        ]);
                    }
                }
                else
                {
                    for($i=0;$i < 2;$i++)
                    {
                        CitasTratamiento::create([
                            'idCita' => $faker->unique()->randomElement($citas),
                            'idTratamiento' => $zonaPieza[$j]->id,
                            'idPieza' => $faker->randomElement($zonas = array(1,2,3))
                        ]);
                    }
                }

            }

        }
    }
}
