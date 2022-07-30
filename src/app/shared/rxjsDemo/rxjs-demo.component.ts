import { Component } from "@angular/core";
import { AsyncSubject, BehaviorSubject, filter, first, from, interval, map, merge, Observable, Observer, range, ReplaySubject, Subject, take } from "rxjs";

@Component({
    selector: 'app-rxjs-demo',
    template: `<h1>From Rxjs Demo</h1>`
})
export class RxjsDemoComponent{

    // arraySource! : Observable<any>;
    // ngOnInit(){

    //     const rangeAlpha = from(range(97, 26));        
    //     var obs = rangeAlpha.pipe(filter(x => x%2==0));
    //     var obs = rangeAlpha.pipe(map(x => x*10));
    //     var obs = rangeAlpha.pipe(filter(x => x%2==0)).pipe(map(x => x*10)).pipe(first());
    //     var obs = rangeAlpha.pipe(filter(x => x%2==0)).pipe(map(x => x*10)).pipe(take(5));
    //     obs.subscribe(x => console.log(x));


    //     const num = interval(1000).pipe(take(10));
    //     num.subscribe(x => console.log(x));


    //     const number = interval(500).pipe(take(10));
    //     const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    //     const alpha = interval(510).pipe(map(i => arr[i]));
    //     const output = merge(alpha, num);
    //     output.subscribe(x => console.log(x));
    // }

    // ngOnDestroy(){
        
    // }


    // mySubject$ : any;
    // ngOnInit(){
    //     const arraySource = from([1, 2, 3, 4, 5]);
    //     //Output: 1,2,3,4,5
    //     const subscribe = arraySource.subscribe(val => console.log(val));
    // }

    // ngOnDestroy(){
        
    // }


    //** EXAMPLE 1 OF OBSERVABLE **//
    // observable$! : any;
    // ngOnInit(){
    //     this.observable$ = new Observable((observer : Observer<any>) => {
    //         observer.next(1);
    //         observer.next(2);
    //         observer.next(3);
    //         console.log("Inside the observable")
    //         observer.complete();
    //     });

    //     this.observable$.subscribe(
    //         (value : any) => console.log("The emitted value is ", value),
    //         (err : any) => {},
    //         () => console.log("The end")
    //     );
    // }

    // ngOnDestroy(){
    //     this.observable$.unsubscribe();
    // }


    //** EXAMPLE 2 OF OBSERVABLE **//
    // mySubject$! : any;
    // ngOnInit(){
    //     this.mySubject$ = new Subject();

    //     this.mySubject$.subscribe((x : any) => console.log("First subscriber", x));
    //     this.mySubject$.next(1);
    //     this.mySubject$.next(2);
    //     this.mySubject$.next(3);
    //     this.mySubject$.subscribe((x : any) => console.log("Second subscriber", x));
    //     this.mySubject$.next(4);
    //     this.mySubject$.subscribe((x : any) => console.log("Third subscriber", x));
    //     this.mySubject$.next(5);
    // }

    // ngOnDestroy(){
    //     this.mySubject$.unsubscribe();
    // }


    //** EXAMPLE 3 OF OBSERVABLE (BEHAVIOR) **//
    // mySubject$! : any;
    // ngOnInit(){
    //     this.mySubject$ = new BehaviorSubject(200);

    //     this.mySubject$.subscribe((x : any) => console.log("First subscriber", x));
    //     this.mySubject$.next(1);
    //     this.mySubject$.next(2);
    //     this.mySubject$.next(3);

    //     this.mySubject$.subscribe((x : any) => console.log("Second subscriber", x));
    //     this.mySubject$.next(4);

    //     this.mySubject$.subscribe((x : any) => console.log("Third subscriber", x));
    //     this.mySubject$.next(5);
    //     this.mySubject$.next(6);
    // }

    // ngOnDestroy(){
    //     this.mySubject$.unsubscribe();
    // }


    //** EXAMPLE 4 OF OBSERVABLE (REPLAY) -> ALL PREVIOUS DATA IS ALSO RECEIVED **//
    // mySubject$! : any;
    // ngOnInit(){

    //     this.mySubject$ = new ReplaySubject(200);

    //     this.mySubject$.subscribe((x : any) => console.log("First subscriber", x));
    //     this.mySubject$.next(1);
    //     this.mySubject$.next(2);
    //     this.mySubject$.next(3);
        
    //     this.mySubject$.subscribe((x : any) => console.log("Second subscriber", x));
    //     this.mySubject$.next(4);

    //     this.mySubject$.subscribe((x : any) => console.log("Third subscriber", x));
    //     this.mySubject$.next(5);
    //     this.mySubject$.next(6);
    // }

    // ngOnDestroy(){
    //     this.mySubject$.unsubscribe();
    // }


    //** EXAMPLE 5 OF OBSERVABLE (ASYNC) **//
    // mySubject$! : any;
    // ngOnInit(){

    //     this.mySubject$ = new AsyncSubject();

    //     this.mySubject$.subscribe((x : any) => console.log("First subscriber", x));
    //     this.mySubject$.next(1);
    //     this.mySubject$.next(2);
    //     this.mySubject$.next(3);
        
    //     this.mySubject$.subscribe((x : any) => console.log("Second subscriber", x));
    //     this.mySubject$.next(4);
    //     this.mySubject$.next();

    //     this.mySubject$.subscribe((x : any) => console.log("Third subscriber", x));
    //     this.mySubject$.next(5);
    //     this.mySubject$.next(6);
    //     this.mySubject$.subscribe((x : any) => console.log("Forth subscriber", x));

    // }

    // ngOnDestroy(){
    //     this.mySubject$.unsubscribe();
    // }
}