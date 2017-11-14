---
layout: post
title:  "Swift 4 Strings "
date:   2017-11-14 06:00:29 -0400 
comments: false
categories: swift
---

## Substring

```swift

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
}


"test here"[3..<5]
// Outputs  "t her"

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






