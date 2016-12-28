---
layout: post
title:  "choroplethrMaps Kaggle "
date:   2016-12-27 23:12:14 -0400 
comments: false
categories: kaggle maps
---

![map](https://storage.googleapis.com/montco-stats/kaggleNeoplasms.png)

[Simple script on Kaggle](https://www.kaggle.com/mchirico/d/IHME/us-countylevel-mortality/quick-start-r)


{% highlight R %}
library(choroplethr)
library(choroplethrMaps)



# Read our input
d <- read.csv("../input/mort.csv", sep=",")
t = d[d$Category == "Neoplasms",c("FIPS","Mortality.Rate..2014.")]
t = t[t$FIPS > 1000,]  # Just want counties

# Change to c("region","value") for mapping
colnames(t)<- c("region","value")
t <- t[t$value > 0,]


county_choropleth(t,
                 title      = "Mortality Rate 2014 (Neoplasms)",
		                  legend     = "Deaths per 100,000")


{% endhighlight %}


