// WhileYouWait Customer Portal v2.0
// Milestone 1 Foundation
// Entry point
function doGet(e){
  const t=HtmlService.createTemplateFromFile('index');
  t.appName='WhileYouWait™ Customer Portal';
  t.version='2.0';
  return t.evaluate().setTitle('WhileYouWait Customer Portal');
}
function include(f){return HtmlService.createHtmlOutputFromFile(f).getContent();}
