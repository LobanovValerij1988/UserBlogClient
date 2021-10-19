import { render, screen } from '@testing-library/react';
import TextBox from "./TextBox";
import userEvent from "@testing-library/user-event";

const errorMessage = "something was wrong"
const typedMesage = "react"
const onChange = jest.fn()

describe('TextBox component', () =>{
     it('Error message  show', () => {
         render(<TextBox HasError={true} label = "our label" ErrorMessage = {errorMessage}  placeholder = ""  value = ""  setValue = {onChange} type = "text"  />) ;
         expect(screen.getByText(errorMessage)).toBeInTheDocument();
     })
     it('Error message doesnt show', () => {
            render(<TextBox HasError={false} label = "our label" ErrorMessage = {errorMessage}  placeholder = ""  value = ""  setValue = {onChange} type = "text"  />) ;
            expect(screen.queryByText(errorMessage)).toBeNull();
     })
    it('On change works correctly', () => {
             render(<TextBox HasError={false} label = "our label" ErrorMessage = {errorMessage}  placeholder = ""  value = ""  setValue = {onChange} type = "text"  />) ;
             userEvent.type(screen.getByRole('textbox'), typedMesage)
             expect(onChange).toHaveBeenCalledTimes(typedMesage.length)

    })
   it("Text Box snapshot", ()=>{
       const textBox =  render(<TextBox HasError={false} label = "our label" ErrorMessage = {errorMessage}  placeholder = ""  value = ""  setValue = {onChange} type = "text"  />) ;
       expect(textBox).toMatchSnapshot();
   })
    })