---
layout: post
title:  "Persistence Store "
date:   2018-12-19 18:13:21 -0400 
comments: false
categories: swift
---

Make a `struct` *Codable* so that
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


<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<!--  Enter text below, if you want -->


<div class="fb-comments"  data-numposts="5"></div>






