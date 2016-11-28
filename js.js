for(var t=5; t<120; t+=10) {
  console.log("Current value is " + t)
}


for(var y=4096; y>1; y/=2) {
  console.log("Current value is " + y)
}


var Pres = ["George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William Henry Harrison",
"John Tyler",
"James K. Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford B. Hayes",
"James A. Garfield",
"Chester Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William Howard Taft",
"Woodrow Wilson",
"Warren G. Harding",
"Calvin Coolidge",
"Herbert Hoover",
"Franklin D. Roosevelt",
"Harry S. Truman",
"Dwight D. Eisenhower",
"John F. Kennedy",
"Lyndon B. Johnson",
"Richard Nixon",
"Gerald Ford",
"Jimmy Carter",
"Ronald Reagan",
"George Bush",
"Bill Clinton",
"George W. Bush",
"Barack Obama"]

for(g=0; g<Pres.length; g++) {
  console.log("President #" + (g+1) +" "+ Pres[g])
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for(var prop in antSpecies) {
  console.log(prop)
}
