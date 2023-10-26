import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
  background-color: rgba(0, 0, 0, 0.25);
`

export const Content = styled.View`
  width: 100%;
  padding: 40px 24px 24px;

  border-radius: 8px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Actions = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const Action = styled.View`
  flex: 1;
`
