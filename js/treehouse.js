$.ajax({
  type: 'GET',
  url: 'https://teamtreehouse.com/andresaguero.json',
  // data: data,
  async: false,
  beforeSend: function (xhr) {
    if (xhr && xhr.overrideMimeType) {
      xhr.overrideMimeType('application/json;charset=utf-8');
    }
  },
  dataType: 'json',
  success: function (data) {
    //Do stuff with the JSON data
    console.log(data.points.JavaScript);
    document.getElementById("JavaScript").innerHTML = data.points.JavaScript;
    document.getElementById("CSS").innerHTML = data.points.CSS;
    document.getElementById("PHP").innerHTML = data.points.PHP;
    document.getElementById("Design").innerHTML = data.points.Design;


  }
});