const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button') 
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Hola CTO Luis, lamento informarte que te encuentras encerrado en una casa antigua, y los únicos que te pueden ayudar son los espíritus que allí reposan, como yo. Mi nombre es Aragonia, solia ser la niña que vivia aquí antes de el gran cataclismo y ahora me dedico a tratar de evitar llenar la casa de espiritus, en pocas palabras evitar que se muera otro. \n Selecciona una de las dos opciones para proceder',
    options: [
      {
        text: 'OK ayúdame',
        nextText: 2
      },
      {
        text: 'Mátame mejor',
        nextText: 12
      }
    ]
  },
  {
    id: 2,
    text: 'Primera recomendación, ve a hablar con el montro de la cocina',
    options: [
      {
        text: 'Ir a la cocina',
        nextText: 3
      },
      {
        text: 'Ir a la habitación',
        nextText: 11
      },
      {
        text: 'Si hay que hablar con gente, matame mejor',
        nextText: 12
      }
    ]
  },
  {
    id: 3,
    text: 'Hola soy el montro de la cocina, super dominicano ontobul, con la pámpara prendía, y trucho to lo día, ya yo me sé la cotorra de Aragonia, así que para ayudarte debes responder correctamente el siguiente acertijo \n Ajem! ¿Cómo se llama la canción que dice -Date duro hata que la nari se te desabotone-?',
    options: [
      {
        text: 'Pana Juda',
        nextText: 13
      },
      {
        text: 'Palomo en lata',
        nextText: 4
      },
      {
        text: 'Delincuente en mi party',
        nextText: 13
      }
    ]
  },
  {
    id: 4,
    text: 'Wow, pocas personas pasan el test del montro, debes ser un ser humano exepcional, pero no te dijo ninguna pista de como salir, eso fue raro, mira a ver si el fantasma del balcon te puede ayudar mejor',
    options: [
      {
        text: 'Ir al balcon',
        nextText: 5
      },
      {
        text: 'Ir a la habitación mejor',
        nextText: 11
      },
      {
        text: 'Tu no sirves de nada Argonia, matame mejor',
        nextText: 12
      }
    ]
  },
  {
    id: 5,
    text: 'Hola soy Madame La Marche, conocida por mis incansables hazañas en la guerra de la revolución francesa en 1789, solo ayudare a aquellos que sean suficientemente cultos así que responde lo siguiente chiquillo: A qué casa real perteneció tu tocayo Luis XVI',
    options: [
      {
        text: 'Borbon',
        nextText: 6
      },
      {
        text: 'Ardenas',
        nextText: 13
      },
      {
        text: 'Valois',
        nextText: 13
      }
    ]
  },
  {
    id: 6,
    text: 'Interesante, pareces ser conocedor de los conocimientos importantes, he decidido ayudarte. Primer consejo: No confies en los espiritus de las habitaciones, y segundo, Aragonia llévalo al sótano, para que pueda salir de su suplicio',
    options: [
      {
        text: 'Seguir a Aragonia al sótano',
        nextText: 7
      },
      {
        text: 'Ir a la habitación de al lado',
        nextText: 1
      },
      {
        text: 'Cuanto fucking viajes son que hay que dar, voy a quemar la casa mejor',
        nextText: 12
      }
    ]
  },
  {
    id: 7,
    text: '"Haz llegado al sótano y se voltea una niña que estaba sentada en un banquito, acto seguido se cierra la puerta detras de ti" Hola CTO Luis! No te asustes, soy Aragonia, realmente nunca morí, oias mi voz porque tengo un sistema de sonido bien conectado en está casa, y los espiritus que viste no eran más que hologramas.\n Pero si algo es cierto, es quue estas atrapado aquí conmigo, y yo tengo un problema con personas que pretenden cambiar al mundo',
    options: [
      {
        text: 'Siguiente',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'Mis padres son parte de una pequeña conspiración para poder gobernar sobre el mundo entero, pero para lograr su cometido necesitan una ayuda que yo puedo proveer, y por eso me he dado la tarea de...',
    options: [
      {
        text: 'Siguiente',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'Acabar con toda la gente inteligente del mundo, como tu. No es nada personal pero se acerca San Valentin y no podría ofrecerles yo mejor regalo que acabar contigo',
    options: [
      {
        text: 'Siguiente',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'You dead boi',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'No te recomiendo entrar a las habitaciones, los peores espíritus se alojan ahí, siempre llevan a las almas a su perdición porque buscan compañía, y no puedo acompañarte ahí dentro',
    options: [
      {
        text: 'Continuar a la habitación',
        nextText: 14
      },
      {
        text: 'Continuar a la cocina',
        nextText: 3
      }
    ]
  },
  {
    id: 12,
    text: 'A po ta bien, no haga na, bendito vago',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'Tu no sabe na, muerto',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'Hola querido mio, veo que haz violado el protocolo impuesto por Aragonia, permiteme presentarme, me llamo Ether. Te lo digo desde ahora, no puedes confiar en esa pequeña demonia, y no lo digo porque odio a los niños, esa tiene un lugar especial en el infierno.',
    options: [
      {
        text: 'Siguiente',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'Si en realidad mereces que salve y perdone tu alma debo comprobar tu valor. Responde lo siguiente por favor: ¿Cómo Pocket beneficia a los nodos participantes?',
    options: [
      {
        text: 'Acciones de la compañia proporcionales a su desempeño',
        nextText: 13
      },
      {
        text: 'Dinero en efectivo',
        nextText: 13
      },
      {
        text: 'tokens criptográficos nativos POKT',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Muy fácil ¿no crees? Pues estamos solo comenzando, responde esta otra: ¿En palabras de Michael ORourke qué pasara en el futuro gracias a POCKET? ',
    options: [
      {
        text: 'Habran miles de protocolos cerrados governando nuestras vidas',
        nextText: 13
      },
      {
        text: 'Tendremos servidores en casa accediendo a la colección de librerias que te permitan interactuar con un nodo remoto o local de Ethereum como si fuera un router de wifi',
        nextText: 17
      },
      {
        text: 'Se empoderaran los developers por poder conectar sus aplicaciones con la antigua generación de la web',
        nextText: 13
      }
    ]
  },
  {
    id: 17,
    text: 'Entonces sí parece que estarás atento, te ayudaré, ve al baño, Aragonia sí puede entrar al baño así que Ramiro, el fantasma del baño, tratara de ayudarte de forma encriptada, buena suerte',
    options: [
      {
        text: 'Salir de la habitación',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: 'Uff saliste vivo, tuviste suerte, ahora vamos a la cocina como teníamos planeado',
    options: [
      {
        text: 'Ir a la cocina',
        nextText: 19
      },
      {
        text: 'Ir al baño',
        nextText: 20
      }
    ]
  },
  {
    id: 19,
    text: 'Hola soy el montro de la cocina, suerte que ignoraste la loca de la habitación, siempre confunde a lo greti, super dominicano ontobul, con la pámpara prendía, y trucho to lo día, ya yo me sé la cotorra de Aragonia, así que para ayudarte debes responder correctamente el siguiente acertijo \n Ajem! ¿Cómo se llama la canción que dice -Date duro hata que la nari se te desabotone-?',
    options: [
      {
        text: 'Pana Juda',
        nextText: 13
      },
      {
        text: 'Palomo en lata',
        nextText: 4
      },
      {
        text: 'Delincuente en mi party',
        nextText: 13
      }
    ]
  },
  {
    id: 20,
    text: 'Hola Luis mi nombre es Ramiro y tengo una obsesión con el valor de un char, a veces sumaba los valores de las palabra y me inventaba fechas de cumpleaños, ¿te imagina que pudiéramos comunicarnos sin realmente pronunciar las palabras?. En fin sé cómo funcionan los demás fantasmas y no quiero desafinar así que te hare una pregunta: ¿Cuándo es el cumpleaños de Julissa?',
    options: [
      {
        text: '15 de Julio',
        nextText: 13
      },
      {
        text: '22 de Junio',
        nextText: 13
      }
      ,
      {
        text: '18 de Julio',
        nextText: 21
      }
    ]
  },
  {
    id: 21,
    text: 'Excelentemente bien!! Oye déjame darte unas palabras a lo loco: ehx, en fin esa fue mi palabra, para salir de aquí solo debes encontrar la combinación de números que abre la puerta. En la oficina me parece que hay alguien que sabe los últimos 3 dígitos. ',
    options: [
      {
        text: 'Ir al balcon ',
        nextText: 5
      },
      {
        text: 'Ir a la oficina',
        nextText: 22
      },
      {
        text: 'Ir a la cocina',
        nextText: 3
      }
    ]
  },
  {
    id: 22,
    text: 'Oye CTO Luis no creo que seguir los consejos de Ramiro sea buena idea, habla muy extraño',
    options: [
      {
        text: 'Pero matame ya y deja de opinar tanto',
        nextText: 12
      },
      {
        text: 'Tienes razon Argonia, vamos al balcon mejor, no puedo confiar en alguien que hable tan raro',
        nextText: 5
      },
      {
        text: 'Ir a la oficina como quiera',
        nextText: 23
      }
    ]
  },
  {
    id: 23,
    text: 'Bienvenido a la oficina mi querido CTO, me llamo Pabel. Si llegaste aquí es porque Ramiro te mando, es el único fantasma que sabe que estoy aquí y si te mando ya sé lo que quiere que te dé, pero tengo mucho sin saber de Ramiro así que tengo que probar tu valor.',
    options: [
      {
        text: 'Siguiente',
        nextText: 24
      }
    ]
  },
  {
    id: 24,
    text: 'Así que respóndeme la siguiente pregunta por favor: ¿Dónde comenzó todo?',
    options: [
      {
        text: 'En una noche de invierno',
        nextText: 13
      },
      {
        text: 'En una noche de primavera',
        nextText: 13
      },
      {
        text: 'En una noche de verano',
        nextText: 25
      },
      {
        text: 'En un día de otoño',
        nextText: 13
      }
    ]
  },
  {
    id: 25,
    text: 'Interesante, debes saber que tanto yo como Ramiro estamos admirados por las transformaciones de valor, te diré algo y presta atención: zfi, eso será suficiente, ve a la puerta principal y coloca el código que te hemos dado.',
    options: [
      {
        text: 'Ir a la puerta',
        nextText: 26
      },
      {
        text: 'Ir al balcon porque estos 2 fantasmas solo me hicieron perder el tiempo',
        nextText: 5
      }
    ]
  },
  {
    id: 26,
    text: 'Luis yo no entendí por qué has venido a la puerta si el código es numérico y los fantasmas no te han dado números vamos al balcón mejor, he visto esos fantasmas mandar a las almas de aquí a su perdición. Hazme caso ',
    options: [
      {
        text: 'Yo me sé el codigo y lo pondré ahora',
        nextText: 27
      },
      {
        text: 'Tienes razón, vamos al balcon',
        nextText: 5
      }
    ]
  },
  {
    id: 27,
    text: 'Ingrese el código',
    options: [
      {
        text: '104-102-105-120-122-102',
        nextText: 10
      },
      {
        text: '101-122-120-104-102-105',
        nextText: 10
      },
      {
        text: '101-104-120-122-102-105',
        nextText: 28
      }
    ]
  },
  {
    id: 28,
    text: 'FELICIDADESSSSSSS LOGRASTE ESCAPAR DE ESA TERRIBLE TRAMPA MORTAL, ERES EL MEJOR DE TODOS LOS TIEMPOS \n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()
