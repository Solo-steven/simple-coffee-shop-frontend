import  styled  from "@emotion/styled/macro";
import { keyframes } from "@emotion/react"

const loading = keyframes`
  0%{
    background-position: -315px 0px,  0px 0px;
  }

  100% {
     background-position: 315px 0px,  0px 0;
  }
`;
export const LoadingReact = styled.div`
  border-radius: 10px;
  width: ${(props: { width?: number, height?: number }) =>  props.width + "px"};
  height: ${(props: { width?: number, height?: number }) => props.height ? props.height + "px" : "auto"}; 
  background-image: 
    linear-gradient(0.25turn, transparent , #5f5f5f,  transparent),
    linear-gradient(90deg, #4b4b4b , #4b4b4b 90%);
  background-repeat: no-repeat;
  animation: ${loading} 1.5s infinite linear;
`;
