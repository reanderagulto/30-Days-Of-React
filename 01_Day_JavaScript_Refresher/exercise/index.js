const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

const arr = []

const arrNum = [1, 2, 3, 4, 5]

console.log(`Length of arrnum is: ${arrNum.length}`)

console.log(`First Element: ${arrNum[0]}`)
console.log(`Middle Element: ${arrNum[Math.floor(arrNum.length / 2)]}`)
console.log(`Last Element: ${arrNum[arrNum.length - 1 ]}`)

const mixedDataTypes = ["Reander", "Agulto", 29, true, null]
console.log(`Length of mixedDataTypes: ${mixedDataTypes.length}`)

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompanies)

console.log(`Number of Companies in itCompanies array: ${itCompanies.length}`)

console.log(`First Element: ${itCompanies[0]}`)
console.log(`Middle Element: ${itCompanies[Math.floor(itCompanies.length / 2)]}`)
console.log(`Last Element: ${itCompanies[itCompanies.length - 1 ]}`)

itCompanies.forEach((item, index) => { 
    console.log(`Company: ${item}`)
})

itCompanies.map((item, index) => { 
    console.log(item.toUpperCase());
})

let companies = itCompanies.slice(0, (itCompanies.length - 1)).toString() + " and " + itCompanies[itCompanies.length - 1]
console.log(`${companies} are IT Companies`)