function Multireader() {
    let y = this.files[0];
    let z = this.files[1];
    let reader = new FileReader();
    let a = reader.readAsText(y);
    let b = reader.readAsText(z);
    console.log(a, b);
  }