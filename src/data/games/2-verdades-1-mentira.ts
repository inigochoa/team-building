import GameInternal from '../../models/GameInternal'

const dosVerdadesUnaMentira = new GameInternal()
  .setIcon('🤥')
  .setName('2 verdades, 1 mentira')
  .setSlug('2-verdades-1-mentira')
  .setTags(['Confianza', 'Cooperativo', 'Deducción', 'Presencial'])
  .setDescription(
    `
      <p>Un clásico para conocer mejor a tus compañeros y poner a prueba su capacidad de
      detectar engaños. Cada persona dice tres afirmaciones sobre sí misma: dos
      verdaderas y una falsa. El resto del grupo debe adivinar cuál es la mentira.
      ¿Eres capaz de engañar a los demás sin que lo noten? Prepárate para sorpresas,
      risas y datos inesperados sobre tus compañeros.</p>
    `
  )
  .setDescriptionShort('Un juego de engaño y observación donde los participantes deben descubrir cuál de tres afirmaciones es falsa.')
  .setTimer(120)

export default dosVerdadesUnaMentira
