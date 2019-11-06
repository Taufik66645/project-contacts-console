const names = ['Taufik Hidayat', 'Hidayat Taufik','Taufik Taufik']
const showNames = names => {
    for (let index = 0; index < names.length; index++) {
    const name = names[index]

console.log(`[${index + 1}] ${name}`)
}
}
showNames(names)

const fruits =['apple','orange','grape','watermelon','durian','strawberries']
const showFruits = fruits => {
    for (let index =0; index < fruits.length; index++) {
    const fruit = fruits[index]
    console.log(`[${index + 1}] ${fruit}`) 
    }
}
showFruits(fruits)

