import * as ko from 'knockout';
import {Person} from './person';

export class Newbie extends Person {
  constructor(name, age){
    super();
    this.name = ko.observable(name);
    this.age = ko.observable(age);
    this.randomNumber = Math.random();
  }
}
