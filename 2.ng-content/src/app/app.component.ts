import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  styles: [`
  .sub1-1,div[sub1-1] {
      background: #b44;
  }
  .sub2-1,div[sub2-1] {
      background: #b84;
  }

  parent2 div{
    width: 4em;
    height: 4em;
  }
  `]
})
export class AppComponent {
  title = 'hello world title';
}


@Component({
    selector: 'parent',
    template: `
    <div>
     <ng-content select="sub2"></ng-content>
     <ng-content select="sub1"></ng-content>
    </div>
    `,
    styles: [`
    div {
        background: #55c;
        height: 9em;
        width: 9em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `]
})
export class ParentComponent {
    subTitle = 'this is parent'
}


@Component({
    selector: 'parent2',
    template: `
    <div [ngStyle]="{display: 'flex', 'flex-direction': 'column', width: '10em'}">
    <div>
         <ng-content select=".sub2-1"></ng-content>
         <ng-content select=".sub1-1"></ng-content>
    </div>

    <div>
         <ng-content select="[sub2-1]"></ng-content>
         <ng-content select="[sub1-1]"></ng-content>
    </div>
    </div>


    `,
    styles: [`
    div {
        background: #55c;
        height: 9em;
        width: 9em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `]
})
export class Parent2Component {
    subTitle = 'this is parent'
}


@Component({
    selector: 'sub1',
    template: `
    <div class="sub1-1">
        1-1
    </div>
    <div class="sub1-2">
        1-2
    </div>
    `,
    styles: [`
    div {
        width: 4em;
        height: 4em;
    }
    .sub1-1 {
        background: #c3c;
    }
    .sub1-2 {
        background: #4cc;
    }`]
})
export class Sub1Component {
    subTitle = 'this is sub1 title'
}

@Component({
    selector: 'sub2',
    template: `
    <div class="sub2-1">
        2-1
    </div>
    <div class="sub2-2">
        2-1
    </div>
    `,
    styles: [`
    div {
        width: 4em;
        height: 4em;
    }
    .sub2-1 {
        background: #cac;
    }
    .sub2-2 {
        background: #ca2;
    }`]
})
export class Sub2Component {
}

