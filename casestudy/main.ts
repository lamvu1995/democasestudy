import ()
let input = require('readline-sync');
let town = new TownManager(1, 'hanoi');
let family = new Family(0);

function showMainMenu() {
    let choice = -1
    do {
        console.log(`
        -----Main Menu-----
        1.Add new goods
        2.Show goods List.
        3.Find Product.
        4.Show All.
        0.Exit
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addFamily()
                break;
            case 2:
                showFamily()
                break;
            case 3:
                searchPerson()
                break;
            case 4:
                showAll()
                break;
            case 5:

                break;
        }
    } while (choice != 0)
}


function showGoods() {
    console.log(`
     —-------- Menu danh sách hộ gia đình —-------
    `)
    let families = town.getfamilies();
    let menu = ''
    for (let i = 0; i < families.length; i++) {
        menu += `${i + 1}. AddressNumber: ${families[i].addressNumber}\n`
    }
    menu += '0.Exit'
    console.log(menu);
    let choice = +input.question('Enter choice : ');
    if (choice === 0) {
        showMainMenu();
    } else {
        let familyChoice = families[choice - 1];
        showMenuPerson(familyChoice);
    }
}

function showMenuPerson(family: Family) {
    let choice = -1;
    do {
        console.log(`
        -----Menu Manager Person ${family.addressNumber}-----
        1.Add Person.
        2.Get list.
        3.Delete.
        4.Edit.
        0.Back To Main Menu.
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addPerson(family)
                break;
            case 2:
                getListPerson(family)
                break;
            case 3:
                deletePerson(family)
                break;
            case 4:
                editPerson(family)
                break;
        }
    } while (choice != 0)

}

function addFamily() {
    let id = +input.question('Enter id: ');
    let addfamily = new Family(id)
    town.add(addfamily)
}

function managerPerson(family: Family) {
    console.log('------- Menu nhà -----')
    console.log(family)
}

let ID = 1

function addPerson(family: Family) {
    console.log('-----Add Menu----')
    let id = ID;
    let fullname = input.question('Enter fullname: ')
    let age = +input.question('Enter age: ')
    let job = input.question('Enter job: ')
    let person: Person = new Person(id, fullname, age, job);
    family.add(person)
    return ID++
}

function getListPerson(family: Family) {
    let getlist = family.getList()
    for (const getlistKey in getlist) {
        console.log(getlist[getlistKey].getInfo())
    }
}

function deletePerson(family: Family) {
    let id = +input.question('Enter id: ');
    family.delete(id)
    console.log('delete complete!')
}

function editPerson(family: Family) {
    let id = +input.question('Enter id: ')
    let fullname = input.question('Enter fullname: ')
    let age = +input.question('Enter age: ')
    let job = input.question('Enter job: ')
    let person: Person = new Person(id, fullname, age, job);
    family.edit(id, person)
    console.log('edit complete!')
}

function searchPerson() {
    console.log('------- Find People--------')
    let idPerson = +input.question('Enter Id Find : ');
    let families = town.getfamilies();
    let check = false;

    for (let i = 0; i < families.length; i++) {
        let currentFamily = families[i];
        let people = currentFamily.getList()
        for (let j = 0; j < people.length; j++) {
            if (people[j].ID === idPerson) {
                console.log(`${people[j].getInfo()} số nhà: ${currentFamily.addressNumber}`)
                check = true;
            }
        }
    }

    if (!check) {
        console.log('Không tìm thấy')
    }
}

function showAll() {
    let town1 = town.getList()
    let check = false;
    for (const town1Key in town1) {
        let currentFamily = town1[town1Key];
        let people = currentFamily.getList()
        for (const peopleKey in people) {
            console.log(`số nhà: ${currentFamily.addressNumber} số người: ${currentFamily.familyMembers} ${people[peopleKey].getInfo()}`)
        }
    }
    if (!check) {
        console.log('Không tìm thấy');
    }
}

showMainMenu()