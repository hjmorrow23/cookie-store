import styled from "styled-components";

const MainNav = styled.nav`
    padding: 30px 50px;
    position: relative;
    z-index: 100;
    height: calc(100% - 60px);
    background-color: #fff;

    ul {
        list-style: none;

        li {
            margin-bottom: 10px;

            a {
                text-decoration: none;
                color: ${props => props.theme.grey};
                transition: color .35s;

                &:hover {
                    color: #232323;
                }
            }
        }
    }

    
`;

export default MainNav;