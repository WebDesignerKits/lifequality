import { LifequalityPage } from './app.po';

describe('lifequality App', function() {
  let page: LifequalityPage;

  beforeEach(() => {
    page = new LifequalityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
