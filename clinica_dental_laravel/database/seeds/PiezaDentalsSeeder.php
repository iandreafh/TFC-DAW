<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\PiezaDental;

class PiezaDentalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        PiezaDental::whereNotNull('id')->delete();
        DB::statement("ALTER TABLE pieza_dentals AUTO_INCREMENT = 1");

        //Cada una de las 4 zonas (superior derecha, sup izq, inferior der, inf izq)
        for($i=1; $i < 5; $i++)
        {
            DB::table('pieza_dentals')->insert([
                'id' => $i.'1',
                'tipo' => 'Incisivo central'
            ]);
            DB::table('pieza_dentals')->insert([
                'id' => $i.'2',
                'tipo' => 'Incisivo lateral'
            ]);
            DB::table('pieza_dentals')->insert([
                'id' => $i.'3',
                'tipo' => 'Canino'
            ]);
            for($j=4; $j < 6; $j++)
            {
                DB::table('pieza_dentals')->insert([
                    'id' => $i.$j,
                    'tipo' => 'Premolar'
                ]);
            }
            for($j=6; $j < 9; $j++)
            {
                DB::table('pieza_dentals')->insert([
                    'id' => $i.$j,
                    'tipo' => 'Molar'
                ]);
            }
        }

        //Introduzco un id para mandibula superior, inferior y completa
        DB::table('pieza_dentals')->insert([
            'id' => '1',
            'tipo' => 'Mandíbula superior'
        ]);
        DB::table('pieza_dentals')->insert([
            'id' => '2',
            'tipo' => 'Mandíbula inferior'
        ]);
        DB::table('pieza_dentals')->insert([
            'id' => '3',
            'tipo' => 'Mandíbula completa'
        ]);

    }
}
