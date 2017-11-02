import { BlankWallPage } from './app.po';

describe('blank-wall App', function() {
  let page: BlankWallPage;

  beforeEach(() => {
    page = new BlankWallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
