const input = document.getElementById('input');
console.log(input);

function addingEventListener() {
  input.addEventListener('click', () => alert('I was clicked!'));
}
