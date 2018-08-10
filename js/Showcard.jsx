import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:32%;
    border:2px solid #333;
    border-radius:4px;
    margin-bottom:25px;
    padding-right:10px;
    overflow:hidden;
`;

const Image = styled.img`
    width:46%;
    float:left;
    margin-right:10px;
`;

const Showcard = props => (
    <Wrapper>
        <Image src={`/public/img/posters/${props.details.poster}`} alt={`${props.details.title} Show Poster`} />
        <div>
            <h3>{props.details.title}</h3>
            <h4>({props.details.year})</h4>
            <p>{props.details.description}</p>
        </div>
    </Wrapper>
);

Showcard.propTypes = {
    details: shape({
        poster: string.isRequired,
        title: string.isRequired,
        year: string.isRequired,
        description: string.isRequired,
    }).isRequired,
};

export default Showcard;
