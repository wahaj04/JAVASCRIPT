const store = [
    {
        name: "Sweet Item",
        price: "$ 20",
        image: "https://thumbs.dreamstime.com/b/sweets-sweet-candies-10628079.jpg",
        type: "sweets"
    },

    {
        name: "Sweet Item",
        price: "$ 10",
        image: "https://img.freepik.com/free-photo/traditional-macaroons-different-colors-stand-pyramid-pink-background-isolated-item-sweets-confectionery-top-view-flat-lay_136344-1978.jpg?size=626&ext=jpg",
        type: "sweets"
    },

    {
        name: "Sweet Item",
        price: "$ 10",
        image: "https://static.toiimg.com/thumb/87485759.cms?width=680&height=512&imgsize=146378",
        type: "sweets"
    },

    {
        name: "Sweet Item",
        price: "$ 10",
        image: "http://content.khou.com/photo/2017/02/01/dessertgal13_1485986254618_8003428_ver1.0.jpg",
        type: "sweets"
    },

    {
        name: "Sweet Item",
        price: "$ 10",
        image: "https://i.ytimg.com/vi/hB_pohHCVQw/maxresdefault.jpg",
        type: "sweets"
    },

    {
        name: "Sweet Item",
        price: "$ 10",
        image: "https://www.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
        type: "sweets"
    },

    {
        name: "Cakes",
        price: "$ 30",
        image: "https://allmehandidesigns.com/wp-content/uploads/2019/12/chocolate-and-cream-layer-cake-1812-cover.jpg",
        type: "cake"
    },

    {
        name: "Cakes",
        price: "$ 30",
        image: "https://img.taste.com.au/DqTMY6Cz/taste/2018/08/smarties-chocolate-cake-139872-2.jpg",
        type: "cake"
    },

    {
        name: "Cake Item",
        price: "$ 35",
        image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        type: "cake"
    },

    {
        name: "Cake Item",
        price: "$ 35",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxS4tgkLy6egVISsf2HzDYJ2xQLd_Z5LVyVA&usqp=CAU",
        type: "cake"
    },

    {
        name: "Cake Item",
        price: "$ 35",
        image: "https://www.onceuponachef.com/images/2021/03/flourless-chocolate-cake-scaled.jpg",
        type: "cake"
    },

    {
        name: "Cake Item",
        price: "$ 35",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NyulaB-S3HnmQ1n5c51dYaoA7lV3MJ6AcT3XRlEjrXawAd-6uHrqhjYPIxgebiXibbE&usqp=CAU",
        type: "cake"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://preppykitchen.com/wp-content/uploads/2018/08/Shag-Cupcakes-Feature.jpg",
        type: "cupcakes"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://thebusybaker.ca/wp-content/uploads/2019/09/best-ever-from-scratch-chocolate-cupcakes-fb-ig-3.jpg",
        type: "cupcakes"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://www.sweetestmenu.com/wp-content/uploads/2020/08/cupcakes3b-650x361.jpg",
        type: "cupcakes"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://food-images.files.bbci.co.uk/food/recipes/cupcakes_93722_16x9.jpg",
        type: "cupcakes"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://doctordavidhill.com/wp-content/uploads/2017/07/Cupcakes.jpg",
        type: "cupcakes"
    },

    {
        name: "Cupcake Item",
        price: "$ 20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6otveGCTdCHa_U7sY6ASqJPGVeNLi8lmug&usqp=CAU",
        type: "cupcakes"
    },

    {
        name: "Doughnuts",
        price: "$ 15",
        image: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180905143952/Doughnuts-2.jpg",
        type: "doughnut"
    },

    {
        name: "Doughnuts",
        price: "$ 15",
        image: "https://centralca.cdn-anvilcms.net/media/images/2021/05/25/images/Donuts_pix.max-1200x675.jpg",
        type: "doughnut"
    },

    {
        name: "Doughnuts",
        price: "$ 20",
        image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/06/119434.jpeg",
        type: "doughnut"
    },

    {
        name: "Doughnuts",
        price: "$ 20",
        image: "https://www.biggerbolderbaking.com/wp-content/uploads/2018/05/NO-yeast-Homemade-donuts-FINAL.jpg",
        type: "doughnut"
    },

    {
        name: "Doughnuts",
        price: "$ 20",
        image: "https://blog.universalorlando.com/wp-content/uploads/2018/02/Voodoo-Doughnut-Universal-CityWalk-940x588.jpg",
        type: "doughnut"
    },

    {
        name: "Doughnuts",
        price: "$ 20",
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Glazed-Donuts.png",
        type: "doughnut"
    },
]
let divimg = document.getElementById("img-div");

function Val(list) {
    for (i = 0; i < list.length; i++) {
        let div = document.createElement("div");
        // set names values
        let span = document.createElement("span");
        //set prices values
        let para = document.createElement("span");
        // set images
        let img = document.createElement("img");
        img.setAttribute("src", list[i].image);
        // get images 
        div.appendChild(img, span);
        div.setAttribute("id", `img_boxes`);
        divimg.appendChild(div, span);
        // get names values
        span.innerHTML = list[i].name;
        div.appendChild(span);

        //get prices value
        para.innerHTML = list[i].price;
        div.appendChild(para).style.float = "right";
    }
}
// You will find it something when you search.
function getVal() {
    let value = document.getElementById("search").value;

    let type = value;

    divimg.innerHTML = ""

    if (type === 'all') {
        Val(store);
        return;
    }
    // Pressing the button will get you its value

    let filterdList = store.filter(getVal);
    function getVal(values) {

        return values.type == value;
    }

    // console.log(filterdList)
    Val(filterdList);


    let fol = store.filter(checkVal);
    // console.log(fol)
    function checkVal(item) {
        // console.log("filter ========== ", value)
        return item.type === value;
    }
}
// The value will be found when the buttons is pressed.
function setType(event) {
    // alert("workinh")
    let type = event;
    // alert(type);
    divimg.innerHTML = ""

    if (type === 'all') {
        Val(store);
        return;
    }
    // Pressing the button will get you its value
    let filterdList = store.filter(getVal);
    function getVal(values) {

        return values.type == event;
    }
    // console.log(filterdList)
    Val(filterdList);
}