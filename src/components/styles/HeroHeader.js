import styled from "styled-components";
import img from "../../assets/images/cookie-hero.jpg";

const HeroHeader = styled.header`
    /* height: 200px; */

    .hero-container {
        padding: 100px 25%;
        background: url(${img}) no-repeat; 
        background-size: cover;
        background-position: 0 -250px;
    }

    .hero-content {
        background: rgba(255, 255, 255, .75);
        border-radius: 5px;
        padding: 20px;
        width: 100%;
    }

    .hero-heading {
        color: ${props => props.theme.grey};
        margin-bottom: 30px;
        font-size: 28px;
    }

    .hero-button {
        text-decoration: none;
        padding: 5px 10px;
        display: inline-block;
        background-color: ${props => props.theme.grey};
        color: #fff;
        border-radius: 5px;
    }
`;

export default HeroHeader;