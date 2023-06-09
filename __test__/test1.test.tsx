import React from "react";
import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyEvent from "@/components/MyEvent";
////
////
let button: any;
let input: any;
beforeEach(() => {
    render(<MyEvent />);
    button = screen.getByRole("button");
    input = screen.getByRole("textbox");
});
describe("폼 렌더링 테스트.", () => {
    test("input이 있어야한다.", () => {
        expect(input).toBeInTheDocument();
    });

    test("버튼이 있는지 확인", () => {
        expect(button).toBeInTheDocument();
    });

    test("입력 값이 없으면 버튼은 비활성화 되어있어야한다.", () => {
        expect(button).toBeDisabled();
    });

    test('텍스트를 입력하여 제출 버튼을 누르면 그 텍스트 뒤에 ", Hi!"를 추가합니다.', () => {
        fireEvent.change(input, { target: { value: "it is me" } });
        fireEvent.click(button);
        expect(button).toBeEnabled();
        expect(screen.getByText("it is me, Hi!")).toBeInTheDocument();
    });
});
