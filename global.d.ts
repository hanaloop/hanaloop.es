import type messages from './messages/ko.json';

type Messages = typeof messages;

declare global {
  interface IntlMessages extends Messages {}
}
