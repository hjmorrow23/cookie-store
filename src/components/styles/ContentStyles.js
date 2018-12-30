import styled from "styled-components";

const ContentStyles = styled.section`
    padding: 50px 25%;
    color: ${props => props.theme.grey};

    .post-content-heading {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .post-content-body {
        margin-bottom: 20px;
        line-height: 1.3;
    }
`;

export default ContentStyles;