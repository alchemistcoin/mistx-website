import { renderWhiteLabelCSS, generateWhiteLabelCSS } from './white-label';

describe('White label Styles Utils', () => {
  describe('generateWhiteLabelCSS', () => {
    it('generates the correct css styles based on the params passed in', () => {
      const primary = '#0052cc';
      const result = generateWhiteLabelCSS({ primary });
      expect(result).toBe(`.main-bg { background: ${primary}; }`);
    });
  });

  describe('renderWhiteLabelCSS', () => {
    afterEach(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
    });

    it('creates a new style element', () => {
      const spy = jest.spyOn(document, 'createElement');
      renderWhiteLabelCSS();
      expect(document.createElement).toBeCalledWith('style');
      spy.mockRestore();
    });

    it('appends the style element to the head element with the correct content', () => {
      jest.spyOn(document.head, 'appendChild');
      renderWhiteLabelCSS();
      expect(document.head.appendChild).toBeCalled();
    });
  });
});
