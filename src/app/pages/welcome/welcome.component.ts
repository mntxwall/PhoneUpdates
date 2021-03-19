import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;

}

interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
          children: [
            {
              title: 'AntDesign',
              count: 10000
            },
            {
              title: 'AntDesign UI',
              count: 10600
            }
          ]
        },
        {
          title: '问题',
          children: [
            {
              title: 'AntDesign UI 有多好',
              count: 60100
            },
            {
              title: 'AntDesign 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'AntDesign 是一个设计语言',
              count: 100000
            }
          ]
        }
      ];
    }, 1000);

  }


  onChange(value: string): void {
    console.log(value);
    console.log(this.listOfData.filter((element, index, array) => {
      //console.log(element);
      return element.name.includes(value)
      //return element.age > 30
    }))
  }

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

}
