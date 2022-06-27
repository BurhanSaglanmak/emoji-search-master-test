import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";

import App from "./App";
import EmojiResultRow from "./EmojiResultRow";

describe("tests", () => {
    

    test("Header açıldı mı?", () => {
        render(<App />);
        const headerText = screen.getByText(/Emoji Search/i);
        expect(headerText).toBeInTheDocument();
    });

    test("Emoji listesi oluşturuldu mu?", () => {
        render(<App />);
        const items = screen.getAllByText(/Click to copy emoji/i);
        expect(items.length).toEqual(20);
    });

    test("Emoji listesi filtrelemeye göre yeniden işleniyor mu?", () => {
        render(<App />);
        const inputText = screen.getByText("Joy");
        expect(inputText).toBeInTheDocument("Joy");
    });

    test("Tıklanan emoji kopyalandı mı?", () => {
        const { container } = render(<EmojiResultRow key='100' symbol='💯' title='100' />);
        const divItem = container.getElementsByTagName('div')[0];
        userEvent.click;
        expect(divItem.getAttribute('data-clipboard-text') === '💯');
    })

})