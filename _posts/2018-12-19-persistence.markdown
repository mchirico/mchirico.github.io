---
layout: post
title: "Persistence Store "
date: 2018-12-19 18:13:21 -0400
comments: false
categories: swift
---

Make a `struct` _Codable_ so that
data can be json encoded for persistence storage.

```swift
struct Employee: Codable {

  let name: String
  let age: Int
  let role: Role

  enum Role: String, Codable {
    case manager
    case developer
    case admin
  }
}

struct Company : Codable {

  let name: String
  let officeLocation: Location?
  let employees: [Employee]
}

struct Location : Codable {
  let latitude: Double
  let longitude: Double
}

let employee = Employee(name: "Peter", age: 27, role: .manager)
let company = Company(name: "Awesome Company", officeLocation: nil, employees: [employee])
let encoder = JSONEncoder()


let companyData = try encoder.encode(company)
let string = String(data: companyData, encoding: .utf8)!
print(string)

let pStore = UserDefaults.standard
pStore.set(companyData, forKey: "Company 1")

let result = pStore.data(forKey: "Company 1")
print("Result: \(String(describing: result))")



```

<!--  Enter text below, if you want -->
