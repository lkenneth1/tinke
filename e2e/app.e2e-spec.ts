import { TinkePage } from './app.po';

describe('tinke App', () => {
  let page: TinkePage;

  beforeEach(() => {
    page = new TinkePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
