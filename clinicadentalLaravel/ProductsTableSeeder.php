<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::firstOrCreate([
            'name' => 'Pesoredux',
            'title' => 'Una eficacia visible contra la pérdida de peso.',
            'description' => 'Una eficacia visible contra el exceso de peso!
                              Pesoredux ataca las grasas instaladasdegradándolas y estimulando la pérdida de peso.',
            'image' => 'pesoredux.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/pesoredux'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim 24',
            'title' => '¡Ahora más FUERTE para la pérdida de peso!',
            'description' => 'Ahora más FUERTE para la pérdida de peso!
                              Turboslim Cronoactive Forte es un complemento alimenticio con dos comprimidos:
                              El de DÍA que  facilita la pérdida de peso y actúa sobre las funciones de eliminación, además de  ayudarte a quemar las grasas.
                              El de NOCHE  que contribuye a mantener niveles normales de glucosa en sangre y ayuda al mantenimiento de la piel.',
            'image' => 'turboslim24.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-cronoactive-forte'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim 24 45+',
            'title' => '¡Ahora más FUERTE para la pérdida de peso!',
            'description' => '¡Ahora más FUERTE para la pérdida de peso!
                               Turboslim Cronoactive Forte 45+ es un complemento alimenticio con dos comprimidos:
                               El comprimido DÍA  facilita la pérdida de peso, actúa sobre las funciones de eliminación y  ayuda a quemar las grasas. El Zinc completa la acción Día participando en el metabolismo normal de los ácidos grasos.
                               El comprimido NOCHE ayuda a regular la asimilación de los azúcares manteniendo los  niveles normales de glucosa en sangre. Para una acción completa, este comprimido asocia BiosilicaTM, colágeno, elastina y vitamina B8 que ayuda a remodelar la piel.',
            'image' => 'turboslim24-45.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-cronoactive-forte-45'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim 24 Men',
            'title' => '¡Ahora más FUERTE para la pérdida de peso!',
            'description' => 'Ahora más FUERTE para la pérdida de peso!
                                Turboslim Cronoactive Forte Men es un complemento alimenticio con dos comprimidos:
                                El comprimido DÍA, que facilita la pérdida de peso y actúa sobre las funciones de eliminación, además de ayudarte a quemar las grasas.
                                El comprimido NOCHE,  que contribuye a mantener niveles normales de glucosa en sangre al regular la asimilación de los azúcares.',
            'image' => 'turboslim24-Men.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-cronoactive-forte-men'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim Drenante',
            'title' => 'Para bajar de peso sin dejar de ser un placer.',
            'description' => 'Para bajar de peso sin dejar de ser un placer.
                              Drena y purifica el organismo en profundidad a la vez que ayuda a quemar las calorías.',
            'image' => 'turboslim-drenante.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-drenante'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim Retención de agua',
            'title' => 'Elimina el exceso de agua.',
            'description' => 'Elimina el exceso de agua.
                              Turboslim Retención de agua facilita las funciones de eliminación del organismo, favorece la eliminación renal del agua y te ayuda a regular la actividad hormonal',
            'image' => 'turboslim-retencion-de-agua.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-retencion-de-agua'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim Calorilight',
            'title' => '¡Aligera las comidas!',
            'description' => 'Aligera las comidas!
                                Turboslim Calorilight es un complemento alimenticio con activos de origen natural con un fuerte poder lipo-absorbente.',
            'image' => 'turboslim-calorilight.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-calorilight'
        ]);

        Product::firstOrCreate([
            'name' => 'Turboslim Vientre Plano',
            'title' => 'Una fórmula específica para ayudar a recuperar un vientre plano.',
            'description' => 'Una fórmula específica para ayudar a recuperar un vientre plano!
                              Su fórmula contiene un extracto de comino que facilita la digestión y de cilantro que ayuda a reducir la hinchazón para un vientre más plano.',
            'image' => 'turboslim-vientre-plano.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/turboslim-vientre-plano'
        ]);

        Product::firstOrCreate([
            'name' => 'XtraSlim 700',
            'title' => 'Un quemador de grasas extra.',
            'description' => 'Con tres acciones adelgazantes principales (quemador extra, moderador del apetito y drenante) y una acción metabólica. ¡Extra completo!',
            'image' => 'xtraslim700.jpg',
            'link' => 'http://www.fortepharma.com/es/control-de-peso/productos/xtraslim700'
        ]);

        Product::firstOrCreate([
            'name' => 'XtraSlim Captaredux 3 en 1 Extra',
            'title' => 'Capta grasas, bloquea azúcares y reduce la absorción de calorías. Capta hasta el 80% de las grasas(*).',
            'description' => 'Solución de seguimiento para las personas con sobrepeso severo y obesidad; asociado a una dieta hipocalórica y una actividad física adecuada, es un adyuvante eficaz para el control de peso.
                             (*) Test de eficacia in vitro de captura de grasas TC06/2016. Contenido en 38ml de aceite de oliva.',
            'image' => 'xtraslim7003en1.jpg',
            'link' => 'https://www.fortepharma.com/es/control-de-peso/productos/xtraslim-captador'
        ]);

        Product::firstOrCreate([
            'name' => 'XtraSlim 700 Men',
            'title' => 'Quemador de grasas extra fuerte y extra rápido.',
            'description' => 'Formula extra completa que sirve como solución rápida de adelgazamiento, solución inicial para personas con sobrepeso severo u obesidad, durante el programa de pérdida de peso y para hombres que deseen moldear su silueta y definir los músculos.',
            'image' => 'xtraslim700men.jpg',
            'link' => 'https://www.fortepharma.com/es/control-de-peso/productos/xtraslim-men'
        ]);

        Product::firstOrCreate([
            'name' => 'XtraSlim Reductor del Apetito Extra',
            'title' => 'Reduce el apetito y las punzadas de hambre entre comidas.',
            'description' => 'Solución inicial en un plan de adelgazamiento para personas con sobrepeso severo u obesidad y ocasionalmente para personas que comen entre horas o compulsivamente y sin control o para aquellas que se quedan con hambre o no se sienten llenos.',
            'image' => 'xtraslimreductor.jpg',
            'link' => 'https://www.fortepharma.com/es/control-de-peso/productos/xtraslim-reductor'
        ]);




    }
}
