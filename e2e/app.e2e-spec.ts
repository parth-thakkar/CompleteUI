import { CompleteUIPage } from './app.po';

describe('complete-ui App', () => {
  let page: CompleteUIPage;

  beforeEach(() => {
    page = new CompleteUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
