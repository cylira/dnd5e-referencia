data_condition = [
    {
        title: "Cegado (Blinded)",
        icon: "one-eyed",
        subtitle: "No puedes ver",
        description: "No puedes ver",
        reference: "PHB, pg. 290.",
        bullets: [
            "Una criatura cegada no puede ver y falla automáticamente todas las pruebas de característica que requieran vista.",
			"Las tiradas de ataque contra la criatura tienen ventaja y las tiradas de ataque hechas por la criatura tienen desventaja."
        ]
    },
    {
        title: "Hechizado (Charmed)",
        icon: "smitten",
        subtitle: "Estás hechizado",
        description: "Estás hechizado por otra criatura",
        reference: "PHB, pg. 290.",
        bullets: [
            "Una criatura hechizada no puede atacar ni elegir como objetivo de efectos dañinos o mágicos a quien la hechizó.",
			"Quien hechizó a la criatura tiene ventaja en las pruebas de característica para interactuar socialmente con ella."
        ]
    },
    {
        title: "Ensordecido (Deafened)",
        icon: "elf-ear",
        subtitle: "No puedes oír",
        description: "No puedes oír",
        reference: "PHB, pg. 290.",
        bullets: [
            "Una criatura ensordecida no puede oír y falla automáticamente todas las pruebas de característica que requieran el oído."
        ]
    },
    {
        title: "Cansancio (Exhaustion)",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "El cansansio se mide en seis niveles",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Consecuencia</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de golpe máximos reducidos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "En cada nivel de cansancio sufres tanto la consecuencia del mismo como todas las de los niveles inferiores.",
            "Finalizar un descanso largo reduce el nivel de cansancio en 1, siempre y cuando hayas comido y bebido algo durante el mismo.",
            "También, ser resucitado de entre los muertos reduce el nivel de cansancio por 1."
        ]
    },
    {
        title: "Asustado (Frightened)",
        icon: "sharp-smile",
        subtitle: "Estás asustado",
        description: "Estás asustado",
        reference: "PHB, pg. 290.",
        bullets: [
            "Una criatura asustada tiene desventaja en las pruebas de característica y tiradas de ataque mientras pueda ver a la fuente de su miedo.",
            "La criatura no puede acercarse a la fuente de su miedo voluntariamente."
        ]
    },
    {
        title: "Agarrado (Grappled)",
        icon: "grab",
        subtitle: "Te han agarrado",
        description: "Estás agarrado",
        reference: "PHB, pg. 290.",
        bullets: [
            "La velocidad de una criatura agarrada es 0 y no puede aumentar por encima de ese valor.",
            "Este estado termina si quien agarra queda incapacitado (consulta Incapacitado).",
            "Este estado también termina si algún efecto aleja a la criatura de quien (o lo que) la tiene agarrada, como cuando el conjuro ola atronadora hace salir despedida a una criatura."
        ]
    },
    {
        title: "Incapacitado (Incapacited)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "No te pueden ver",
        description: "No pueden verte sin la ayuda de magia o sentidos especiales.",
        reference: "PHB, pg. 291.",
        bullets: [
            "Es imposible ver a una criatura invisible sin la ayuda de magia o sentidos especiales.",
			"En lo que a esconderse respecta, se considera que la criatura se encuentra en una zona muy oscura, aunque se puede determinar su ubicación si esta hace algún ruido o deja huellas.",
            "Las tiradas de ataque contra la criatura tienen desventaja y las tiradas de ataque hechas por la criatura tienen ventaja."
        ]
    },
    {
        title: "Paralizado (Paralyzed)",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
    {
        title: "Petrificado (Petrified)",
        icon: "stone-pile",
        subtitle: "Te has transfomado en piedra",
        description: "Te transformas, junto con todos los objetos no mágicos que llevas encima o tengas puestos, en una sustancia sólida e inanimada (normalmente piedra).",
        reference: "PHB, pg. 291.",
        bullets: [
            "Tu peso se multiplica por diez y dejas de envejecer.",
            "Estás incapacitado, no puedes moverse ni hablar y no eres consciente de tu entorno.",
            "Attack rolls against you have advantage.",
            "Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Tienes resistencia contra todo el daño.",
            "Eres inmune al veneno y la enfermedad. Sin embargo, cualquier enfermedad o veneno que ya estuviera presente en tu cuerpo queda suspendido, pero no neutralizado."
        ]
    },
    {
        title: "Envenenado (Poisoned)",
        icon: "deathcab",
        subtitle: "Estás envenenado",
        description: "Estás envenenado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tienes desventaja en las tiradas de ataque y pruebas de característica."
        ]
    },
    {
        title: "Derribado (Prone)",
        icon: "crawl",
        subtitle: "Estás derribado",
        description: "Estás derribado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tu única opción de movimineto es arrastarte, a menos que te levantes.",
            "Tienes desventaja en las tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja si el atacante está a 5 pies de ti, de lo contrario el ataque tiene desventaja."
        ]
    },
    {
        title: "Apresado (Restrained)",
        icon: "imprisoned",
        subtitle: "Estás apresado",
        description: "Estás apresado",
        reference: "PHB, pg. 292.",
        bullets: [
            "La velocidad de una criatura apresada es 0 y no puede aumentar por encima de este valor.",
            "Las tiradas de ataque contra la criatura tienen ventaja y las tiradas de ataque hechas por la criatura tienen desventaja.",
            "La criatura tiene desventaja en las tiradas de salvación de Destreza."
        ]
    },
    {
        title: "Aturdido (Stunned)",
        icon: "internal-injury",
        subtitle: "Estás aturdido",
        description: "Estás aturdido",
        reference: "PHB, pg. 292.",
        bullets: [
            "Una criatura aturdida está incapacitada (consulta Incapacitado), no puede moverse y sólo es capaz de hablar con voz entrecortada.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "las tiradas de ataque contra la criatura tienen ventaja."
        ]
    },
    {
        title: "Inconsciente (Unconscious)",
        icon: "coma",
        subtitle: "Estás inconsciente",
        description: "Estás inconsciente",
        reference: "PHB, pg. 292.",
        bullets: [
            "Un criatura inconsciente está incapacitada (consulta Incapacitado), no puede moverse o hablar y no es consciente de su entorno.",
            "La criatura deja caer cualquier cosa que esté sujetando y cae derribada.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella",
        ]
    },
    {
        title: "Muriendo (Dying)",
        icon: "dead-head",
        subtitle: "Estás muriendo",
        description: "Has alcanzado los 0 puntos de golpe y estás muriendo",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si el daño que no te mata te reduce a 0 puntos de golpe, caes inconsciente y comienzas a morir.",
			"Si recibes sanación, inmediatamente recuperas la consciencia y dejas de morir.",
			"Cuando estás muriendo, al inicio de cada uno de tus turnos realizas una tirada de salvación contra muerte. Tira un d20 sin sumar ningún modificador.",
			"Si sacas 10 o más es un éxito, 9 o menos es un fallo.",
			"En tu tercer éxito te estabilizas.",
			"En tu tercer fallo mueres.",
			"Sacar 1 en la tirada cuenta como 2 fallos.",
			"Sacar 20 en la tirada inmediatamente te recupera 1 punto de golpe.",
			"Pueden estabilizarte utilizando la acción de Estabilizar y superando una prueba de Sabiduría (Medicina) CD 10.",
			"Una vez estable recuperas 1 punto de golpe después de 1d4 horas."
        ]
    }
]
