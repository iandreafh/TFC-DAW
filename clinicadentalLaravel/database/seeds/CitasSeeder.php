<?php

use Illuminate\Database\Seeder;
use App\Cita;
use App\Tratamiento;

class CitasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Cita::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE citas AUTO_INCREMENT = 1");

        $faker = \Faker\Factory::create();

        $tratamientosUnicos = Tratamiento::where('sesiones','1')->get();
        $tratamientosSesiones = Tratamiento::where('sesiones','>','1')->get();

        for($i=0;$i < 45;$i++)
        {
            Cita::create([
                'fecha' => $faker->dateTimeBetween($startDate = '-2 years', $endDate = '+3 months'),
                'hora' => $faker->numberBetween($min = 9, $max = 20) .":" . $faker->randomElement($array = array ('00','15','30','45')),
                'asistencia' => $faker->boolean(95)
            ]);
        }

        for($i=0;$i < 6;$i++)
        {
            Cita::create([
                'fecha' => $faker->dateTimeBetween($startDate = 'today', $endDate = 'today'),
                'hora' => $faker->numberBetween($min = 9, $max = 20) .":" . $faker->randomElement($array = array ('00','15','30','45')),
                'asistencia' => false
            ]);
        }

    }
}
