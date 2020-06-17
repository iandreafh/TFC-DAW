<?php
use App\Empleado;
use Illuminate\Database\Seeder;

class EmpleadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Empleado::whereNotNull('dni')->delete();
        DB::statement("ALTER TABLE empleados AUTO_INCREMENT = 1");

        $faker = \Faker\Factory::create();

        // Create 8 empleados
        for ($i = 0; $i < 9; $i++) {
            Empleado::create([
                'dni' => $faker->unique()->regexify('11111111[A-Z]'),
                'nombre' => $faker->firstName,
                'apellidos' => $faker->lastName,
                'fechaNacimiento' => $faker->date($format = 'Y-m-d', $max = '-20 years'),
                'direccion' => $faker->streetAddress,
                'telefono' => $faker->unique()->regexify('[6][0-9]{8}'), // 9 num aleatorios
                'email' => $faker->unique()->safeEmail,
                'contraseña' => $faker->unique()->regexify('[A-Za-z0-9_]{6}'), // contraseña aleatoria de 6 num y letras
                'doctor' => $faker->boolean(65),
                'directivo' => $faker->boolean(40),
                'activo' => $faker->boolean(80)
            ]);
        }

    }
}
