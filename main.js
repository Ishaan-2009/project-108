dog_result_number = 0;
cat_result_number = 0;
lion_result_number = 0;
cow_result_number = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eoUMZH8eH/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "The detcted voice is of - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_r + ")";

        if (results[0].label = "Barking") {
            document.getElementById("dog_img").style.visibility = 'visible';
            dog_result_number = dog_result_number + 1;
            document.getElementById("dog_number").innerHTML = dog_result_number;
            document.getElementById("cat_img").style.visibility = 'hidden';
            document.getElementById("lion_img").style.visibility = 'hidden';
            document.getElementById("cow_img").style.visibility = 'hidden';
            document.getElementById("ear_img").style.visibility = 'hidden';
        }

        if (results[0].label = "Meowing") {
            document.getElementById("cat_img").style.visibility = 'visible';
            cat_result_number = cat_result_number + 1;
            document.getElementById("cat_number").innerHTML = cat_result_number;
            document.getElementById("lion_img").style.visibility = 'hidden';
            document.getElementById("cow_img").style.visibility = 'hidden';
            document.getElementById("ear_img").style.visibility = 'hidden';
            document.getElementById("dog_img").style.visibility = 'hidden';   
        }

        if (results[0].label = "Roar") {
            document.getElementById("lion_img").style.visibility = 'visible';
            lion_result_number = lion_result_number + 1;
            document.getElementById("lion_number").innerHTML = lion_result_number;
            document.getElementById("cat_img").style.visibility = 'hidden';
            document.getElementById("cow_img").style.visibility = 'hidden';
            document.getElementById("ear_img").style.visibility = 'hidden';
            document.getElementById("dog_img").style.visibility = 'hidden'; 

        }
            
        if (results[0].label = "Mooing") {
            document.getElementById("cow_img").style.visibility = 'visible';
            cow_result_number = cow_result_number + 1;
            document.getElementById("cow_number").innerHTML = cow_result_number;
            document.getElementById("lion_img").style.visibility = 'hidden';
            document.getElementById("cat_img").style.visibility = 'hidden';
            document.getElementById("ear_img").style.visibility = 'hidden';
            document.getElementById("dog_img").style.visibility = 'hidden';   
         }


}

}