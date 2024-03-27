let categorias = ['',
            'Batas Médicas', 'Overoles', 'Ropa Desechable Quirúrgica',
            'Gorros', 'Cubre Zapatos', 'Cubre Bocas', 'Termómetro Digital',
            'Guantes', 'Delantales', 'Máquinas', 'Limpieza'
        ]
        let categoriasActivas = [];
        let jsonActivoProductos = [];
        let jsonListaCompletaProductos = [
            {
                id: "1",
                descripcionCorta: "Batas de Paciente",
                descripcionLarga: "<ul><li>Tarima: 48'' 40'' </li><li>100 batas por caja</li><li>Unitalla</li><li>Color: Azul</li><li>SMS 35 GRS</li><li>Vestido de manga corta</li><li>Hecho de tela no tejida</li><li>Esterilizado</li><li>Costuras con hilo de algodón</li><li>2 cinturones de amarre</li><li>Repelente de líquidos</li><li>Protección contra partículas volátiles y polvo</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataPacienteUnitalla.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "1"
            },
            {
                id: "2",
                descripcionCorta: "Bata de Laboratorio con Cierre",
                descripcionLarga: "<ul><li>SMMS 35 GRS</li><li>Bata de manga larga hecha de tela no tejida</li><li>Resistencia a líquidos</li><li>Cómodo y Transpirable</li><li>Unitalla</li><li>Color: Azul</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataLaboratorioCierre.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "1"
            },
            {
                id: "3",
                descripcionCorta: "Bata de Laboratorio con Botones",
                descripcionLarga: "<ul><li>SMMS 35 GRS</li><li>Bata de manga larga hecha de tela no tejida</li><li>Con 3 Bolsas</li><li>Resistencia a líquidos</li><li>Cómodo y Transpirable</li><li>Protección contra partículas volátiles y polvo</li><li>Tarima 1,2m x 1m</li><li>Caja 20x20x20 pulgadas</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataLabBotones.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td><td class="cabecera">2XL</td><td class="cabecera">3XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>85 cm / 33.4 inch</td><td>86 cm / 33.8 inch</td><td>87 cm / 34.2 inch</td><td>88 cm / 34.6 inch</td><td>89 cm / 35 inch</td><td>90cm / 35.4 inch</td></tr><tr><td>Ancho Pecho</td><td>60 cm / 23.6 inch</td><td>62 cm / 24.4 inch</td><td>64 cm / 25.1 inch</td><td>66.5 cm / 26.1 inch</td><td>69 cm / 27.1 inch</td><td>71 cm / 27.9 inch</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "4",
                descripcionCorta: "Bata de Aislamiento AAMI NIVEL 1 Azul",
                descripcionLarga: "<ul><li>Polipropileno Spunbond 25GR</li><li>Recomendado para: Medicos / Cirugías, Visitantes, Precauciones de contacto.</li><li>Banda elástica en muñecas</li><li>Cintura de doble cinta</li><li>Color: Azul</li><li>Tarima 48'' 40''</li><li>Caja 18 cajas por tarima</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataAislamientoAAMIAzul.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>113 cm / 44.4 inch</td><td>114 cm / 44.8 inch</td><td>115 cm / 45.2 inch</td></tr><tr><td>Ancho Pecho</td><td>62 cm / 24.4inch</td><td>64 cm / 25.1 inch</td><td>66 cm / 25.9 inch</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "5",
                descripcionCorta: "Bata de Aislamiento AAMI NIVEL 1 Gris",
                descripcionLarga: "<ul><li>Polipropileno Spunbond 25GR</li><li>Recomendado para: Medicos / Cirugías, Visitantes, Precauciones de contacto.</li><li>Banda elástica en muñecas</li><li>Cintura de doble cinta</li><li>Color: Azul</li><li>Tarima 48'' 40''</li><li>Caja 18 cajas por tarima</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataAislamientoAAMIBlanca.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>113 cm / 44.4 inch</td><td>114 cm / 44.8 inch</td><td>115 cm / 45.2 inch</td></tr><tr><td>Ancho Pecho</td><td>62 cm / 24.4inch</td><td>64 cm / 25.1 inch</td><td>66 cm / 25.9 inch</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "6",
                descripcionCorta: "Bata de Aislamiento AAMI NIVEL 2",
                descripcionLarga: "<ul><li>SMMS 25GR Tela Antiestática</li><li>Recomendado para: Mediciona/Cirugía, UCI, Emergencias Aéreas y Precauciones de Contacto</li><li>Esterilizado</li><li>Hipoalergénico</li><li>Suave y Resistente</li><li>Adaptable</li><li>Respirable</li><li>Bata 100% Personalizable</li><li>Colores Blanco y Azul</li><li>Tarima 48'' 40''</li><li>Caja: 18-20 cajas por tarima</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/AAMINivel2.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">2XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>113 cm / 44.4 inch</td><td>114 cm / 44.8 inch</td><td>115 cm / 45.2 inch</td><td>116 cm / 45.6 inch</td></tr><tr><td>Ancho Pecho</td><td>62 cm / 24.4inch</td><td>64 cm / 25.1 inch</td><td>66 cm / 25.9 inch</td><td>68 cm / 26.7 inch</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "7",
                descripcionCorta: "Bata quirúrgica Nivel 3 PP + PE 40GRS",
                descripcionLarga: "<ul><li>Recomendado para: extracción de sangre arterial, inserción de una vía intravenosa, sala de emergencias, traumatología.</li><li>Utilizado en situación de riesgo MODERADA: Proporciona una barrera para mayores cantidades de penetración de fluidos a través de salpicaduras y más exposición de fluidos a través del remojo que el Nivel 2.</li><li>Se realizan dos pruebas para probar el rendimiento de la protección de barrera: <ol><li>Agua que impacta la superficie del material de la bata.</li><li>Presurizar el material</li></ol></li><li>Tarima 48'' 40''</li><li>Caja 70 batas por caja</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/AAMINivel3.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>120 cm / 47.2 inch</td><td>123cm / 48.4 inch</td><td>125 cm / 49.4 inch</td></tr><tr><td>Ancho Pecho</td><td>62.5 cm / 24.6 inch</td><td>65 cm / 22.5 inch</td><td>67.5cm / 26.5 inch</td></tr><tr><td>SKU Azul</td><td>GWS-PPPE-M</td><td>GWS-PPPE-L</td><td>GWS-PPPE-XL</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "8",
                descripcionCorta: "Bata de aislamiento quirúrgico Nivel 3 SMS",
                descripcionLarga: "<ul><li>SMS grado médico 45-50 GRAMOS Bata de tela no tejida, capas de polímero de polipropileno, con puños de tela.</li><li>Utilizado en situación de riesgo MODERADA: Proporciona una barrera para mayores cantidades de penetración de fluidos a través de salpicaduras y más exposición de fluidos a través del remojo que el Nivel 2.</li><li>Tarima 48'' 40''</li><li>Caja 70 batas por caja</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataQuirNivel3.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>120 cm / 47.2 inch</td><td>123cm / 48.4 inch</td><td>125 cm / 49.4 inch</td></tr><tr><td>Ancho Pecho</td><td>62.5 cm / 24.6 inch</td><td>65 cm / 22.5 inch</td><td>67.5cm / 26.5 inch</td></tr><tr><td>SKU</td><td>GWSMS-03-M-B</td><td>GWSMS-03-L-B</td><td>GWSMS-03-XL-B</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "9",
                descripcionCorta: "Bata de aislamiento quirúrgico Nivel 3",
                descripcionLarga: "<ul><li>Tejido base de la bata SFS - Vestido de manga larga confeccionado en tejido no tejido, polipropileno</li><li>Esterilizado</li><li>Con puños de algodón y 2 correas para atar</li><li>Refuerzo frontal interno</li><li>Manga sellada por ultrasonido</li><li>Protección contra partículas volátiles y polvo.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataAislamientoNivel3.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td><td class="cabecera">2XL</td><td class="cabecera">3XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>120 cm / 47.2 inch</td><td>123cm / 48.4 inch</td><td>125 cm / 49.4 inch</td><td>128 cm / 50.3 inch</td><td>130.5cm / 51.3 inch</td></tr><tr><td>Ancho Pecho</td><td>62.5 cm / 24.6 inch</td><td>65 cm / 22.5 inch</td><td>67.5cm / 26.5 inch</td><td>70 cm / 27.5 inch</td><td>72.5 cm / 28.5 inch</td></tr><tr><td>SKU</td><td>GWSMS-03-M-B</td><td>GWSMS-03-L-B</td><td>GWSMS-03-XL-B</td><td>GWL-04-XXL-B</td><td>GWL-04-XXXL-B</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "10",
                descripcionCorta: "510K Bata quirúrgica estéril Nivel 3 SMS",
                descripcionLarga: "<ul><li>AAMI PB70 Nivel 3 - Recomendado para: extracción de sangre arterial, inserción de una vía intravenosa, sala de emergencias, traumatología.</li><li>Utilizado en situación de riesgo MODERADA: Proporciona una barrera para mayores cantidades de penetración de fluidos a través de salpicaduras y más exposición de fluidos a través del remojo que el Nivel 2.</li><li>Se realizan dos pruebas para probar el rendimiento de la protección de barrera: <ol><li>Agua que impacta la superficie del material de la bata.</li><li>Presurizar el material</li></ol></li><li>Tarima: 48'' 40'' Caja: 100 batas por caja - Color Azul - Bata de manga larga hecha de tela no tejida Esterilizada Con puños de algodón y 2 correas para atar Costuras ultrasónicas Costuras reforzadas Repelente de líquidos AAMI PB70 Nivel 3 Cómodo y transpirable Protección contra partículas volátiles y polvo.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataQuirNivel3.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td><td class="cabecera">2XL</td><td class="cabecera">3XL</td><td class="cabecera">4XL</td><td class="cabecera">Tolerancia</td></tr></thead><tbody><tr><td>Hombro hacia abajo</td><td>110</td><td>115</td><td>126</td><td>134</td><td>135</td><td>140</td><td>145</td><td>±2</td></tr><tr><td>Ancho de Fondo</td><td>140</td><td>145</td><td>150</td><td>150</td><td>155</td><td>160</td><td>160</td><td>±2</td></tr><tr><td>Área reforzada al cuello</td><td>8</td><td>8</td><td>8</td><td>8</td><td>8</td><td>8</td><td>8</td><td>±2</td></tr><tr><td>Longitud reforzada para el área del pecho</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>±2</td></tr><tr><td>Ancho reforzado para la zona del pecho</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>50</td><td>±2</td></tr><tr><td>Largo reforzado para mangas</td><td>40</td><td>40</td><td>40</td><td>40</td><td>40</td><td>40</td><td>40</td><td>±2</td></tr><tr><td>SKU: Small: GWS-03-S-B Medium: GWS-03-M-B Large: GWS-03-L-B XL: GWS-03-XL-B XXL: GWS-03-XXL-B</td></tr></tbody></table>',
                categoria: "1"
            },
            {
                id: "11",
                descripcionCorta: "Bata SONTARA",
                descripcionLarga: "<ul><li>Bata de manga larga confeccionado en tela no tejida</li><li>Esterilizada</li><li>Con puños de algodón y 2 correas para atar</li><li>Refuerzo Frontal interno</li><li>Manga sellada por ultrasonido</li><li>Costuras reforzadas</li><li>Cómodo y transpirable</li><li>Protección contra partículas volátiles y polvo.</li><li>Manga Sellada</li><li>Costura Reforzada</li><li>Refuerzo interno de tejido laminado</li><li>Nota: No lo use en fuego directo, evite el contacto con químicos y solventes.</li><li>Tarima 48'' 40'': Caja: 100 Batas por caja</li",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataAislamientoNivel3.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "1"
            },
            {
                id: "12",
                descripcionCorta: "Overol 43Gr PP+PE",
                descripcionLarga: "<ul><li>43Gr PP+PE - Blanco</li><li>Overol 43Gr PP+PE</li><li>Protector para zapatos altos Cierre frontal elástico de 55 cm en abertura de capucha, puños y tobillo.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/overol43Gr.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td><td class="cabecera">2XL</td><td class="cabecera">3XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>162 cm / 63.7 inch</td><td>165 cm / 64.9 inch</td><td>168 cm / 66.1 inch</td><td>171 cm / 67.3 inch</td><td>182cm / 71.6inch</td><td>189 cm / 74.4 inch</td></tr><tr><td>Ancho Pecho</td><td>57 cm / 22.4 inch</td><td>61 cm / 24 inch</td><td>65 cm / 25.5 inch</td><td>69 / 27.1 inch</td><td>73 cm / 28.7 inch</td><td>76 cm / 29.9 inch</td></tr><tr><td>SKU</td><td>COVER-43GR-001</td><td>COVER-43GR-001</td><td>COVER-43GR-001</td><td>COVER-43GR-001</td><td>COVER-43GR-001</td><td>COVER-43GR-001</td></tr></tbody></table>',
                categoria: "2"
            },
            {
                id: "13",
                descripcionCorta: "Bata quirúrgica Nivel 3 SMS",
                descripcionLarga: "<ul><li>SMS grado médico 45-50 GRAMOS Bata de tela no tejida, capas de polímero de polipropileno, con puños de tela.</li><li>Utilizado en situación de riesgo moderada</li><li>Proporciona una barrera para mayores cantidades de penetración de fluidos a través de salpicaduras y más exposición de fluidos a través del remojo que el Nivel 2</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bataQuirNivel3.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>120 cm / 47.2 inch</td><td>123cm / 48.4 inch</td><td>125 cm / 49.4 inch</td></tr><tr><td>Ancho Pecho</td><td>62.5 cm / 24.6 inch</td><td>65 cm / 22.5 inch</td><td>67.5cm / 26.5 inch</td></tr><tr><td>SKU</td><td>GWSMS-03-M-B</td><td>GWSMS-03-L-B</td><td>GWSMS-03-XL-B</td></tr></tbody></table>',
                categoria: "2"
            },
            {
                id: "14",
                descripcionCorta: "SMMS 35 GRS",
                descripcionLarga: "<ul><li>Camisa y pantalón de tela no tejida</li> <li>Camisa con cuello en V y 2 bolsillos en el pecho en la parte delantera.</li> <li>Pantalón de cirujano con resorte en la cintura</li><li>Resistencia a líquidos</li><li>Sin pelusa</li><li>Conjunto hipoalergénico, cómodo y muy ligero</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/ropaDesechableQuirurgica.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td><td class="cabecera">2XL</td></tr></thead><tbody><tr><td>Largo Frontal</td><td>68 cm / 26.7 inch</td><td>69.5 cm / 27.3 inch</td><td>71 cm / 27.9 inch</td><td>72.5 cm / 28.5 inch</td><td>74 cm / 29.1 inch</td></tr><tr><td>Ancho Pecho</td><td>59.5 cm / 23.4 inch</td><td>62 cm / 24.4 inch</td><td>64.5 cm / 25.3 inch</td><td>67 cm / 26.3 inch</td><td>69.5 cm / 27.3 inch</td></tr><tr><td>Elástico Cintura</td><td>61 cm / 24 inch</td><td>65 cm / 25.5 inch</td><td>69 cm / 27.1 inch</td><td>73 cm / 28.7 inch</td><td>77 cm / 30.3 inch</td></tr><tr><td>Largo Lateral</td><td>115 cm / 45.2 inch</td><td>115.5 cm / 45.4 inch</td><td>116 cm / 45.6 inch</td><td>116.5 cm / 45.8 inch</td><td>117 cm / 46 inch</td></tr><tr><td>SKU</td><td>SCR-SMMS-S</td><td>SCR-SMMS-M</td><td>SCR-SMMS-L</td><td>SCR-SMMS-XL</td><td>SCR-SMMS-XXL</td></tr></tbody></table>',
                categoria: "3"
            },
            {
                id: "15",
                descripcionCorta: "Gorro Bouffant",
                descripcionLarga: "<ul><li>TELA NO TEJIDO SMS 100% POLIPROPILENO: 17 GR</li><li>Mediciones: Diametro: 50 cm aprox Largo de la tapa Parte superior: 43cm Ancho Parte superior: 31 cm</li><li>Observaciones: Ideal para no esparcir contaminantes del cabello.</li><li>Tarima: 1.2m x 1m</li><li>Caja: 20x20x20 pulgadas</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/gorroBouffant.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "4"
            },
            {
                id: "16",
                descripcionCorta: "Gorro quirúrgico de polipropileno",
                descripcionLarga: "<ul><li>TEJIDO LAMINADO 25 GRS</li><li>35 GR SMMS PEYON</li><li>SKU HEADC-35GR-001 Gorro médico desechable con lazo en la espalda fabricado con excelente calidad Ideal para no esparcir contaminantes del cabello.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/gorroProlipopileno.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "4"
            },
            {
                id: "17",
                descripcionCorta: "Gorro quirúrgico con cintillo",
                descripcionLarga: "<ul><li>35 GR SMMS PEYON</li><li>Plisado y hecho de tela no tejida.</li><li>Resistente al desgarre o la rotura.</li><li>Cumple la función de retener la caída del cabello.</li><li>No emite partículas.</li><li>Suave y ligero.</li><li>Protección contra partículas volátiles y polvo.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/gorroQuirurgicoCintillo.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "4"
            },
            {
                id: "18",
                descripcionCorta: "SHOE-35GR-001 20gr SMMS spunbond",
                descripcionLarga: "<ul><li>Hecho de tela no tejida</li><li>Cerrado con hilo de algodón</li><li>Elástico para un mejor ajuste al tobillo</li><li>Resistencia a líquidos a base de agua</li><li>Ligero</li><li>Detalles del Producto -</li><li>Usos</li><ul><li>Médico</li><li>Laboratorio</li><li>Industrial</li><li>General</li></ul><li>Dimensiones de la caja de 400 pares: 49x49x35 cm</li><li>Cajas por palet: 20</li><li>Pares por 1 palet: 8000</li><li>Pares por camión: 192000</li><li>Palet por camión: 24</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/shoe35GR.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "5"
            },
            {
                id: "19",
                descripcionCorta: "ANTI-SHOE-002 25gr Anti Skid",
                descripcionLarga: "<ul><li>Hecho de tela no tejida</li><li>Cerrado con hilo de algodón</li><li>Elástico para un mejor ajuste al tobillo</li><li>Resistencia a líquidos a base de agua</li><li>Ligero</li><li>Detalles del Producto -</li><li>Usos</li><ul><li>Médico</li><li>Laboratorio</li><li>Industrial</li><li>General</li></ul><li>Dimensiones de la caja de 400 pares: 49x49x35 cm</li><li>Cajas por palet: 20</li><li>Pares por 1 palet: 8000</li><li>Pares por camión: 192000</li><li>Palet por camión: 24</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/shoe35GR.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "5"
            },
            {
                id: "20",
                descripcionCorta: "BOOT-25GR-0 Boot Cover 25gr SMMS",
                descripcionLarga: "<ul><li>Hecho de tela no tejida</li><li>Cerrado con hilo de algodón</li><li>Elástico para un mejor ajuste al tobillo</li><li>Resistencia a líquidos a base de agua</li><li>Ligero</li><li>Detalles del Producto -</li><li>Usos</li><ul><li>Médico</li><li>Laboratorio</li><li>Industrial</li><li>General</li></ul><li>Dimensiones de la caja de 400 pares: 49x49x35 cm</li><li>Cajas por palet: 20</li><li>Pares por 1 palet: 8000</li><li>Pares por camión: 192000</li><li>Palet por camión: 24</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/boot25GR.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "5"
            },
            {
                id: "21",
                descripcionCorta: "ANTI-BOOT-002 Boot Cover Anti Skid 25gr",
                descripcionLarga: "<ul><li>Hecho de tela no tejida</li><li>Cerrado con hilo de algodón</li><li>Elástico para un mejor ajuste al tobillo</li><li>Resistencia a líquidos a base de agua</li><li>Ligero</li><li>Detalles del Producto -</li><li>Usos</li><ul><li>Médico</li><li>Laboratorio</li><li>Industrial</li><li>General</li></ul><li>Dimensiones de la caja de 400 pares: 49x49x35 cm</li><li>Cajas por palet: 20</li><li>Pares por 1 palet: 8000</li><li>Pares por camión: 192000</li><li>Palet por camión: 24</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/shoe35GR.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "5"
            },
            {
                id: "22",
                descripcionCorta: "Mascarilla KN-95",
                descripcionLarga: "<ul><li>Cubreboca KN95</li><li>Es un respirador de máscara con filtro de partículas que cumple con la clasificación N95 de filtrado de aire del Instituto Nacional de Seguridad y Salud Ocupacional de EE. UU. (NIOSH) - esto significa que filtra al menos el 95% de las partículas en el aire.</li><li>1 TARIMA: 600# - TARIMA: 44'' x 48''</li><li>1 TARIMA: 25 cajas</li><li>TOTAL: 2T = 50 Cajas</li><li>Master Box: 20 Cajas = 100k Máscaras</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/KN95.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "6"
            },
            {
                id: "23",
                descripcionCorta: "Caja Mascarilla KN-95 20 unidades",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/kn95Masc.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "6"
            },
            {
                id: "24",
                descripcionCorta: "Termometro Digital",
                descripcionLarga: "<ul><li>Mide la temperatura corporal de 32,0 a 42,5 °C sin contacto.</li><li>Respuesta rápida (0,5 segundos).</li><li>La memoria almacena hasta 32 lecturas para recordarlas fácilmente.</li><li>Precisión a 0,2 °C con resolución de 0,1 °C.</li><li>Completo con 2 pilas AAA.</li><li>Entorno de almacenamiento: -25 a 55 °C, humedad: ≤ 90%.</li><li>Rango de temperatura de trabajo: 16,0 a 35 °C, humedad: ≤ 90%.</li><li>Gran pantalla LCD retroiluminada.</li><li>La alarma ajustable alerta al usuario de forma visual y audible cuando la temperatura supera el límite programado.</li><li>Distancia de medición óptima de 1,9” a 5,9” (5 a 15 cm).</li><li>Elimina la necesidad de suministros de reemplazo, reduce la posible propagación de enfermedades por el uso de dispositivos de contacto.</li><li>Tarima: 1.2m x 1m.</li><li>Caja: 20x20x20 pulgadas.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/termometroDigital.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "7"
            },
            {
                id: "25",
                descripcionCorta: "Guantes de látex",
                descripcionLarga: "<ul><li>Los guantes de látex son los más flexibles y resistentes con un ajuste uniforme.</li><li>Son una gran barrera de protección contra infecciones y contaminación.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/latex.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "26",
                descripcionCorta: "Guantes de Vinilo",
                descripcionLarga: "<ul><li>Fabricado con un material sintético compuesto por cloruro de polivinilo y plastificantes que ablanda el material. Estos guantes son libres de alergias y son una alternativa al uso de guantes de látex si tiene alergia al látex. Los guantes de vinilo son buenos guantes multiusos para uso general y actividades que no requieren el mayor grado de precisión táctil.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/vinilo.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "27",
                descripcionCorta: "Guantes de Nitrilo",
                descripcionLarga: "<ul><li>Los guantes de nitrilo brindan una protección superior contra solventes químicos y aceites, así como tres veces más resistencia a la perforación en comparación con los guantes de vinilo o látex. Estos guantes desechables tampoco tienen talco, por lo que no ensucian.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/nitrilo%7D.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "28",
                descripcionCorta: "Guantes de Nitrilo Negros Caja",
                descripcionLarga: "<ul><li>Caja de 100 unidades</li><li>Tallas S y M</li><li>Marca Clarex</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/nitriloNegros.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "29",
                descripcionCorta: "Guantes de Latex Bajo Polvo",
                descripcionLarga: "<ul><li>Caja de 100 unidades</li><li>Tallas XS, S, M, L y XL</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/latexBajoPolvo.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "30",
                descripcionCorta: "Guante Nitrilo",
                descripcionLarga: "<ul><li>Flockado Rubberex</li><li>Protección de Manos y Brazos</li><li>No. 9 (15 milésimas)</li><li>Paquete de 2 Unidades</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/nitrilo2.png/:/rs=w:1440,h:1440",
                tabla: '<table class="text-center"><thead><tr><td class="cabecera">Tallas</td><td class="cabecera">XS</td><td class="cabecera">S</td><td class="cabecera">M</td><td class="cabecera">L</td><td class="cabecera">XL</td></tr></thead><tbody><tr><td></td><td>XS (6.7cm)</td><td>S (7-8cm)</td><td>M (8-9cm)</td><td>L (9-10cm)</td><td>XL (10-11cm)</td></tr></tbody></table>',
                categoria: "8"
            },
            {
                id: "31",
                descripcionCorta: "Delantales Vinil",
                descripcionLarga: "<ul><li>Color Blanco y Azul</li><li>Unitalla</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/delantalVinil.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "9"
            },
            {
                id: "32",
                descripcionCorta: "Esfigmomamometro",
                descripcionLarga: "<ul><li>Marca Contec</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/digital.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "10"
            },
            {
                id: "33",
                descripcionCorta: "Oxímetros Contec",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/oximetros.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "10"
            },
            {
                id: "34",
                descripcionCorta: "Papel de Camilla",
                descripcionLarga: "<ul><li>Marca Medfell</li><li>1 Capa</li><li>53 cm de Ancho x 38 metros de Largo</li><li>12 rollos por Caja</li><li>Papel Crepe</li><li>Papel Blanco</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/papelCamilla.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "35",
                descripcionCorta: "Galón Alcohol Líquido 80%",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/galonAlcoholLiquido.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "36",
                descripcionCorta: "Galón Alcohol en Gel",
                descripcionLarga: "<ul><li>Alcohol al 70%</li><li>Marca Edulipa</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/galonAlcoholGel.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "37",
                descripcionCorta: "Jabon para Manos Galón",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/jabonGalon.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "38",
                descripcionCorta: "Desengrasante Galón",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/desengrasante.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "39",
                descripcionCorta: "Desinfectante",
                descripcionLarga: "<ul><li>Por galón</li><li>Olores: <ul><li>Limón</li><li>Lavanda</li><li>Herbal</li><li>Floral</li><li>Bebé</li></ul></li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/desinfectante.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "40",
                descripcionCorta: "Cera para Pisos",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/cera.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "41",
                descripcionCorta: "Jabón Líquido para Ropa por Galón",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/jabonRopa.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "42",
                descripcionCorta: "Limpiador para Cristales",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/limpiadorCristales.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "43",
                descripcionCorta: "Controlador Malos Olores",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/malosOlores.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "44",
                descripcionCorta: "Cloro",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/cloro.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "45",
                descripcionCorta: "Bio Shampoo para Vehículos",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bioshampoo.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "46",
                descripcionCorta: "Detergente en Polvo Por Kilo",
                descripcionLarga: undefined,
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/detergentePolvo.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "47",
                descripcionCorta: "Balde Escurridor",
                descripcionLarga: "<ul><li>WAVEBRAKE RUBBERMAID (Dura 58 veces más que los comparables)</li><li>PROBADO QUE EXCEDA LOS 50 MIL CICLOS DE EXPRIMIDO (Los promedio realizan aprox. 860 ciclos)</li><li>Ruedas silenciosas y no se oxidan</li><li>Exprimidor de alta eficiencia</li><li>Fabricado con Acerp Tabular de óptima calidad y plástico moldeado de red estructural</li><li>Se recomienda llenar solo 2/3 de agua para que no se desborde el agua cuando se coloca la mopa</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/balde.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "48",
                descripcionCorta: "ESCOBA TODO - JUMBO-FANTASY",
                descripcionLarga: "<ul><li><p>Base</p><ul><li>MATERIAL: POLIPROPILENO Y POLI ETILENO</li><li>COLOR: VARIOS</li><li>ANCHO: 50 MM</li><li>LARGO: 245 MM</li><li>GRUESO: 14 MM</li></ul></li><li><p>Fibra</p><ul><li>NATERIAL: PET (Polietileno Tereftalato)</li><li>DIÁMETRO: 0.50 MM</li><li>COLOR: VARIOS</li><li>ANCHO: 70MM</li><li>LARGO: 340MM</li><li>ALTURA: 100MM</li></ul></li><li><p>Palo de Madera</p><ul><li>Color: Azul, Barniz, Natural (Sin Pintar)</li><li>LARGO: 122CM</li><li>DIÁMETRO: 2.20CM</li></ul></li><li><p>Recomendación de uso</p><ul><li>Exteriores e Interiores</li></ul></li><li>Marca Eterna</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/escoba.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "49",
                descripcionCorta: "Bolsas de Basura",
                descripcionLarga: "<ul><li>Pequeña: Pqts 9 unds. 42.50 Ancho por 48 cmtrs alto</li><li>Mediana: Pqts 9 unds. 52 ancho 58 alto cmtrs</li><li>Grande: Pqts 9 unds. 61 ancho 71 alto cmtr</li><li>Jardin: Pqts 5 unds. 85 ancho 120 alto cmtrs</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/bolsasBasura.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "50",
                descripcionCorta: "Toallas para manos",
                descripcionLarga: "<ul><li>Marca Sanitisu</li><li>Caja con 6 rollos</li><li>240 Metros</li><li>Precio por caja</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/toallaManos.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "51",
                descripcionCorta: "Papel higiénico mil hojas",
                descripcionLarga: "<ul><li>Marca Nuble Blanca</li><li>Bulto con 12 pqts de 4 rollos</li><li>Total 48 rollos</li><li>Precio por bulto</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/papelHigienicoMilHojas.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "52",
                descripcionCorta: "Toallas Mayordomo",
                descripcionLarga: "<ul><li>El bulto viene con 24 Rollos</li><li>Marca Nube Blanca</li><li>60 hojas dobles</li><li>Precio por Bulto</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/toallaMayordomo.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "53",
                descripcionCorta: "Servilletas Pop Up",
                descripcionLarga: "<ul><li>Caja de 18 paquetes</li><li>125 Unidades</li><li>Para restaurantes, comedores, etc.</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/servPopup.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "54",
                descripcionCorta: "Toallas Interfoliadas",
                descripcionLarga: "<ul><li>Marca Sanitisu</li><li>Caja con 12 paqts de 200 unidades</li><li>Precio por caja</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/toallasInterfoliadas.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            },
            {
                id: "55",
                descripcionCorta: "Pañales desechables para adultos",
                descripcionLarga: "<ul><li>Talla L</li><li>Pqts 25 unidades</li></ul>",
                urlImagen: "https://img1.wsimg.com/isteam/ip/7c209d9e-b3f5-4165-a57a-3f0978c4a471/pa%C3%B1ales.png/:/rs=w:1440,h:1440",
                tabla: undefined,
                categoria: "11"
            }
        ];
        let row = document.getElementById('rowProductos');
        const CategoriasActivasValidas = () => {
            if (categoriasActivas.length > 0)
            {
                let contador = 0;
                for (let  i = 0; i < categoriasActivas.length; i++)
                {
                    if (categoriasActivas[i] == undefined)
                        contador++
                }
            }
        }
        const RenderizarCardsProductos = (producto) => {
            if (producto.descripcionLarga !== undefined)
            {
                row.innerHTML += `<div class="col-12 col-md-6 p-1">
                        <div class="card">
                            <img src="${producto.urlImagen}" class="card-img-top pt-1" style="height: 15em">
                            <div class="card-body">
                                <h5 class="card-title">${producto.descripcionCorta}</h5>
                                <p class="card-text">${categorias[producto.categoria]}</p>
                                <button type="button" class="btn" style="background-color: #11BAB8;" data-bs-toggle="modal" data-bs-target="#modalProductos" onclick="ModificarModal(${producto.id-1});">
                                    <span style="color: #FEFEFE;">Ver más...</span>
                                </button>
                            </div>
                        </div>
                    </div>`;
            }
            else
                row.innerHTML += `<div class="col-12 col-md-6 p-1">
                            <div class="card">
                                <img src="${producto.urlImagen}" class="card-img-top pt-1" style="height: 15em">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.descripcionCorta}</h5>
                                    <p class="card-text">${categorias[producto.categoria]}</p>
                                    <div style="height:100%;"></div>
                                </div>
                            </div>
                        </div>`;
            }
        const RenderizarProductos = () => {
            row.innerHTML = ``;
            if (categoriasActivas.length == 0)
            {
                let cbox = document.getElementsByClassName('cbox')
                for (let i = 0; i < cbox.length; i++)
                {
                    cbox[i].checked = false;
                }
                for (let i = 0; i < jsonListaCompletaProductos.length; i++)
                {
                    RenderizarCardsProductos(jsonListaCompletaProductos[i]);
                }
            }
            else
            {
                for (let i = 0; i < jsonListaCompletaProductos.length; i++)
                {
                    for (let j = 0; j < categoriasActivas.length; j++)
                    {
                        if (categoriasActivas[j] == jsonListaCompletaProductos[i].categoria)
                        {
                            RenderizarCardsProductos(jsonListaCompletaProductos[i]);
                        }
                    }
                }
            }
        }
        const AgregarCategoria = (num) => {
            let bandera = true;
            let labelCat = document.getElementById('lbl'+num);
            let contador = 0;
            for (let i = 0; i < categoriasActivas.length; i++)
            {
                if (categoriasActivas[i] == num)
                {
                    categoriasActivas.splice(i, 1);
                    bandera = false;
                    labelCat.style.color = "#000000"
                    break;
                }
            }
            if (bandera)
            {
                labelCat.style.color = "#11BAB8"
                categoriasActivas.push(num)
            }  
            RenderizarProductos();
        }
        const BusquedaProductos = () => {
            row.innerHTML = '';
            let texto = document.getElementById('txtBusqueda').value.toLowerCase();
            if (texto == '')
            {
                RenderizarProductos();
            }
            else
            {
                for (let i = 0; i < jsonListaCompletaProductos.length; i++)
                {
                    let descripcion = jsonListaCompletaProductos[i].descripcionCorta.toLowerCase();
                    if (descripcion.startsWith(texto))
                    {
                        if (categoriasActivas.length == 0)
                            RenderizarCardsProductos(jsonListaCompletaProductos[i]);
                        else if (categoriasActivas[i] == jsonListaCompletaProductos[i].categoria)
                            RenderizarCardsProductos(jsonListaCompletaProductos[i]);
                    }
                }
            }
        }
        const ModificarModal = (indice) => {

            let producto = jsonListaCompletaProductos[indice];
            document.getElementById('descripcionProducto').innerHTML = producto.descripcionCorta;
            document.getElementById('imagenProd').src = producto.urlImagen;
            document.getElementById('descripcionLargaModal').innerHTML = producto.descripcionLarga;
            if (producto.tabla != undefined)
            {
                document.getElementById('tabla').innerHTML = '';
                document.getElementById('tabla').innerHTML = producto.tabla;
            }
            else
                document.getElementById('tabla').innerHTML = '';
        }
        RenderizarProductos();