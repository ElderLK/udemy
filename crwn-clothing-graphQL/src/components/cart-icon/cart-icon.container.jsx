import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart-icon.component';

const TOOGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const GET_ITEM_COUNT = gql`
    {
        itemCount @client   
    }
`

const CartIconCotainer = () => (
    <Query query={GET_ITEM_COUNT}>
    { 
        ({ data: { itemCount }}) => (<Mutation mutation={TOOGLE_CART_HIDDEN}>
            {
                toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden}  itemCount={itemCount}/>
            }
        </Mutation>)
    }
    </Query>
);

export default CartIconCotainer;