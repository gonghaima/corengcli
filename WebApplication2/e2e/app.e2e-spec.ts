import { CorengappPage } from './app.po';

describe('corengapp App', () => {
  let page: CorengappPage;

  beforeEach(() => {
    page = new CorengappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
