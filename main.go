package main

import (
    "fmt"
    "log"
    "os"
    "strconv"
)

func add(a, b float64) float64 {
    return a + b
}

func subtract(a, b float64) float64 {
    return a - b
}

func multiply(a, b float64) float64 {
    return a * b
}

func divide(a, b float64) float64 {
    if b == 0 {
        log.Fatal("Error: Division by zero")
    }
    return a / b
}

func main() {
    var operation string
    var num1, num2 float64

    fmt.Println("Simple Go Calculator")
    fmt.Print("Enter first number: ")
    _, err := fmt.Scan(&num1)
    if err != nil {
        log.Fatal("Invalid input for first number")
    }

    fmt.Print("Enter second number: ")
    _, err = fmt.Scan(&num2)
    if err != nil {
        log.Fatal("Invalid input for second number")
    }

    fmt.Print("Enter operation (+, -, *, /): ")
    _, err = fmt.Scan(&operation)
    if err != nil {
        log.Fatal("Invalid input for operation")
    }

    var result float64
    switch operation {
    case "+":
        result = add(num1, num2)
    case "-":
        result = subtract(num1, num2)
    case "*":
        result = multiply(num1, num2)
    case "/":
        result = divide(num1, num2)
    default:
        log.Fatal("Invalid operation")
    }

    fmt.Printf("Result: %f\n", result)
}
