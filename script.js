function showit(var1) {
	//hide div that is shown
  document.getElementById('first1').style.display = 'none';
  document.getElementById('first2').style.display = 'none';
  document.getElementById('first3').style.display = 'none';
  document.getElementById('first4').style.display = 'none';
  //show the one div sent to the function
  document.getElementById(var1).style.display = 'block';
}
var count = 1

function select(input) {
    if (count % 2 === 0) {
      document.getElementById(input.id).className = "used1"
      document.getElementById(input.id).textContent = "O"
    }
    else {
      document.getElementById(input.id).className = "used2"
      document.getElementById(input.id).textContent = "X"
    }
    count+=1
  }
