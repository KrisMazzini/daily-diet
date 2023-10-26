import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Options = styled.View`
  flex-direction: row;
  gap: 8px;
`

interface OptionProps {
  selected: boolean
}

const Option = styled.TouchableOpacity<OptionProps>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const Yes = styled(Option)`
  ${({ theme, selected }) =>
    selected &&
    css`
      border-color: ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `}
`

export const No = styled(Option)`
  ${({ theme, selected }) =>
    selected &&
    css`
      border-color: ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_LIGHT};
    `}
`

export const OptionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_1};
  `}
`

const Indicator = styled.View`
  margin-top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const YesIndicator = styled(Indicator)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`

export const NoIndicator = styled(Indicator)`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`
