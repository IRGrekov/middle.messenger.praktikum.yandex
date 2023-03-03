import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from '../HTTPTransport';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

// global.document = new JSDOM().window;
// global.document = new JSDOM().window;

let open: any, send: any, setRequestHeader: any;

describe("HTTPTransport test", () => {
  open = sinon.fake()
  send = sinon.fake()
  setRequestHeader = sinon.fake()

  function FakeFormData() { }

  // @ts-ignore
  global.FormData = FakeFormData;
  // @ts-ignore
  global.XMLHttpRequest = function () {
    return {
      x: 123,
      open,
      send,
      setRequestHeader,
    } as any
  }

  it("GET method", () => {
    const http = new HTTPTransport('/user');

    http.get('/getUser')

    expect(open.callCount).to.eq(1);
    expect(send.callCount).to.eq(1);

    expect(open.firstArg).to.eq("GET");
    expect(open.lastArg).to.eq("https://ya-praktikum.tech/api/v2/user/getUser");
  })

})



// import { Link } from './link';
// import { expect } from 'chai';
// import Router from '../../service/router/router';
// import sinon from 'sinon';

// describe('Компонент Link', function () {
//     const router = new Router('/');
//     const originalMethodGo = router.go;

//     beforeEach(() => {
//         router.go = sinon.fake();
//     });

//     after(() => {
//         router.go = originalMethodGo;
//     });

//     it('должен вызывать метод go у Router при клике', () => {
//         const instance = new Link({
//             text: 'test',
//             href: '#'
//         });
//         instance.render = () => {
//             return new DocumentFragment();
//         };

//         const element = instance.element;

//         (element as HTMLElement).click();

//         expect((router.go as any).callCount).to.eq(1);
//     });

//     it('должен перейти по href', () => {
//         const path = '/sign-up';
//         const instance = new Link({
//             text: 'test',
//             href: path
//         });

//         const element = instance.element;

//         (element as HTMLElement).click();

//         expect((router.go as any).firstArg).to.eq(path);
//     });

//     it('должен вернуть переданный label', () => {
//         const label = 'test';
//         const instance = new Link({
//             text: label,
//             href: '#'
//         });

//         const element = instance.element;

//         expect(element?.textContent).to.eq(label);
//     });
// });
