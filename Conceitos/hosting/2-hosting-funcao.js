function fn() {
  log('Hoisting de função');
  function log(text) {
    console.log(text);
  }
}

fn();

/* function fn() {
    function log(text) {
      console.log(text);
    }
    log('Hoisting de função');
  }
 */
