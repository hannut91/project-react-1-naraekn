import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import WhoAreYou from '../components/WhoAreYou';

import { setAnswer } from '../slice';

import { get } from '../utils';

export default function WhoAreYouContainer() {
  const dispatch = useDispatch();

  const answers = useSelector(get('answers'));
  const test = useSelector(get('test'));
  const images = useSelector(get('testImages'));

  function handleClickOption({ questionId, answerId }) {
    dispatch(setAnswer({ questionId, answerId }));
  }

  const { id } = test;

  const selectedAnswer = answers[id] || null;

  return (
    <WhoAreYou
      test={test}
      images={images}
      selectedAnswer={selectedAnswer}
      handleClickOption={handleClickOption}
    />
  );
}
