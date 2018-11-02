(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{HeyQ:function(n,e){n.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarMonthViewDay } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: <span class="hljs-built_in">Array</span>&lt;CalendarEvent&lt;{ incrementsBadgeTotal: <span class="hljs-built_in">boolean</span> }&gt;&gt; = [\n    {\n      title: <span class="hljs-string">\'Increments badge total on the day cell\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class="hljs-literal">true</span>\n      }\n    },\n    {\n      title: <span class="hljs-string">\'Does not increment the badge total on the day cell\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class="hljs-literal">false</span>\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): <span class="hljs-built_in">void</span> {\n    body.forEach(day =&gt; {\n      day.badgeTotal = day.events.filter(\n        event =&gt; event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n'},"Q/02":function(n,e){n.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},dDN7:function(n,e){n.exports='<mwl-calendar-month-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [activeDayIsOpen]="true"\n  (beforeViewRender)="beforeMonthViewRender($event)">\n</mwl-calendar-month-view>'},gumD:function(n,e){n.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n  [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n  (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeMonthViewRender($event)"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>'},jdhe:function(n,e,a){"use strict";a.r(e),a.d(e,"sources",function(){return s});var s=[{filename:"component.ts",contents:{raw:a("tIn/"),highlighted:a("HeyQ")}},{filename:"template.html",contents:{raw:a("dDN7"),highlighted:a("gumD")}},{filename:"module.ts",contents:{raw:a("k+K6"),highlighted:a("Q/02")}}]},"k+K6":function(n,e){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},"tIn/":function(n,e){n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [\n    {\n      title: 'Increments badge total on the day cell',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: true\n      }\n    },\n    {\n      title: 'Does not increment the badge total on the day cell',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: false\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(day => {\n      day.badgeTotal = day.events.filter(\n        event => event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n"}}]);