function Multireader() {
  let y = this.files[0];
  
  let reader = new FileReader();
  let a = reader.readAsText(y);
  console.log(a);
  a.map((name)=>{
      return (
        //   console.log(`is ${name} in class?`)
          confirm(`is ${name} in class?`)
      )
  })

}
