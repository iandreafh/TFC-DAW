<?php

use Illuminate\Database\Seeder;
use App\Tratamiento;
use App\Pago;

class PagosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Pago::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE pagos AUTO_INCREMENT = 1");

        $faker = \Faker\Factory::create();
//        $tratamientoNoPendiente = Tratamiento::where('sesiones','1')->get();
//        $tratamientoPendiente = Tratamiento::where('sesiones',">",'1')->get();
        $infoCitas = \App\CitasTratamiento::all();

        for($i=0;$i < count($infoCitas);$i++)
        {
            $t = Tratamiento::where('id',$infoCitas[$i]->idTratamiento)->get();
            Pago::create([
                'idPaciente' => $t[0]->idPaciente,
                'idCita' => $infoCitas[$i]->idCita,
                'fechaPagado' => $faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now'),
                'importe' => $t[0]->precio,
                'pendiente' => $faker->boolean(20)
            ]);
        }
//
//        for($i=0;$i < 9;$i++)
//        {
//            //Habrá pagado varias sesiones
//            for($j=0; $j < ($tratamientoPendiente[$i]->sesiones - 2); $j++)
//            {
//                Pago::create([
//                    'idPaciente' => $tratamientoPendiente[$i]->idPaciente,
//                    'fechaPagado' => $faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now'),
//                    'importe' => $tratamientoPendiente[$i]->precio,
//                    'pendiente' => false
//                ]);
//            }
//            //Otras no
//            for($j=($tratamientoPendiente[$i]->sesiones - 2); $j < $tratamientoPendiente[$i]->sesiones; $j++)
//            {
//                Pago::create([
//                    'idPaciente' => $tratamientoPendiente[$i]->idPaciente,
//                    'importe' => $tratamientoPendiente[$i]->precio,
//                    'pendiente' => true
//                ]);
//            }
//
//        }


    }
}
