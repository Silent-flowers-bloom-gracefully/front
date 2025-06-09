import { createGlobalStyle } from "styled-components";
import HSBombaramTTFRegular from '../fonts/HSBombaram3.0_Regular.ttf';
import PretendardTTFMedium from '../fonts/Pretendard-Medium.ttf'
import PretendardTTFBold from '../fonts/Pretendard-ExtraBold.ttf'
import PretendardTTFRegular from '../fonts/Pretendard-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardTTFRegular';
    src: local('PretendardTTFRegular'), local('PretendardTTFRegular');
    font-style: normal;
    src: url(${PretendardTTFRegular}) format(truetype)
  }
  @font-face {
    font-family: 'PretendardTTFMedium';
    src: local('PretendardTTFMedium'), local('PretendardTTFMedium');
    font-style: normal;
    src: url(${PretendardTTFMedium}) format(truetype)
  }
  @font-face {
    font-family: 'PretendardTTFBold';
    src: local('PretendardTTFBold'), local('PretendardTTFBold');
    font-style: normal;
    src: url(${PretendardTTFBold}) format(truetype)
  }
  @font-face {
    font-family: 'HSBombaramTTFRegular';
    src: local('HSBombaramTTFRegular'), local('HSBombaramTTFRegular');
    font-style: normal;
    src: url(${HSBombaramTTFRegular}) format(truetype)
  }
`

export default GlobalStyle;