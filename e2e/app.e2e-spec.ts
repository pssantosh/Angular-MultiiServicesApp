import { MultiserviceappPage } from './app.po';

describe('multiserviceapp App', function() {
  let page: MultiserviceappPage;

  beforeEach(() => {
    page = new MultiserviceappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
