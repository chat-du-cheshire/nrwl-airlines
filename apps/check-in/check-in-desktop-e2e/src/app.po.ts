// apps/check-in/check-in-desktop-e2e/src/app.po.ts
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('check-in-root h1')).getText() as Promise<string>; // 👈
  }
}
