
export const pxToRem = px => `${px / 22.5}rem`;

export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;


export const pxToVwPxCustom = px =>
{
  //this function maps the px given in XD to px on my screen.
  //(100*(return value))/(document.documentElement.clientWidth) = (100(px))/1920
  return ((document.documentElement.clientWidth) * px) / 1920;
};

export const pxToVhPxCustom = px =>
{
  //this function maps the px given in XD to px on my screen.
  //(100*(return value))/(document.documentElement.clientHeight) = (100(px))/930
  return ((document.documentElement.clientHeight) * px) / 930;
};




export const pxToVwCustom = px =>
  `${(100 / document.documentElement.clientWidth) * pxToVwPxCustom(px)}vw`;

export const pxToVhCustom = px =>
  `${pxToVhPxCustom(px) / (document.documentElement.clientHeight * 0.01)}vh`;




export const pxToTextPxCustom = px => 
  `${((pxToVwPxCustom(px) * 20) + (pxToVhPxCustom(px) * 5)) / 25
  }px`;

export const pxToVwPxCustom1 = px => {
  //this function maps the px given in XD to px on my screen.
  //(100*(return value))/(document.documentElement.clientWidth) = (100(px))/1920
  return `${((document.documentElement.clientWidth) * px) / 1920}px`;
};
  
export const pxToVhPxCustom1 = px => {
  //this function maps the px given in XD to px on my screen.
  //(100*(return value))/(document.documentElement.clientHeight) = (100(px))/930
  return `${((document.documentElement.clientHeight) * px) / 930}px`;
};


