import { FamilyTreeAppPage } from './app.po';

describe('family-tree-app App', () => {
  let page: FamilyTreeAppPage;

  beforeEach(() => {
    page = new FamilyTreeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
