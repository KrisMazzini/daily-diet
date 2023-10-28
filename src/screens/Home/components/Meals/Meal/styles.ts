import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-height: 50px;
  max-height: 50px;

  margin-top: 8px;
  padding-left: 12px;
  padding-right: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export type IndicatorStyleType = 'POSITIVE' | 'NEGATIVE'

interface IndicatorProps {
  type: IndicatorStyleType
}

export const Indicator = styled.View<IndicatorProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
