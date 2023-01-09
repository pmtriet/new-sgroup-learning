function getName() {
    let name = prompt("Nhập tên của bạn: ")
    if(!name) return getName()
    return name;
  }
  let name
  if(localStorage.getItem("name")) {
    name = localStorage.getItem('name')
  } else {
    name = getName()
  }
  document.write(`Hello ${name}`);
  localStorage.setItem("name" , name)