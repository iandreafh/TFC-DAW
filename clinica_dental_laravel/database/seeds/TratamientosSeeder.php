<?php

use Illuminate\Database\Seeder;
use App\Tratamiento;
use App\Paciente;
use App\Empleado;

class TratamientosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Tratamiento::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE tratamientos AUTO_INCREMENT = 1");


        $faker = \Faker\Factory::create();
        $pacientes = Paciente::all()->pluck('dni')->toArray();
        $empleados = Empleado::where('doctor','1')->get()->pluck('dni')->toArray();

        //1 sesion comunes 'Revision','Limpieza','Empaste','Blanqueamiento'
        $tiposComunes = array('Revision','Limpieza','Empaste','Blanqueamiento');
        //1 sesion poco comunes 'Radiografía','Carilla','Prótesis'
        $tiposPocoComunes = array('Radiografía','Carilla','Prótesis');
        //Varias sesiones 'Ortodoncia','Periodoncia','Halitosis'
        $tiposSesiones = array('Halitosis','Periodoncia');


        // Create 10 de comunes
        for ($i = 0; $i < 10; $i++) {
            Tratamiento::create([
                'idPaciente' => $faker->randomElement($pacientes),
                'idEmpleado' => $faker->randomElement($empleados),
                'nombreTratamiento' => $faker->randomElement($tiposComunes),
                'precio' => $faker->numberBetween($min = 30, $max = 50),
                'sesiones' => '1'
            ]);
        }

        // Create 5 de poco comunes
        for ($i = 0; $i < 5; $i++) {
            Tratamiento::create([
                'idPaciente' => $faker->randomElement($pacientes),
                'idEmpleado' => $faker->randomElement($empleados),
                'nombreTratamiento' => $faker->randomElement($tiposPocoComunes),
                'precio' => $faker->numberBetween($min = 40, $max = 70),
                'sesiones' => '1'
            ]);
        }

        // Create 5 de tratamientos con varias sesiones
        for ($i = 0; $i < 5; $i++) {
            Tratamiento::create([
                'idPaciente' => $faker->randomElement($pacientes),
                'idEmpleado' => $faker->randomElement($empleados),
                'nombreTratamiento' => $faker->randomElement($tiposSesiones),
                'precio' => $faker->numberBetween($min = 20, $max = 40), //por sesion
                'sesiones' => $faker->numberBetween($min = 5, $max = 10)
            ]);
        }
        // 5 Ortodoncias
        for ($i = 0; $i < 5; $i++) {
            Tratamiento::create([
                'idPaciente' => $faker->randomElement($pacientes),
                'idEmpleado' => $faker->randomElement($empleados),
                'nombreTratamiento' => 'Ortodoncia',
                'precio' => '60', //por sesion
                'sesiones' => $faker->numberBetween($min = 10, $max = 24)
            ]);
        }

    }
}
