function Filereader(reader) {
    let x = this.files[0];
    reader = new Filereader();
    reader.readAsText(x);
    console.log(reader.result);
  }
  