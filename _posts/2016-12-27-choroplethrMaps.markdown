---
layout: post
title:  "choroplethrMaps Kaggle "
date:   2016-12-27 23:12:14 -0400 
comments: false
categories: kaggle maps
---

![map](https://storage.googleapis.com/montco-stats/kaggleNeoplasms.png)

I put up the [US county-level mortality](https://www.kaggle.com/IHME/us-countylevel-mortality) Dataset
on kaggle.  I'm still convinced that mortality data was a better way to poll data on
the presidential election. A lot of people were unhappy the American's future prospect, and
and think counties that had a history of self-harm, generally voted for Trump. Anyway... need
more data to support that.

[Simple script on Kaggle](https://www.kaggle.com/mchirico/d/IHME/us-countylevel-mortality/quick-start-r)


Cool chart. Maybe some interesting correlations. This is a
 [kaggle kernel](https://www.kaggle.com/robertoruiz/d/IHME/us-countylevel-mortality/eda-1-some-interesting-correlations)
 by RobertoRuiz.


![cool](https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2016-12-3110.39.21.png)


This is a good example by [Umesh](https://www.kaggle.com/umeshnarayanappa/d/IHME/us-countylevel-mortality/explore-state-level-mortality-rates)

![umesh](https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2016-12-3110.48.03.png)



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


