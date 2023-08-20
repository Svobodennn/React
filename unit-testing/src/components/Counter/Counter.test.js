import {render,screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

describe("Counter Tets", () =>{
    let increaseBtn, decreaseBtn, count

    beforeEach(() =>{
        render(<Counter/>)
         count = screen.getByText("0")
         increaseBtn = screen.getByText("Arttır")
         decreaseBtn = screen.getByText("Azalt")

         console.log("deneme",increaseBtn)

    })

    beforeAll(()=>{
        console.log("Her şeyden önce 1 kere çalışacak")
    })

    afterAll(()=>{
        console.log("Her şeyden sonra 1 kere çalışacak")
    })

    afterEach(()=>{
        console.log("Her testten sonra çalışacak")
    })

    test("increase btn", () => {
        act(() => { // kodlar asenkron çalıştığı için takip edebilmesi için act kullanırız
            userEvent.click(increaseBtn);
        });
        expect(count).toHaveTextContent("1");
    });
    test("decrease btn", () => {
        act(() => {
            userEvent.click(decreaseBtn);
        });
        expect(count).toHaveTextContent("-1");
    });

})


// test("decrease btn", () => {
//     render(<Counter/>)

//     const count = screen.getByText("0")

//     const decreaseBtn = screen.getByText("Azalt")
//     userEvent.click(decreaseBtn)
//     expect(count).toHaveTextContent("-1")
// }) // it should be.... it() veya test()