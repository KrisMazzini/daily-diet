import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  position: relative;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const ProfilePictureWrapper = styled.View`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};

  overflow: hidden;
`

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Overlay = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 100px;
`
