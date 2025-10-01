import { configure, render } from "@testing-library/react"
import React from "react"
import NoRoleScreen from "./NoRoleScreen"
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

describe("NoRoleScreen Tests", () => {
    it("Should Load All Components", () => {

        let screen = render(<NoRoleScreen />);

        expect(screen.getByTestId("wrapperTest")).toBeInTheDocument();
        expect(screen.getByTestId("wrapperContentTest")).toBeInTheDocument();
        expect(screen.getByTestId("imageNoRoleTest")).toBeInTheDocument();
        expect(screen.getByTestId("messageNoRoleTest")).toBeInTheDocument();
        expect(screen.getByTestId("firstSubMessageNoRoleTest")).toBeInTheDocument();
        expect(screen.getByTestId("secondSubMessageNoRoleTest")).toBeInTheDocument();
    });
});    