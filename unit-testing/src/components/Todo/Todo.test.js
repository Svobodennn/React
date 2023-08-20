import {render,screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe("Todo Testleri", () => {
    let button, input;
    beforeEach(()=> {
        render(<Todo/>)

        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    });

    it("Varsayılan 3 nesne render edilmeli", () => {
        const items =  screen.getAllByText(/Item/i)
        expect(items.length).toEqual(3)
    });

    test("Input ve Button dokümanda bulunmalı", () => {
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    it("Inputa string girilip butona basılınca listeye eklenmeli", () => {
        const name = "Melih";

        act(()=>{
            userEvent.type(input,name)

            userEvent.click(button)    
        })
        expect(screen.getByText(name)).toBeInTheDocument()
    })

})