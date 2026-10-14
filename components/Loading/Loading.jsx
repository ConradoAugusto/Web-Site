import React from 'react';
import ReactLoadingPkg from 'react-loading';

// Esse truque garante que o Vite não se confunda e pegue o componente certinho!
const ReactLoading = ReactLoadingPkg.default || ReactLoadingPkg;

const Loading = ({ type, color, height, width }) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;