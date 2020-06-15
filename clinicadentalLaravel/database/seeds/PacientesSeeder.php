<?php
use App\Paciente;
use Illuminate\Database\Seeder;

class PacientesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();

        // Create 26 product records
        for ($i = 0; $i < 40; $i++) {
            Paciente::create([
                'dni' => $faker->unique()->regexify('[1-9]{8}[A-Z]'),
                'nombre' => $faker->firstName,
                'apellidos' => $faker->lastName,
                'fechaNacimiento' => $faker->date($format = 'Y-m-d', $max = '-5 years'),
                'direccion' => $faker->streetAddress,
                'telefono' => $faker->unique()->regexify('[6][0-9]{8}'), // 9 num aleatorios,
                'email' => $faker->unique()->safeEmail,
                'activo' => $faker->boolean(70),
                'created_at' => $faker->dateTimeBetween($startDate = '-6 years', $endDate = '-3 months')
            ]);
        }

    }
}
