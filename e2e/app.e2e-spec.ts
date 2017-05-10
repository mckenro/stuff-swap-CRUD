import { StuffSwapPage } from './app.po';

describe('stuff-swap App', () => {
  let page: StuffSwapPage;

  beforeEach(() => {
    page = new StuffSwapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
