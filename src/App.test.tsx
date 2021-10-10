import React from 'react'
import { map, delay } from 'rxjs/operators'
import { TestScheduler } from 'rxjs/testing'
import { deepStrictEqual } from 'assert'

const testScheduler = new TestScheduler(deepStrictEqual)

const epicLike = (action$: any) =>
    action$.pipe(
        delay(20),
        map((a) => 'b')
    )

it('Check test response', async () => {
    const input$ = '---a---a---a---a---'
    const output$ = '---b---b---b---b---'
    testScheduler
        .expectObservable(epicLike(testScheduler.createHotObservable(input$)))
        .toBe(output$)
    // testScheduler.flush()
})
