---
layout: post
title:  "Go Visitor Pattern "
date:   2018-07-30 20:50:46 -0400 
comments: true
categories: Go
---

This is kind of cool ... [Go Playground Example](https://play.golang.org/p/TU6-Z_KYAlb)

<pre>
<code class="language-go">
package main

//Thanks to http://ecs.victoria.ac.nz/foswiki/pub/Main/TechnicalReportSeries/ECSTR11-01.pdf
/*
Ref:
https://gist.github.com/francoishill/f0624e7760aacdc96b42
*/
import (
	"fmt"
)

// We will have multiple car parts
type CarPart interface {
	Accept(CarPartVisitor)
}

type Wheel struct {
	Name string
}

func (this *Wheel) Accept(visitor CarPartVisitor) {
	visitor.visitWheel(this)
}

type Engine struct{
	HP string
}

func (this *Engine) Accept(visitor CarPartVisitor) {
	visitor.visitEngine(this)
}

type Car struct {
	parts []CarPart
}

func NewCar() *Car {
	this := new(Car)
	this.parts = []CarPart{
		&Wheel{"front left"},
		&Wheel{"front right"},
		&Wheel{"rear right"},
		&Wheel{"rear left"},
		&Engine{HP: "500 cc"}}
	return this
}

func (this *Car) Accept(visitor CarPartVisitor) {
	for _, part := range this.parts {
		part.Accept(visitor)
	}
}

//Interface of the visitor
type CarPartVisitor interface {
	visitWheel(wheel *Wheel)
	visitEngine(engine *Engine)
}

// Concrete Implementation of the visitor
type GetMessageVisitor struct {
	Messages []string
}

func (this *GetMessageVisitor) visitWheel(wheel *Wheel) {
	this.Messages = append(this.Messages, fmt.Sprintf("Visiting the %v wheel\n", wheel.Name))
}

func (this *GetMessageVisitor) visitEngine(engine *Engine) {
	this.Messages = append(this.Messages, fmt.Sprintf("Visiting %v engine\n", engine.HP))
}

//Usage of the visitor
func main() {
	car := NewCar()
	visitor := new(GetMessageVisitor)
	car.Accept(visitor)
	fmt.Println(visitor.Messages)
}

</code>
</pre>


<br><br>


## [Facade Pattern](https://play.golang.org/p/nZtecznpici)




<pre>
<code class="language-go">
package main

import "fmt"


type Circle struct {
}

func (c *Circle) draw() {
	fmt.Printf("Drawing Circle\n")
}

type Square struct {
}

func (s *Square) Draw() {
	fmt.Printf("Drawing Square\n")
}

type ShapeMaker struct {
	circle *Circle
	square *Square
}

func (s *ShapeMaker) DrawCircle() {
	s.circle.draw()
}

func (s *ShapeMaker) DrawSquare() {
	s.square.Draw()
}

func main() {
	s := ShapeMaker{}
	s.DrawCircle()
	s.DrawSquare()

}


</code>
</pre>

<br><br>

## [Completion Handler Go](https://play.golang.org/p/KuRU7kgz5ar)




<pre>
<code class="language-go">

package main

import (
	"fmt"
)

func AddNumberToString(i int, completion func(s string) string) string {

	return fmt.Sprintf("%d %s\n", i, completion("one"))

}

func main() {

	m := AddNumberToString(3, func(s string) string {

		s = fmt.Sprintf(" %s %s %s\n", s, s, "test")

		return s

	})

	fmt.Println(m)

}




</code>
</pre>














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






