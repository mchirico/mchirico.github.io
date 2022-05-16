---
layout: post
title: "Swift 4 Strings "
date: 2017-11-14 06:00:29 -0400
comments: false
categories: swift
---

## Extending String -- subscript, findstr

Below is an example of extending String, to include
some of the common _Python_ like functions.

```swift
var str = "Hello, playground"

extension String {

  subscript (index: Int) -> Character {
    let charIndex = self.index(self.startIndex, offsetBy:index)
    return self[charIndex]
  }

  subscript (range: Range<Int>) -> String {
    let startIndex = self.index(self.startIndex, offsetBy:range.lowerBound)

    if self.count > range.upperBound {
      let endIndex = self.index(startIndex, offsetBy:range.upperBound)
      return String(self[startIndex..<endIndex])
    }
    return String(self[startIndex..<self.endIndex])
  }

  // BE  Begin End
  func findBE(_ str: String) -> (Int,Int)? {
    if let r = self.range(of: str) {
      return (r.lowerBound.encodedOffset, r.upperBound.encodedOffset)
    }
    return nil
  }
  func find(_ str: String) -> Int? {
    if let r = self.range(of: str) {
      return r.lowerBound.encodedOffset
    }
    return nil
  }
}

str[3..<7]  // "lo, pla"

if let (x,y) = "Test box".findBE("box") {
  print("Text box"[x..<y])     // "box"
  print("x = \(x), y = \(y)")  // x = 5, y =8
}

str.find("play")  // 7


```

## String with Regular Expressions

```swift
extension String {
  func get_regex(_ pat: String) -> Int {

    let regex = try! NSRegularExpression(pattern: pat, options: [])

    let matches = regex.matches(in: self, options: [], range: NSRange(location: 0, length: self.count))

    let p = matches.map { result -> String in
      let hrefRange = result.range(at: 1)

      let start = hrefRange.lowerBound
      let end = hrefRange.upperBound
      return  self[start..<end]
    }
    if p.count == 1 {
      if let r = Int(p[0]) {
        return r
      }
    }
    return 0
  }
}

"34 min".get_regex("([0-9]+)[ ]*min")   // 34



```

## Podfile

Below is a Podfile for Alamofile, Firebase etc. that haven't converted to Swift 4. The code
I'm writing in the application is Swift 4.

```bash
# Uncomment the next line to define a global platform for your project
platform :ios, '11.0'


target 'Bug' do

  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!
  pod 'Alamofire'
  pod 'Firebase/Core'
  pod 'Firebase/Database'
  pod 'Firebase/Storage'
  pod 'Firebase/Messaging'
  pod 'Firebase/Auth'
  pod 'GoogleSignIn'
  pod 'GoogleAPIClientForREST/Sheets', '~> 1.2.1'
  pod 'GoogleAPIClientForREST/Calendar', '~> 1.2.1'
  pod 'RxSwift', '~> 3.4'
  pod 'RxCocoa', '~> 3.4'


  target 'BugTests' do
    inherit! :search_paths
    # Pods for testing
  end

  target 'BugUITests' do
    inherit! :search_paths
    # Pods for testing
  end

  post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
          config.build_settings['SWIFT_VERSION'] = '3.2'
        end
    end
  end

end
```

<!--  Enter text below, if you want -->
