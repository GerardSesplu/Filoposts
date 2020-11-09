import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  texts:any[] = [
    {
      title: 'Estado de naturaleza',
      author: 'John Locke',
      text: 'El término estado de naturaleza o "la condición natural del hombre" fue establecida por Thomas Hobbes, en su obra Leviatán (Hobbes) y su trabajo anterior De Cive.3​ Hobbes argumentaba que todos los humanos son por naturaleza iguales en facultades físicas y psicológicas. Desde esta igualdad y otras causas en la naturaleza humana, todo el mundo está, naturalmente dispuesto a pelear entre sí, de modo que "Con todo ello es manifiesto que durante el tiempo en que los hombres viven sin un poder común que los atemorice a todos, se hallan en la condición o estado que se denomina guerra; una guerra tal que es la de todos contra todos". En este estado cada persona tiene derecho natural o libertad para hacer cualquier cosa necesaria para preservar la vida de cada uno; y la vida es "solitaria, pobre, asquerosa, bruta, y corta" (Leviatán, Capítulos XIII–XIV). Hobbes describió este estado de naturaleza con la frase en latín bellum omnium contra omnes (que significa: guerra de todos contra todos), en su obra De Cive.',
      tag: 'Sociedad'
    },
    {
      title: 'La Republica',
      author: 'Platón',
      text: 'Vosotros, ciudadanos del Estado, sois todos hermanos. Pero la divinidad, cuando os moldeó, puso oro en la mezcla con la que se generaron aquellos capacitados para gobernar, siendo de tal forma del más alto valor; plata en los auxiliares; hierro y bronce en los campesinos y demás artesanos». Y si alguien, a pesar de todo, desafiara el orden establecido los jueces lo condenarán a muerte. No habrá mi querido Glaucón, disminución de los males que desolan los Estados, ni siquiera de los que afectan al género humano, a menos que los filósofos sean reyes de los Estados, o que los que ahora se dicen reyes y soberanos pasen a ser verdaderos y serios filósofos, y se vean reunidas en los mismos hombres la potencia política y la filosofía, junto con una ley rigurosa que aparte de los asuntos públicos a la gran cantidad de hombres cuyo talento les lleva a dedicarse a una o a otra cosa exclusivamente; antes de todo esto la constitución que idealmente acabamos de trazar, en la medida que sea realizable, no nacerá, ni verá la luz del día.  La República —en griego:  (Politeia), que proviene de  (pólis, denominación dada a las ciudades estados griegas)— es la más conocida e influyente obra de Platón, y es el compendio de las ideas que conforman su filosofía. Se trata de un diálogo entre Sócrates y otros personajes, como los discípulos o parientes del propio Sócrates. La obra está compuesta por diez libros, separados sin correspondencia con los cambios en los temas de discusión que se presenta.  ',
      tag: 'Política'
    },
    {
      title: 'El contrato social',
      author: 'Rosseau',
      text:'Puesto que ningún hombre tiene por naturaleza autoridad sobre su semejante, y puesto que la fuerza no constituye derecho alguno quedan sólo las convenciones como base de toda autoridad legítima sobre los hombres. Si un individuo -dice Grotio- puede enajenar su libertad y hacers esclavo de otro, ¿por qué un pueblo entero no puede enajenar la suya y convertirse en un esclavo de un rey? Hay en esta frase algunas pala- Renunciar a su libertad es renunciar a su condición de hombre, a los derechos de la humanidad y aun a sus deberes. No hay resarcimiento alguno posible para quien renuncia a todo. Semejante renuncia es incompatible, con la naturaleza del hombre: despojarse de la libertad es despojarse de moralidad. En fin, es una convención fútil y contradictoria estipular de una parte una autoridad absoluta y de la otra una obediencia sin límites. ¿No es claro que a nada se está obligado con aquel a quien hay el derecho de exigirle todo? ¿Y esta sola condición, sin equivalente, sin reciprocidad, no lleva consigo la nulidad del acto? ¿Qué derecho podrá tener mi esclavo contra mí, ya que todo lo que posee me pertenece y puesto que siendo su derecho el mío, tal derecho contra mí mismo sería una palabra sin sentido alguno? Grotio y otros como él, deducen de la guerra otro origen del pretendido derecho de la esclavitud.  ',
      tag: 'sociedad'
    },
    {
      title: 'Sobre la libertad',
      author: 'John Stuart Mill',
      text: 'Los príncipes absolutos, u otras personas acostumbradas a una deferencia ilimitada, se resienten generalmente de este exceso de confianza en sus propias opiniones sobre cualquier asunto. También aquellos que, en mejor situación, oyen discutir alguna vez sus opiniones, y que no están del todo acostumbrados a que sus puntos de vista sean respetados cuando se equivocan, conceden la misma confianza sin límites a aquellas opiniones suyas que cuentan con la simpatía de los que les rodean, o de aquellos para quienes tienen una deferencia habitual; pues, en proporción a su falta de confianza en su juicio solitario, el hombre concede una fe implícita a la infalibilidad del mundo en general. Y "todo el mundo" es para cada individuo la porción de mundo con la que él está en contacto: su partido, su secta, su iglesia, su clase de sociedad; y, de modo relativo, se puede decir que un hombre tiene amplitud de miras, cuando "el mundo" significa para él su país o su siglo. La fe del hombre en esta autoridad colectiva, no queda en nada disminuida porque sepa que otros siglos, otros países, otras sectas, otras iglesias, otros partidos, hayan pensado y piensen exactamente lo contrario. Da la razón a su propio mundo contra los mundos disidentes de otros hombres, y no le inquieta jamás la idea de que el puro azar ha decidido cuál de esos mundos numerosos sea el objeto de su confianza, y que las mismas causas que han hecho de él un cristiano en Londres, le hubieran hecho un budista o un confucionista en Pekín.  ',
      tag: 'Cultura'
    },
    {
      title: 'Así habló Zaratustra',
      author: 'Nitzsche',
      text: 'Cuando Zaratustra tenía treinta años2 abandonó su patria y el lago de su patria y marchó a las montañas. Allí gozó de su espíritu y de su soledad y durante diez años no se cansó de hacerlo. Pero al fin su corazón se transformó, - y una mañana, levantándose con la aurora, se colocó delante del sol y le habló así: «¡Tú gran astro! ¡Qué sería de tu felicidad si no tuvieras a aquellos a quienes ilumi-nas!3. Durante diez años has venido subiendo hasta mi caverna: sin mí, mi águila y mi ser-piente4 te habrías hartado de tu luz y de este camino. Pero nosotros te aguardábamos cada mañana, te liberábamos de tu sobreabundancia y te bendecíamos por ello. ¡Mira! Estoy hastiado de mi sabiduría como la abeja que ha reco-gido demasiada miel, tengo necesidad de manos que se extiendan. Me gustaría regalar y repartir hasta que los sabios entre los hombres hayan vuelto a re-gocijarse con su locura, y los pobres, con su riqueza. Para ello tengo que bajar a la profundidad: como haces tú al atardecer, cuando traspo-nes el mar llevando luz incluso al submundo, ¡astro inmensamente rico! Yo, lo mismo que tú, tengo que hundirme en mi ocaso5, como dicen los hombres a quienes quiero bajar. ¡Bendíceme, pues, ojo tranquilo, capaz de mirar sin envidia incluso una felicidad demasiado grande! ¡Bendice la copa que quiere desbordarse para que de ella fluya el agua de oro llevando a todas partes el resplandor de tus delicias! ¡Mira! Esta copa quiere vaciarse de nuevo, y Zaratustra quiere volver a hacerse hom-bre.» ',
      tag: 'Mundo'
    }
  ]


  constructor() { 
    console.log('service active');
    
  }

  getPosts(){
    return this.texts;
  }

  sendPosts(a,b,c,d){
    this.texts.push({
      title: a,
      author: b,
      text: c,
      tag: d
    })

  }
}
