package main

import (
    "fmt"
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

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    var a, b float64
    var operation string

    fmt.Println("Enter first number:")
    fmt.Scan(&a)
    fmt.Println("Enter second number:")
    fmt.Scan(&b)
    fmt.Println("Enter operation (+, -, *, /):")
    fmt.Scan(&operation)

    var result float64
    var err error

    switch operation {
    case "+":
        result = add(a, b)
    case "-":
        result = subtract(a, b)
    case "*":
        result = multiply(a, b)
    case "/":
        result, err = divide(a, b)
        if err != nil {
            fmt.Println(err)
            return
        }
    default:
        fmt.Println("Invalid operation")
        return
    }

    fmt.Printf("Result: %f\n", result)
}