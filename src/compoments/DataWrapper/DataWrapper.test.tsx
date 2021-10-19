import { render, screen } from '@testing-library/react';
import DataWrapper from "./DataWrapper";
import {IPost} from "../../interfaces/interfaces";
import {createStyles} from "@material-ui/styles";
import {style} from "./DataWrapper-style";


const dataMock : IPost[] = [{
    userId: 1,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    picture: null,
    id: 1,
    articleContent: "some very importent content",
    title: "accelent title",
    classes: createStyles(style)
}]

describe('DataWrapper component', () =>{
    it('DataWrapper renders', () => {
        render(<DataWrapper data = {dataMock} />) ;
        expect(screen.getByText('prev')).toBeInTheDocument();
    })

})