import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyIceCream } from '../redux'

function HooksCakeContainer() {
  const numOfIceCreams = useSelector(state => state.cake.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of IceCream - {numOfIceCreams}</h2>
      <button onClick={ () => dispatch(buyIceCream())}>Buy Ice cream</button>
    </div>
  )
}

export default HooksCakeContainer
