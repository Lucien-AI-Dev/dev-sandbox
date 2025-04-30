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
    var operator string

    fmt.Println("Enter first number:")
    fmt.Scan(&a)
    fmt.Println("Enter second number:")
    fmt.Scan(&b)
    fmt.Println("Enter operator (+, -, *, /):")
    fmt.Scan(&operator)

    switch operator {
    case "+":
        fmt.Printf("Result: %f\n", add(a, b))
    case "-":
        fmt.Printf("Result: %f\n", subtract(a, b))
    case "*":
        fmt.Printf("Result: %f\n", multiply(a, b))
    case "/":
        result, err := divide(a, b)
        if err != nil {
            fmt.Println(err)
        } else {
            fmt.Printf("Result: %f\n", result)
        }
    default:
        fmt.Println("Invalid operator")
    }
}