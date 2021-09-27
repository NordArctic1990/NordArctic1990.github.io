function calc() {
            var list1 = document.getElementById("list1");
            var list2 = document.getElementById("list2");
            var list3 = document.getElementById("list3");
            var result1 = document.getElementById("result1");
            var result2 = document.getElementById("result2");

            var price = 0;
            price += parseInt(list1.options[list1.selectedIndex].value);
            price += parseInt(list2.options[list2.selectedIndex].value);
            price += parseInt(list3.options[list3.selectedIndex].value);

            result2.innerHTML = price;
        }

        if (result2 >= 10000) {
            result1 = 10;
        } else {
            result1 = 5;
        }
