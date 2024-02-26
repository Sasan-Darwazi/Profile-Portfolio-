

// this code lines' taking make the link between choose-img and file-input
// Step one: linking button choose-image to file-input
 const fileInput = document.querySelector(".file-input"), //taking the file-input
 chooseImgAsBtn = document.querySelector(".choose-img");//taking the choose-img

//  step three for loading the image 
previewImg = document.querySelector(".preview-img img");

// Step four FilterOption for giving color to each button
filterOptions = document.querySelectorAll(".filter button");

// Step five, for brightness
filterInfo = document.querySelector(".filter-info .bright");



// Step six, for display the changing value that turn into another value in range
filterValue = document.querySelector(".filter-info .value");


filterSlider = document.querySelector(".slider input");


// step eight, it's time for carry out the rotate to each button
rotateOptions = document.querySelectorAll(".rotate button");

// step nine, time for reset filter from all filter which has filtered
resetFilterOption = document.querySelector(".reset");

// step ten
saveImageBtn = document.querySelector(".save-img");

// step eleven
saveImageBtn = document.querySelector(".save-img");


// this variable is for, when the user selected the buttons, each buttons increase their numbers

let blackpoint = 100, vibrance = 100, brightness = 100, saturation = 100,  inversion = 0, grayscale = 0;


// rotate variable is pertain to rotateOption
let rotate = 0, leftAndRight = 1, upAnddown = 1;

// this functtion as it's clear from its name, for updating the filters
const applyFilter = function(){


    // this is belong the rotateOption
    previewImg.style.transform = `rotate(${rotate}deg) scale(${leftAndRight}, ${upAnddown})`
    
    // this is belong to filterOption
    previewImg.style.filter = ` brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)` ;
   
}

// this function load the image by user selected
const loadImage = function(){
let file = fileInput.files[0]; //getting user selected file
if(!file) return; //if user select nothing then nothing will return
previewImg.src = URL.createObjectURL(file); //passing the file URL-Imgaes as src
console.log(file);

}


// this is for giving colors by using each button

filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .name").classList.remove("name");
        option.classList.add("name");
        filterInfo.innerText = option.innerText; //this is for automatically changing when the user click the buttons
   
        // this is for bring changes into values of ranges
      
        
         if(option.id === "brightness"){
            filterSlider.max = "200";
            filterSlider.value = brightness;

            filterValue.innerText = `${brightness}`;
        }else if(option.id === "saturation"){
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}`;
        }
       
        else if(option.id === "inversion"){
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}`;
        }
         else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}`
        }
    })
})


// This function is for counting the percentage of brightness value
const updateFilter = function(){
    console.log(filterSlider.value);
    filterValue.innerText = `${filterSlider.value}%`
   
    const filterSelected = document.querySelector(".filter .name"); //getting the selected button
    
    
    
     if(filterSelected.id === "brightness"){
        brightness = filterSlider.value;
    }else if(filterSelected.id === "saturation"){
        saturation =  filterSlider.value;
    }
    
    else if(filterSelected.id === "inversion"){
        inversion = filterSlider.value;
    }
    else {
        grayscale = filterSlider.value;
    }

    applyFilter();
}




// adding click event listner to all rotate button
rotateOptions.forEach(function(options){
    options.addEventListener("click", () => {
       if(options.id === "left"){
        rotate -= 90; 
       }else if(options.id === "right"){ //if the user clicked this btn, its decrement rotate value by - 90
        rotate += 90;
       }else if(options.id === "leftAndright"){

        // if the leftAndRight value is 1, change the value to -1, else set this to 1;
       leftAndRight = leftAndRight === 1 ? -1 : 1; 
       }else {

        //this is the same action as above.
        upAnddown = upAnddown === 1 ? -1 : 1;
       }
        console.log(options);
        applyFilter();
    })
})

// Reset all the value to its default value;
const resetFilter = function(){
     brightness = 100; saturation = 100; inversion = 0; grayscale = 0;
    rotate = 0; leftAndRight = 1; upAnddown = 1;
    
    // this is for reseting the filterOptions appliances and the brightness selected automatically.
    filterOptions[0].click(); 
    applyFilter();
}

const saveImage = function(){

    const canvas = document.createElement("canvas"); //creating canvas
    const canvasTX = canvas.getContext("2d"); // canvas.getContext its return a drawing context in the canvas
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    //this is for drawImage with its filters
    canvasTX.filter =  `  brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    // fisrt-0 = draw-x, second-0 = drawheight,
    //drawWidth and drawHeight

    // canvasTX.drawImage(previewImg, 0, 0 ,  canvas.width, canvas.height);
  

    
   
    // this is for draw the complete getting filters picture
//    or translate the whole image to the center

    canvasTX.translate(canvas.width / 2, canvas.height / 2);
  
    // this is for draw the image with left and right rotate
    if(rotate !== 0 ){
        canvasTX.rotate(rotate * Math.PI / 180);
    }
    // this line below for printing the image with its left and right and up,down
    canvasTX.scale(leftAndRight, upAnddown);
  
    canvasTX.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2,  canvas.width, canvas.height);
   
    // document.body.appendChild(canvas);

    // download the image
    const link = document.createElement("a"); //Create <a> element

    // this below code pass the <a> tag download value to "image.jpg"
    link.download = "image.jpg";

    // this below code pass the <a> href tag to canvas dataURL
    link.href = canvas.toDataURL();

    // by clicking this below code, image is going to be downloaded
    link.click();


}


fileInput.addEventListener("change", loadImage);

chooseImgAsBtn.addEventListener("click", () => fileInput.click());

filterSlider.addEventListener("input",updateFilter);

saveImageBtn.addEventListener("click", saveImage);



resetFilterOption.addEventListener("click", resetFilter);




const link = document.querySelector("link");

function messgae(){
    console.log("Hello")
}
link.addEventListener("click", e => messgae);


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "rgba(12, 9, 9, .3)";
    }
})



