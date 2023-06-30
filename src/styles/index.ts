import {createGlobalStyle, styled} from 'styled-components'

const ResetGlobal = createGlobalStyle<object>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    list-style: none;

    body {
      background-color: #ebebeb;
    }
}
`

export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
`
export default ResetGlobal