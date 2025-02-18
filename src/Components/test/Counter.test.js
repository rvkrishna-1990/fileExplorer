import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test("test increment counter", ()=>{
    // render component in the virtual dom
    const {container} = render(<Counter/>);

    const incrementBtn = container.getElementsByClassName("increment")[0];
    const counterValue = container.getElementsByClassName("counterValue")[0];
    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent("1");
    expect(window.postMessage).toHaveBeenCalledWith(JSON.stringify("increment"), "*");
})

test("test decrement counter", ()=>{
    // render component in the virtual dom
    const {container} = render(<Counter/>);

    const decrement = container.getElementsByClassName("decrement")[0];
    const counterValue = container.getElementsByClassName("counterValue")[0];
    fireEvent.click(decrement);
    expect(counterValue).toHaveTextContent("-1");
})