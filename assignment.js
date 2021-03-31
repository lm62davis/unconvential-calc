const task3Element = document.getElementById('task-3');

function noParam() {
  alert('I have no parameters.');
  return;
}

function displayName(name) {
  name = 'Max';
  alert(name);
}
displayName();

task3Element.addEventListener('click', noParam);

function greetings(str1, str2, str3) {
  str1 = 'good morning, ';
  str2 = 'good afternoon, and ';
  str3 = 'good night';
  let message = str1 + str2 + str3;
  alert(message);
}
greetings();
