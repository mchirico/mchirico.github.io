
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2', color: 'green'},
      {id: 3, label: 'Node 3 \nwith\nmultiple\nlines', shape: 'circle', color: 'red'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'},
      {id: 6, label: 'Node 6 in\nthe center', color: 'blue',shape: 'text',color: 'yellow', font:{strokeWidth:4}},
    {id: 7, label: 'Node 7'},
    {id: 8, label: 'Node 8'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 8, arrows:'to', dashes:true},
    {from: 1, to: 3, arrows:'to'},
    {from: 1, to: 2, arrows:'to, from'},
    {from: 2, to: 4, arrows:'to, middle'},
    {from: 2, to: 5, arrows:'to, middle, from'},
    {from: 5, to: 6, arrows:{to:{scaleFactor:2}}},
    {from: 6, to: 7, arrows:{middle:{scaleFactor:0.5},from:true}}
  ]);

  // create a network
  var container = document.getElementById('network01');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);


// create a couple of HTML items in various ways

  var item1 = document.createElement('div');
  item1.appendChild(document.createTextNode('item 1'));

  var item2 = document.createElement('div');
  item2.innerHTML = '<span>item 2</span>';

  var item3 = document.createElement('div');
  var span3 = document.createElement('span');
  span3.className = 'large';
  span3.appendChild(document.createTextNode('item 3'));
  item3.appendChild(span3);

  var item4 = 'item <span class="large">4</span>';

  var item5 = document.createElement('div');
  item5.appendChild(document.createTextNode('item 5'));
  item5.appendChild(document.createElement('br'));
  var img5 = document.createElement('img');
  img5.src = 'https://storage.googleapis.com/montco-stats/images/traffic.png';
  img5.style.width = '25px';
  img5.style.height = '32px';
  item5.appendChild(img5);

  var item6 = 'item6<br><img src="https://storage.googleapis.com/montco-stats/images/traffic.png" style="width: 12px; height: 16px;">';

  var item7 = 'item7<br><a href="https://www.kaggle.com/mchirico/montcoalert" target="_blank">click here</a>';

  // create data and a Timeline
  var container = document.getElementById('time01');
  var items = new vis.DataSet([
    {id: 1, content: item1, start: '2016-12-20'},
    {id: 2, content: item2, start: '2016-12-14'},
    {id: 3, content: item3, start: '2016-12-18'},
    {id: 4, content: item4, start: '2016-12-16', end: '2016-12-19'},
    {id: 5, content: item5, start: '2016-12-25'},
    {id: 6, content: item6, start: '2016-12-27'},
    {id: 7, content: item7, start: '2016-12-21'}
  ]);
  var options = {};
  var timeline = new vis.Timeline(container, items, options);


