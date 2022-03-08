import React from "react";
import SocialNetworkApp from "./App";
import {render, screen} from '@testing-library/react';

test('renders App text', () => {
    render(<SocialNetworkApp />);
    const linkElement = screen.getByText(/App/i)
    expect(linkElement).toBeInTheDocument();
});
