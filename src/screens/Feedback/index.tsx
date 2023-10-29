import { useNavigation, useRoute } from '@react-navigation/native'
import { Bold, Container, Image, Subtitle, Title } from './styles'

import goodFeedback from '@assets/good-feedback.png'
import badFeedback from '@assets/bad-feedback.png'
import { Button } from '@components/Button'

interface RouteParams {
  withinDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()

  const { withinDiet } = route.params as RouteParams

  function handleGoHome() {
    navigation.navigate('home')
  }

  if (withinDiet) {
    return (
      <Container>
        <Title type="POSITIVE">Continue assim!</Title>
        <Subtitle>
          Você continua <Bold>dentro da dieta</Bold>. Muito bem!
        </Subtitle>

        <Image source={goodFeedback} alt="Figure of a woman celebrating" />

        <Button
          title="Ir para a página inicial"
          size="HUG"
          onPress={handleGoHome}
        />
      </Container>
    )
  }

  return (
    <Container>
      <Title type="NEGATIVE">Que pena</Title>
      <Subtitle>
        Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e
        não desista!
      </Subtitle>

      <Image source={badFeedback} alt="Figure of a sad man" />

      <Button
        title="Ir para a página inicial"
        size="HUG"
        onPress={handleGoHome}
      />
    </Container>
  )
}
