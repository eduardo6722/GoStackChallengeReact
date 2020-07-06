const formatValue = (value: number): string =>
  value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export default formatValue;
