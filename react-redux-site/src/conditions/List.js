import React from 'react';
import styled from 'styled-components';
import Item from './Item'

const Wrapper = styled.section`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
@media (min-width: 766px)
{
    max-width: 720px;
}
`;

const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
`;

function List(props) {
    const {conditions} = props;
    return (<ul>
        <Wrapper>
            <UnorderedList>
                {conditions.map((item, index) => (
                    <Item item={item} index={index} key={index}/>
                ))}

            </UnorderedList>
        </Wrapper>
        ))}

    </ul>
    );
}

export default List;