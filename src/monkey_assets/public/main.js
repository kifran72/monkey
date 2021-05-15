import monkey from 'ic:canisters/monkey';

monkey.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
