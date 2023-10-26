import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import {
  Container,
  Header,
  Logo,
  Overlay,
  ProfilePicture,
  ProfilePictureWrapper,
  Text,
} from './styles'

import logo from '@assets/logo.png'
import profilePicture from '@assets/profile-picture.png'

import { Button } from '@components/Button'
import { Overview } from './components/Overview'
import { Meals } from './components/Meals'

export function Home() {
  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('new')
  }

  return (
    <Container edges={['top', 'left', 'right']}>
      <Header>
        <Logo source={logo} alt="Daily diet logo" />

        <ProfilePictureWrapper>
          <ProfilePicture source={profilePicture} alt="Profile picture" />
        </ProfilePictureWrapper>
      </Header>

      <Overview />

      <View style={{ gap: 8 }}>
        <Text>Refeições</Text>
        <Button title="Nova refeição" icon="add" onPress={handleNewMeal} />
      </View>

      <Meals />

      <Overlay
        colors={['rgba(250, 250, 250, 0)', 'rgba(250, 250, 250, 1)']}
        start={[0, 0]}
        end={[0, 1]}
      />
    </Container>
  )
}
