import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    };
    
    body {
        background-color: #262624;
    };
    
    a {
        text-decoration: none;
    }
    `;

// padding-right: 50px;
//         padding-left: 50px;
// margin-right: auto;
//         margin-left: auto;

    export const Container = styled.div`
        z-index: 1;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        

        @media screen and (max-width: 991px) {
            /* padding-right: 30px;
            padding-left: 30px; */
        }
    `;


export default GlobalStyle

