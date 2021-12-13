// Model
const model = {
    currentCoffee : null,
    coffees: [
        {
            name: 'Cappuccino',
            cost: 20,
            code: 'Cap',
            size: 'M / L(+2$)',
            imgSrc: ('img/cappuccino.jpg'),
        },
        {
            name: 'Macchiato',
            cost: 15,
            code: 'Mac',
            size: 'M / L(+2$)',
            imgSrc: 'img/mac.jpg',
        },
        {
            name: 'Latte',
            cost: 10,
            code: 'Lat',
            size: 'M / L(+2$)',
            imgSrc: 'img/latte.jpg',
        },
        {
            name: 'Đen Đá',
            cost: 5,
            code: 'Den',
            size: 'M / L(+2$)',
            imgSrc: 'img/den.jpg',
        },
        {
            name: 'Nâu Đá',
            cost: 7,
            code: 'Nau',
            size: 'M / L(+2$)',
            imgSrc: 'img/nau.jpg',
        },
    ],
};
// Controller
const controller = {
    init() {
        model.currentCoffee = model.coffees[0];
        coffeeListView.init();
        coffeeView.init();
    },

    getCurrentCoffee() {
        return model.currentCoffee;
    },

    getCoffees() {
        return model.coffees;
    },

    setCurrentCoffee(coffee) {
        model.currentCoffee = coffee;
    },
};
// View
const coffeeView = {
    init() {
        this.coffeeElem = document.getElementById('coffee');
        this.coffeeNameElem = document.getElementById('coffee-name');
        this.coffeeCostElem = document.getElementById('coffee-cost');
        this.coffeeCodeElem = document.getElementById('coffee-code');
        this.coffeeSizeElem = document.getElementById('coffee-size');
        this.coffeeImageElem = document.getElementById('coffee-img');
        this.render();
    },

    render() {
        const currentCoffee = controller.getCurrentCoffee();
        this.coffeeNameElem.textContent = currentCoffee.name;
        this.coffeeCostElem.textContent = 'Cost: ' + '$' + currentCoffee.cost;
        this.coffeeCodeElem.textContent = 'Code: ' + currentCoffee.code;
        this.coffeeSizeElem.textContent = 'Size: ' + currentCoffee.size;
        this.coffeeImageElem.src = currentCoffee.imgSrc;
        this.coffeeImageElem.style.cursor = 'pointer';
    },
};
const coffeeListView = {
    init() {
        this.coffeeListElem = document.getElementById('coffee-list');
        this.render();
    },

    render() {
        let coffee;
        let elem;
        let i;
        const coffees = controller.getCoffees();

        this.coffeeListElem.innerHTML = '';

        for(let i = 0; i < coffees.length; i++) {
            coffee = coffees[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = coffee.name;
            elem.addEventListener(
                'click',
                (function(coffeeCopy) {
                    return function() {
                        controller.setCurrentCoffee(coffeeCopy);
                        coffeeView.render();
                    };
                })(coffee)
            );
            this.coffeeListElem.appendChild(elem);
        }
    },
};
controller.init();
