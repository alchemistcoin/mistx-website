type BrandingProps = {
  primary: string;
};

export const generateWhiteLabelCSS = ({ primary }: BrandingProps) => {
  const styles = `.main-bg { background: ${primary}; }`;
  return styles;
};

export const renderWhiteLabelCSS = () => {
  const css = generateWhiteLabelCSS({ primary: '#0052cc' }); // TO DO - these params will come from an api call
  const head = document.head || document.getElementsByTagName('head')[0];
  if (head && typeof css === 'string' && document.createTextNode) {
    const style = document.createElement('style');
    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }
};

renderWhiteLabelCSS();
