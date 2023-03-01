import React from 'react';

const HandleFormatPrice = (x) => {
  return Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'vnd',
  }).format(x);
};

export default HandleFormatPrice;
