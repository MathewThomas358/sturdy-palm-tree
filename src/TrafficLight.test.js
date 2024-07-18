import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrafficLight from './TrafficLight';

jest.useFakeTimers();

describe('TrafficLight Component', () => {
  test('only one color is visible at a time', () => {
    render(<TrafficLight />);
    
    const greenLight = screen.getByTestId('green-light');
    const yellowLight = screen.getByTestId('yellow-light');
    const redLight = screen.getByTestId('red-light');

    expect(greenLight).toHaveStyle('background-color: #344f3b');
    expect(yellowLight).toHaveStyle('background-color: #524b07');
    expect(redLight).toHaveStyle('background-color: #592e2e');

    const button = screen.getByText('Start Traffic Light');
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(0);
    });
    expect(greenLight).toHaveStyle('background-color: green');
    expect(yellowLight).toHaveStyle('background-color: #524b07');
    expect(redLight).toHaveStyle('background-color: #592e2e');

    act(() => {
      jest.advanceTimersByTime(4000);
    });
    expect(greenLight).toHaveStyle('background-color: #344f3b');
    expect(yellowLight).toHaveStyle('background-color: yellow');
    expect(redLight).toHaveStyle('background-color: #592e2e');

    // Fast-forward and check the red light
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(greenLight).toHaveStyle('background-color: #344f3b');
    expect(yellowLight).toHaveStyle('background-color: #524b07');
    expect(redLight).toHaveStyle('background-color: red');
  });
});
